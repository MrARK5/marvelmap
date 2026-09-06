import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  Auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup,
  GoogleAuthProvider,
  signOut as fbSignOut, 
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  getFirestore, 
  Firestore, 
  doc, 
  getDoc, 
  setDoc 
} from 'firebase/firestore';

const STORAGE_CONFIG_KEY = 'marvelmap_firebase_config';

// Load stored config or environment variables
function getInitialConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_CONFIG_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.apiKey && parsed.projectId) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to parse saved firebase config', e);
  }

  return {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };
}

let currentConfig = getInitialConfig();

export let isFirebaseConfigured = Boolean(
  currentConfig?.apiKey && 
  currentConfig?.projectId
);

export let app: FirebaseApp | null = null;
export let auth: Auth | null = null;
export let db: Firestore | null = null;

export function initFirebase(config = currentConfig) {
  if (config?.apiKey && config?.projectId) {
    try {
      app = getApps().length === 0 ? initializeApp(config) : getApps()[0];
      auth = getAuth(app);
      db = getFirestore(app);
      isFirebaseConfigured = true;
      currentConfig = config;
      return true;
    } catch (error) {
      console.warn('Firebase initialization error:', error);
    }
  }
  return false;
}

// Initialize on module load
initFirebase();

export function saveFirebaseConfig(config: Record<string, string>): boolean {
  try {
    localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(config));
    return initFirebase(config);
  } catch (e) {
    console.error('Failed to save firebase config', e);
    return false;
  }
}

// Watchlist data shape for cloud sync
export interface UserWatchlistData {
  statusMap: Record<string, string>;
  episodeStatusMap: Record<string, Record<number, boolean>>;
  userNotes?: Record<string, string>;
  updatedAt: string;
}

/**
 * Save user watchlist data to Firestore or fallback store
 */
export async function saveUserData(uid: string, data: UserWatchlistData): Promise<void> {
  if (isFirebaseConfigured && db) {
    try {
      const userRef = doc(db, 'users', uid);
      await setDoc(userRef, data, { merge: true });
      return;
    } catch (err) {
      console.error('Firestore save failed, saving locally:', err);
    }
  }

  // Local fallback account storage
  try {
    localStorage.setItem(`marvelmap_account_data_${uid}`, JSON.stringify(data));
  } catch (e) {
    console.error('Local account save failed', e);
  }
}

/**
 * Load user watchlist data from Firestore or fallback store
 */
export async function loadUserData(uid: string): Promise<UserWatchlistData | null> {
  if (isFirebaseConfigured && db) {
    try {
      const userRef = doc(db, 'users', uid);
      const snapshot = await getDoc(userRef);
      if (snapshot.exists()) {
        return snapshot.data() as UserWatchlistData;
      }
    } catch (err) {
      console.error('Firestore load failed, loading from local backup:', err);
    }
  }

  // Local fallback account storage
  try {
    const saved = localStorage.getItem(`marvelmap_account_data_${uid}`);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Local account load failed', e);
  }

  return null;
}
