import React, { useState } from 'react';
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
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(Boolean(searchQuery));

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
    <header className="sticky top-0 z-40 bg-[#0A0C10]/95 backdrop-blur-md border-b border-[#1E2536]">
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        
        {/* Main Bar */}
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
          
          {/* Brand */}
          <div className="flex items-center gap-2 cursor-pointer select-none flex-shrink-0">
            <div className="bg-[#E62429] text-white font-black text-xs tracking-wider px-2 py-0.5 rounded-sm">
              MARVEL
            </div>
            <span className="font-bold text-sm text-slate-100 tracking-tight">
              MAP
            </span>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden sm:block relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search titles, universe..."
              className="w-full bg-[#11141E] border border-[#1E2536] rounded-xl pl-8 pr-7 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#E62429] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Desktop Progress metric pill */}
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-xl bg-[#11141E] border border-[#1E2536] text-xs flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-slate-300 font-mono text-[11px]">
              {stats.watchedCount}/{stats.activeItems}
            </span>
            <span className="text-slate-500 font-mono text-[11px]">
              ({stats.completionPercentage}%)
            </span>
            {stats.skippedCount > 0 && (
              <span className="text-slate-500 text-[10px] pl-1 border-l border-slate-700">
                {stats.skippedCount} skipped
              </span>
            )}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            
            {/* Mobile Search Toggle Button */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className={`sm:hidden p-2 rounded-xl border transition-colors ${
                isMobileSearchOpen || searchQuery
                  ? 'bg-[#1E2536] border-[#2E3852] text-white'
                  : 'bg-[#11141E] border-[#1E2536] text-slate-400'
              }`}
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* User Auth Button / Profile Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1 rounded-xl bg-[#11141E] border border-[#1E2536] hover:border-[#2E3852] text-xs text-slate-200"
                  title={user.email}
                >
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Avatar" className="w-5 h-5 rounded-full" />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-[#E62429] text-white flex items-center justify-center font-bold text-[10px] uppercase">
                      {(user.displayName || user.email)[0]}
                    </div>
                  )}
                  <span className="hidden sm:inline max-w-[90px] truncate text-[11px]">
                    {user.displayName || user.email.split('@')[0]}
                  </span>
                  <Cloud className={`w-3 h-3 ${isSavingToCloud ? 'animate-pulse text-blue-400' : 'text-emerald-400'}`} />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-1.5 w-48 bg-[#11141E] border border-[#1E2536] rounded-xl shadow-xl py-1 z-50 text-xs">
                    <div className="px-3 py-2 border-b border-[#1E2536]">
                      <div className="font-semibold text-white truncate">
                        {user.displayName || 'User'}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        {user.email}
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-400">
                        <Check className="w-3 h-3" />
                        <span>Cloud Sync Active</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        signOut();
                      }}
                      className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-500/10 flex items-center gap-2"
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E2536] hover:bg-[#2A344A] text-white text-xs font-medium transition-colors border border-[#2E3852]"
              >
                <User className="w-3.5 h-3.5" />
                <span className="text-xs">Sign In</span>
              </button>
            )}

            {/* Tools Menu */}
            <div className="relative">
              <button
                onClick={() => setShowToolsMenu(!showToolsMenu)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-200 bg-[#11141E] border border-[#1E2536]"
                title="Options"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>

              {showToolsMenu && (
                <div className="absolute right-0 mt-1.5 w-44 bg-[#11141E] border border-[#1E2536] rounded-xl shadow-xl py-1 z-50 text-xs">
                  <button
                    onClick={handleExport}
                    className="w-full text-left px-3 py-2 text-slate-300 hover:bg-[#181E2E] flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                    <span>Backup Data</span>
                  </button>
                  <button
                    onClick={handleImport}
                    className="w-full text-left px-3 py-2 text-slate-300 hover:bg-[#181E2E] flex items-center gap-2"
                  >
                    <Upload className="w-3.5 h-3.5 text-slate-400" />
                    <span>Restore Backup</span>
                  </button>
                  <div className="border-t border-[#1E2536] my-1" />
                  <button
                    onClick={() => {
                      setShowToolsMenu(false);
                      resetAllProgress();
                    }}
                    className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-500/10 flex items-center gap-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Data</span>
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Mobile Search Bar Drawer (Opens when search icon is clicked) */}
        {isMobileSearchOpen && (
          <div className="sm:hidden pb-3 pt-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies, series, universe..."
                className="w-full bg-[#11141E] border border-[#1E2536] rounded-xl pl-9 pr-8 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#E62429]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
