import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  Auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
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

// Check if Firebase environment variables are configured
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && 
  firebaseConfig.projectId
);

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (error) {
    console.warn('Firebase initialization skipped or failed:', error);
  }
}

export { auth, db };

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
