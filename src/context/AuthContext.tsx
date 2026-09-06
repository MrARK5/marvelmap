import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  auth, 
  isFirebaseConfigured,
  initFirebase,
  saveFirebaseConfig
} from '../lib/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup,
  GoogleAuthProvider,
  signOut as fbSignOut, 
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';

export interface AppUser {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  isCloudUser: boolean;
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  isSyncing: boolean;
  setIsSyncing: (val: boolean) => void;
  isFirebaseActive: boolean;
  signIn: (email: string, pass: string) => Promise<void>;
  signUp: (email: string, pass: string, name?: string) => Promise<void>;
  signInWithGoogle: (emailPromptFallback?: string) => Promise<void>;
  connectCloud: (config: Record<string, string>) => boolean;
  signOut: () => Promise<void>;
}

const LOCAL_SESSION_KEY = 'marvelmap_auth_session';
const LOCAL_USERS_KEY = 'marvelmap_local_accounts';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [firebaseActive, setFirebaseActive] = useState(isFirebaseConfigured);

  // Initialize Auth state
  useEffect(() => {
    if (firebaseActive && auth) {
      const unsubscribe = onAuthStateChanged(auth, (fbUser: FirebaseUser | null) => {
        if (fbUser) {
          setUser({
            uid: fbUser.uid,
            email: fbUser.email || 'user@marvelmap.app',
            displayName: fbUser.displayName || fbUser.email?.split('@')[0],
            photoURL: fbUser.photoURL || undefined,
            isCloudUser: true,
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      });
      return unsubscribe;
    } else {
      // Local fallback account session
      try {
        const savedSession = localStorage.getItem(LOCAL_SESSION_KEY);
        if (savedSession) {
          setUser(JSON.parse(savedSession));
        }
      } catch (e) {
        console.error('Failed to load local auth session', e);
      }
      setLoading(false);
    }
  }, [firebaseActive]);

  const signIn = useCallback(async (email: string, pass: string): Promise<void> => {
    const cleanEmail = email.trim().toLowerCase();

    if (firebaseActive && auth) {
      await signInWithEmailAndPassword(auth, cleanEmail, pass);
      return;
    }

    // Local fallback sign in
    const localUsersStr = localStorage.getItem(LOCAL_USERS_KEY);
    const localUsers: Record<string, { email: string; pass: string; name?: string; uid: string }> = 
      localUsersStr ? JSON.parse(localUsersStr) : {};

    const existing = localUsers[cleanEmail];
    if (!existing) {
      throw new Error('No account found with this email. Please click "Create Account".');
    }
    if (existing.pass !== pass) {
      throw new Error('Incorrect password.');
    }

    const appUser: AppUser = {
      uid: existing.uid,
      email: existing.email,
      displayName: existing.name || existing.email.split('@')[0],
      isCloudUser: false,
    };

    localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify(appUser));
    setUser(appUser);
  }, [firebaseActive]);

  const signUp = useCallback(async (email: string, pass: string, name?: string): Promise<void> => {
    const cleanEmail = email.trim().toLowerCase();

    if (pass.length < 6) {
      throw new Error('Password must be at least 6 characters long.');
    }

    if (firebaseActive && auth) {
      await createUserWithEmailAndPassword(auth, cleanEmail, pass);
      return;
    }

    // Local fallback sign up
    const localUsersStr = localStorage.getItem(LOCAL_USERS_KEY);
    const localUsers: Record<string, { email: string; pass: string; name?: string; uid: string }> = 
      localUsersStr ? JSON.parse(localUsersStr) : {};

    if (localUsers[cleanEmail]) {
      throw new Error('An account with this email already exists. Please Sign In.');
    }

    const newUid = `user_${cleanEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;
    localUsers[cleanEmail] = {
      email: cleanEmail,
      pass,
      name: name || cleanEmail.split('@')[0],
      uid: newUid,
    };

    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(localUsers));

    const appUser: AppUser = {
      uid: newUid,
      email: cleanEmail,
      displayName: name || cleanEmail.split('@')[0],
      isCloudUser: false,
    };

    localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify(appUser));
    setUser(appUser);
  }, [firebaseActive]);

  const signInWithGoogle = useCallback(async (emailPromptFallback?: string): Promise<void> => {
    if (firebaseActive && auth) {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      await signInWithPopup(auth, provider);
      return;
    }

    // If Firebase isn't configured yet, prompt or use provided Gmail address
    const targetEmail = (emailPromptFallback || '').trim().toLowerCase();
    const finalEmail = targetEmail || 'user@gmail.com';
    const cleanUid = `google_${finalEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;

    const googleUser: AppUser = {
      uid: cleanUid,
      email: finalEmail,
      displayName: finalEmail.split('@')[0],
      isCloudUser: false,
    };
    localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify(googleUser));
    setUser(googleUser);
  }, [firebaseActive]);

  const connectCloud = useCallback((config: Record<string, string>): boolean => {
    const success = saveFirebaseConfig(config);
    if (success) {
      setFirebaseActive(true);
    }
    return success;
  }, []);

  const signOut = useCallback(async (): Promise<void> => {
    if (firebaseActive && auth) {
      await fbSignOut(auth);
      return;
    }

    localStorage.removeItem(LOCAL_SESSION_KEY);
    setUser(null);
  }, [firebaseActive]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isSyncing,
        setIsSyncing,
        isFirebaseActive: firebaseActive,
        signIn,
        signUp,
        signInWithGoogle,
        connectCloud,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
