import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  auth, 
  isFirebaseConfigured 
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
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const LOCAL_SESSION_KEY = 'marvelmap_auth_session';
const LOCAL_USERS_KEY = 'marvelmap_local_accounts';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  // Initialize Auth state
  useEffect(() => {
    if (isFirebaseConfigured && auth) {
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
  }, []);

  const signIn = useCallback(async (email: string, pass: string): Promise<void> => {
    const cleanEmail = email.trim().toLowerCase();

    if (isFirebaseConfigured && auth) {
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
  }, []);

  const signUp = useCallback(async (email: string, pass: string, name?: string): Promise<void> => {
    const cleanEmail = email.trim().toLowerCase();

    if (pass.length < 6) {
      throw new Error('Password must be at least 6 characters long.');
    }

    if (isFirebaseConfigured && auth) {
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

    const newUid = `user_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
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
  }, []);

  const signInWithGoogle = useCallback(async (): Promise<void> => {
    if (isFirebaseConfigured && auth) {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      await signInWithPopup(auth, provider);
      return;
    }

    // Instant local Google Sign In simulation when Firebase keys aren't configured yet
    const googleUser: AppUser = {
      uid: 'google_user_' + Date.now().toString(36),
      email: 'marvel.watcher@gmail.com',
      displayName: 'Marvel Watcher',
      isCloudUser: false,
    };
    localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify(googleUser));
    setUser(googleUser);
  }, []);

  const signOut = useCallback(async (): Promise<void> => {
    if (isFirebaseConfigured && auth) {
      await fbSignOut(auth);
      return;
    }

    localStorage.removeItem(LOCAL_SESSION_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isSyncing,
        setIsSyncing,
        isFirebaseActive: isFirebaseConfigured,
        signIn,
        signUp,
        signInWithGoogle,
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
