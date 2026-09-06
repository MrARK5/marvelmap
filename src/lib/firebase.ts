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

// Default live Firebase project configuration for MarvelMap
const DEFAULT_FIREBASE_CONFIG = {
  projectId: "marvelmap-watchlist-2026",
  appId: "1:403670286348:web:58d38d81d496693b946e29",
  storageBucket: "marvelmap-watchlist-2026.firebasestorage.app",
  apiKey: "AIzaSyBtMMaFedqvjLs4USgF4k5Rbqa3dxIvRPM",
  authDomain: "marvelmap-watchlist-2026.firebaseapp.com",
  messagingSenderId: "403670286348",
};

const STORAGE_CONFIG_KEY = 'marvelmap_firebase_config';

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
    console.error('Failed to parse saved config', e);
  }

  // Use environment variables if set, otherwise use DEFAULT_FIREBASE_CONFIG
  return {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || DEFAULT_FIREBASE_CONFIG.apiKey,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || DEFAULT_FIREBASE_CONFIG.authDomain,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || DEFAULT_FIREBASE_CONFIG.projectId,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || DEFAULT_FIREBASE_CONFIG.storageBucket,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || DEFAULT_FIREBASE_CONFIG.messagingSenderId,
    appId: import.meta.env.VITE_FIREBASE_APP_ID || DEFAULT_FIREBASE_CONFIG.appId,
  };
}

let currentConfig = getInitialConfig();

export let isFirebaseConfigured = true;
export let app: FirebaseApp | null = null;
export let auth: Auth | null = null;
export let db: Firestore | null = null;

export function initFirebase(config = currentConfig) {
  if (config?.apiKey && config?.projectId) {
    try {
      app = getApps().length === 0 ? initializeApp(config) : getApps()[0];
      auth = getAuth(app);
      try {
        db = getFirestore(app);
      } catch (e) {
        console.warn('Firestore optional init error:', e);
      }
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

// Watchlist data shape for sync
export interface UserWatchlistData {
  statusMap: Record<string, string>;
  episodeStatusMap: Record<string, Record<number, boolean>>;
  userNotes?: Record<string, string>;
  updatedAt: string;
}

/**
 * Save user watchlist data to Firestore and persistent local storage
 */
export async function saveUserData(uid: string, data: UserWatchlistData): Promise<void> {
  // Always persist locally under account UID
  try {
    localStorage.setItem(`marvelmap_account_data_${uid}`, JSON.stringify(data));
  } catch (e) {
    console.error('Local account save failed', e);
  }

  // If Firestore is available, sync to Cloud Firestore
  if (isFirebaseConfigured && db) {
    try {
      const userRef = doc(db, 'users', uid);
      await setDoc(userRef, data, { merge: true });
    } catch (err) {
      // Cloud Firestore might be in local mode or API pending
      console.log('Local account saved (cloud sync pending):', err);
    }
  }
}

/**
 * Load user watchlist data from Firestore or local account store
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
      console.log('Loading from local account storage');
    }
  }

  // Load from persistent local account storage
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
