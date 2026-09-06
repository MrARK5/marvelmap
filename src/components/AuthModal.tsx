import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Mail, 
  User, 
  Cloud, 
  AlertCircle, 
  Loader2, 
  KeyRound, 
  Check, 
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { signIn, signUp, signInWithGoogle, isFirebaseActive, connectCloud } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Quick Google Email input if Firebase isn't set up yet
  const [showGoogleEmailPrompt, setShowGoogleEmailPrompt] = useState(false);
  const [googleCustomEmail, setGoogleCustomEmail] = useState('');

  // Firebase Config Setup drawer
  const [showConfigSetup, setShowConfigSetup] = useState(false);
  const [configJson, setConfigJson] = useState('');
  const [configSuccess, setConfigSuccess] = useState(false);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setError(null);

    // If Firebase is active, launch official Google popup
    if (isFirebaseActive) {
      setGoogleLoading(true);
      try {
        await signInWithGoogle();
        onClose();
      } catch (err: any) {
        let msg = err.message || 'Google Sign-In failed.';
        if (msg.includes('auth/popup-closed-by-user')) {
          msg = 'Sign-in popup was closed.';
        } else if (msg.includes('auth/unauthorized-domain')) {
          msg = 'This domain is not yet authorized in Firebase Console > Authentication > Settings > Authorized Domains.';
        }
        setError(msg);
      } finally {
        setGoogleLoading(false);
      }
      return;
    }

    // If Firebase is not yet configured, ask for their Gmail address to sign in with their Google profile
    setShowGoogleEmailPrompt(true);
  };

  const handleConfirmGoogleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!googleCustomEmail.trim() || !googleCustomEmail.includes('@')) {
      setError('Please enter a valid Gmail or Google account email.');
      return;
    }
    setGoogleLoading(true);
    try {
      await signInWithGoogle(googleCustomEmail.trim());
      onClose();
    } catch (err: any) {
      setError(err.message || 'Sign in failed.');
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSaveFirebaseConfig = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      let parsed = JSON.parse(configJson);
      if (parsed.firebaseConfig) parsed = parsed.firebaseConfig;
      if (!parsed.apiKey || !parsed.projectId) {
        throw new Error('Config must contain at least "apiKey" and "projectId".');
      }
      if (connectCloud(parsed)) {
        setConfigSuccess(true);
        setTimeout(() => {
          setConfigSuccess(false);
          setShowConfigSetup(false);
        }, 1500);
      } else {
        throw new Error('Failed to initialize Firebase with provided config.');
      }
    } catch (err: any) {
      setError('Invalid JSON format: ' + (err.message || ''));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === 'signin') {
        await signIn(email, password);
      } else {
        await signUp(email, password, displayName);
      }
      onClose();
    } catch (err: any) {
      let msg = err.message || 'Authentication failed. Please try again.';
      if (msg.includes('auth/invalid-credential') || msg.includes('auth/wrong-password')) {
        msg = 'Invalid email or password.';
      } else if (msg.includes('auth/email-already-in-use')) {
        msg = 'An account already exists with this email.';
      } else if (msg.includes('auth/weak-password')) {
        msg = 'Password should be at least 6 characters.';
      }
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#11141E] border border-[#1E2536] rounded-2xl shadow-2xl p-5 sm:p-6 z-10 space-y-4 my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base sm:text-lg text-white">
              {showGoogleEmailPrompt 
                ? 'Sign In with Google' 
                : mode === 'signin' 
                ? 'Sign In to MarvelMap' 
                : 'Create an Account'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Sync your watchlist across phone, tablet, and PC.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1E2536] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Google Email Input Prompt (if in offline/quick Google mode) */}
        {showGoogleEmailPrompt ? (
          <form onSubmit={handleConfirmGoogleEmail} className="space-y-3 pt-1">
            <div className="p-3 rounded-xl bg-[#0A0C10] border border-[#1E2536] text-xs text-slate-300 space-y-1">
              <div className="font-medium text-white flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Enter your Google / Gmail address:</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Your watchlist will be permanently tied to this Google account.
              </p>
            </div>

            <div>
              <input
                type="email"
                autoFocus
                required
                value={googleCustomEmail}
                onChange={(e) => setGoogleCustomEmail(e.target.value)}
                placeholder="your.name@gmail.com"
                className="w-full bg-[#0A0C10] border border-[#1E2536] rounded-xl px-3.5 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#E62429]"
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowGoogleEmailPrompt(false)}
                className="flex-1 py-2 rounded-xl bg-[#1E2536] text-slate-300 hover:text-white text-xs font-medium"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={googleLoading}
                className="flex-1 py-2 rounded-xl bg-[#E62429] hover:bg-[#CC1E23] text-white text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                {googleLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                <span>Sign In with Gmail</span>
              </button>
            </div>
          </form>
        ) : (
          <>
            {/* 1. Google Sign In Button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={googleLoading || loading}
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm flex items-center justify-center gap-3 transition-colors shadow-sm disabled:opacity-50"
            >
              {googleLoading ? (
                <Loader2 className="w-4 h-4 animate-spin text-slate-700" />
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              )}
              <span>Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-2">
              <div className="border-t border-[#1E2536] w-full" />
              <span className="bg-[#11141E] px-2 text-[11px] text-slate-500 uppercase tracking-wider font-mono">
                or email
              </span>
            </div>

            {/* Tab selector */}
            <div className="flex items-center bg-[#0A0C10] p-1 rounded-xl border border-[#1E2536]">
              <button
                type="button"
                onClick={() => { setMode('signin'); setError(null); }}
                className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  mode === 'signin'
                    ? 'bg-[#1E2536] text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => { setMode('signup'); setError(null); }}
                className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  mode === 'signup'
                    ? 'bg-[#1E2536] text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {mode === 'signup' && (
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Your Name (Optional)
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Peter Parker"
                      className="w-full bg-[#0A0C10] border border-[#1E2536] rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#E62429]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#0A0C10] border border-[#1E2536] rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#E62429]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="w-full bg-[#0A0C10] border border-[#1E2536] rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#E62429]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || googleLoading}
                className="w-full py-2.5 rounded-xl bg-[#E62429] hover:bg-[#CC1E23] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 mt-3 disabled:opacity-50"
              >
                {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                <span>{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
              </button>
            </form>

            {/* Cloud Setup Accordion (Allows connecting live Firebase without terminal) */}
            <div className="pt-2 border-t border-[#1E2536]">
              <button
                type="button"
                onClick={() => setShowConfigSetup(!showConfigSetup)}
                className="w-full flex items-center justify-between text-[11px] text-slate-400 hover:text-slate-200 py-1"
              >
                <span className="flex items-center gap-1.5">
                  <Cloud className={`w-3.5 h-3.5 ${isFirebaseActive ? 'text-emerald-400' : 'text-blue-400'}`} />
                  <span>
                    {isFirebaseActive ? 'Firebase Cloud Connected' : 'Connect Firebase for 1-Click Google Popup'}
                  </span>
                </span>
                {showConfigSetup ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>

              {showConfigSetup && (
                <form onSubmit={handleSaveFirebaseConfig} className="space-y-2 mt-2 p-3 rounded-xl bg-[#0A0C10] border border-[#1E2536]">
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Paste your Firebase config JSON below to enable live Google popup authentication and Cloud Firestore:
                  </p>
                  <textarea
                    rows={4}
                    value={configJson}
                    onChange={(e) => setConfigJson(e.target.value)}
                    placeholder='{"apiKey": "...", "projectId": "...", "authDomain": "..."}'
                    className="w-full bg-[#11141E] border border-[#1E2536] rounded-lg p-2 text-[11px] font-mono text-slate-200 focus:outline-none focus:border-[#E62429]"
                  />
                  {configSuccess && (
                    <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      <span>Firebase connected successfully!</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full py-1.5 rounded-lg bg-[#1E2536] hover:bg-[#2A344A] text-white text-xs font-medium"
                  >
                    Save & Activate Cloud Sync
                  </button>
                </form>
              )}
            </div>
          </>
        )}

      </div>

    </div>
  );
};
