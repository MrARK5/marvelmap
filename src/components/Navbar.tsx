import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  Download,
  Upload,
  RotateCcw,
  MoreHorizontal,
  User,
  LogOut,
  Cloud,
  Check
} from 'lucide-react';
import { useWatchlist } from '../context/WatchlistContext';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  onOpenAuth,
}) => {
  const { stats, exportData, importData, resetAllProgress, isSavingToCloud } = useWatchlist();
  const { user, signOut } = useAuth();
  const [showToolsMenu, setShowToolsMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const toolsMenuRef = useRef<HTMLDivElement>(null);

  // Reset avatar error state if user changes
  useEffect(() => {
    setAvatarError(false);
  }, [user?.photoURL]);

  // Keyboard shortcut / to focus search and outside click listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setShowToolsMenu(false);
        setShowUserMenu(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setShowUserMenu(false);
      }
      if (toolsMenuRef.current && !toolsMenuRef.current.contains(e.target as Node)) {
        setShowToolsMenu(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleExport = () => {
    const jsonStr = exportData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `marvelmap-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setShowToolsMenu(false);
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result as string;
          if (importData(content)) {
            alert('Watchlist restored successfully.');
          } else {
            alert('Invalid backup file.');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
    setShowToolsMenu(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#08090C]/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        
        {/* Main Bar */}
        <div className="flex items-center justify-between h-14 sm:h-15 gap-2 sm:gap-3">
          
          {/* Brand - Minimalist Wordmark */}
          <div className="flex items-center select-none flex-shrink-0 cursor-pointer">
            <div className="flex items-center tracking-tight">
              <span className="font-extrabold text-[13px] tracking-[0.14em] text-white">MARVEL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E62429] mx-1 sm:mx-1.5" />
              <span className="font-light text-[12px] tracking-[0.18em] text-slate-400">MAP</span>
            </div>
          </div>

          {/* Search Bar (Unified & Responsive) */}
          <div className="relative flex-1 max-w-xs sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search titles, year..."
              className="w-full bg-[#0F1118] border border-white/[0.08] hover:border-white/[0.14] rounded-lg pl-9 pr-9 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-white/25 focus:bg-[#12141E] transition-all"
            />
            {searchQuery ? (
              <button
                onClick={() => {
                  setSearchQuery('');
                  searchInputRef.current?.focus();
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-0.5 rounded transition-colors"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="hidden sm:inline-block absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500 bg-white/[0.04] border border-white/[0.08] px-1.5 py-0.5 rounded pointer-events-none">
                /
              </span>
            )}
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            
            {/* User Auth Pill / Profile Menu */}
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-1.5 sm:gap-2 p-1 sm:px-2.5 sm:py-1 rounded-lg bg-[#0F1118] border border-white/[0.08] hover:border-white/20 text-xs text-slate-200 transition-colors"
                  title={user.email}
                >
                  <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 bg-obsidian-950 border border-white/10 flex items-center justify-center">
                    {user.photoURL && !avatarError ? (
                      <img 
                        src={user.photoURL} 
                        alt="Avatar" 
                        referrerPolicy="no-referrer"
                        onError={() => setAvatarError(true)}
                        className="w-full h-full object-cover rounded-full" 
                      />
                    ) : (
                      <div className="w-full h-full bg-[#E62429] text-white flex items-center justify-center font-bold text-[10px] uppercase select-none">
                        {(user.displayName || user.email || 'U')[0]}
                      </div>
                    )}
                  </div>
                  <span className="hidden sm:inline max-w-[85px] truncate text-[11px] font-medium text-slate-300">
                    {user.displayName || user.email.split('@')[0]}
                  </span>
                  <Cloud className={`w-3.5 h-3.5 ml-0.5 shrink-0 ${isSavingToCloud ? 'animate-pulse text-sky-400' : 'text-emerald-400'}`} />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-1.5 w-52 bg-[#0F1118] border border-white/[0.1] rounded-xl shadow-modal py-1 z-50 text-xs backdrop-blur-xl animate-in fade-in zoom-in-95 duration-100">
                    <div className="px-3 py-2.5 border-b border-white/[0.06] flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 bg-obsidian-950 border border-white/10 flex items-center justify-center">
                        {user.photoURL && !avatarError ? (
                          <img 
                            src={user.photoURL} 
                            alt="Avatar" 
                            referrerPolicy="no-referrer"
                            onError={() => setAvatarError(true)}
                            className="w-full h-full object-cover rounded-full" 
                          />
                        ) : (
                          <div className="w-full h-full bg-[#E62429] text-white flex items-center justify-center font-bold text-[10px] uppercase">
                            {(user.displayName || user.email || 'U')[0]}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-white truncate text-[12px]">
                          {user.displayName || 'Marvel Fan'}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">
                          {user.email}
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Cloud Sync Active</span>
                    </div>

                    <div className="border-t border-white/[0.06] my-1" />

                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        signOut();
                      }}
                      className="w-full text-left px-3 py-2 text-rose-400 hover:bg-rose-500/10 flex items-center gap-2 transition-colors text-xs"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#0F1118] hover:bg-[#151824] text-slate-200 hover:text-white text-xs font-medium transition-colors border border-white/[0.08]"
              >
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Sign In</span>
              </button>
            )}

            {/* Options Tool Menu */}
            <div className="relative" ref={toolsMenuRef}>
              <button
                onClick={() => setShowToolsMenu(!showToolsMenu)}
                className="p-1.5 sm:p-2 rounded-lg text-slate-400 hover:text-slate-200 bg-[#0F1118] border border-white/[0.08] hover:border-white/20 transition-colors"
                title="Options"
              >
                <MoreHorizontal className="w-3.5 h-3.5" />
              </button>

              {showToolsMenu && (
                <div className="absolute right-0 mt-1.5 w-44 bg-[#0F1118] border border-white/[0.1] rounded-xl shadow-modal py-1 z-50 text-xs backdrop-blur-xl">
                  <button
                    onClick={handleExport}
                    className="w-full text-left px-3 py-2 text-slate-300 hover:bg-white/[0.04] flex items-center gap-2 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                    <span>Backup Data</span>
                  </button>
                  <button
                    onClick={handleImport}
                    className="w-full text-left px-3 py-2 text-slate-300 hover:bg-white/[0.04] flex items-center gap-2 transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5 text-slate-400" />
                    <span>Restore Backup</span>
                  </button>
                  <div className="border-t border-white/[0.06] my-1" />
                  <button
                    onClick={() => {
                      setShowToolsMenu(false);
                      resetAllProgress();
                    }}
                    className="w-full text-left px-3 py-2 text-rose-400 hover:bg-rose-500/10 flex items-center gap-2 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Data</span>
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </header>
  );
};
