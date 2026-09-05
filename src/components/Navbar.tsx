import React, { useState } from 'react';
import { 
  Film, 
  Clock, 
  Compass, 
  Bookmark, 
  BarChart2, 
  Search, 
  X, 
  Menu, 
  Download,
  Upload,
  RotateCcw,
  MoreHorizontal,
  User,
  LogOut,
  Cloud,
  Check
} from 'lucide-react';
import { ActiveTab } from '../types/marvel';
import { useWatchlist } from '../context/WatchlistContext';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenAuth,
}) => {
  const { stats, exportData, importData, resetAllProgress, isSavingToCloud } = useWatchlist();
  const { user, signOut, isFirebaseActive } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showToolsMenu, setShowToolsMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

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

  const navItems = [
    { id: 'catalog' as ActiveTab, label: 'Catalog', icon: Film },
    { id: 'timeline' as ActiveTab, label: 'Timeline', icon: Clock },
    { id: 'watch-orders' as ActiveTab, label: 'Watch Orders', icon: Compass },
    { 
      id: 'watchlist' as ActiveTab, 
      label: 'Watchlist', 
      icon: Bookmark, 
      badge: stats.watchingCount + stats.watchLaterCount > 0 ? (stats.watchingCount + stats.watchLaterCount) : undefined 
    },
    { id: 'dashboard' as ActiveTab, label: 'Dashboard', icon: BarChart2 },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0C10]/95 backdrop-blur-md border-b border-[#1E2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer select-none"
            onClick={() => setActiveTab('catalog')}
          >
            <div className="bg-[#E62429] text-white font-extrabold text-sm tracking-wider px-2 py-0.5 rounded-sm">
              MARVEL
            </div>
            <span className="font-semibold text-base text-slate-100 tracking-tight">
              MAP
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#181E2E] text-white border border-[#2E3852]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-[#131722]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#E62429]' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#E62429] text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Search, Progress, Auth & Tools */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Search Input */}
            <div className="relative w-32 sm:w-52">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full bg-[#11141E] border border-[#1E2536] rounded-md pl-8 pr-7 py-1 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#E62429] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Progress pill */}
            <button
              onClick={() => setActiveTab('dashboard')}
              className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#11141E] border border-[#1E2536] hover:border-[#2E3852] transition-colors text-xs"
              title="View Watch Progress Dashboard"
            >
              <span className="w-2 h-2 rounded-full bg-[#E62429]" />
              <span className="text-slate-300 font-medium">
                {stats.watchedCount}/{stats.totalItems}
              </span>
              <span className="text-slate-500 font-mono text-[11px]">
                {stats.completionPercentage}%
              </span>
            </button>

            {/* User Auth Button / Profile Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-1.5 p-1 sm:px-2.5 sm:py-1 rounded-md bg-[#11141E] border border-[#1E2536] hover:border-[#2E3852] transition-colors text-xs text-slate-200"
                  title={user.email}
                >
                  <div className="w-5 h-5 rounded-full bg-[#E62429] text-white flex items-center justify-center font-bold text-[10px] uppercase">
                    {(user.displayName || user.email)[0]}
                  </div>
                  <span className="hidden sm:inline max-w-[100px] truncate text-[11px] font-medium">
                    {user.displayName || user.email.split('@')[0]}
                  </span>
                  <Cloud className={`w-3 h-3 ${isSavingToCloud ? 'animate-pulse text-blue-400' : 'text-emerald-400'}`} />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-1.5 w-52 bg-[#11141E] border border-[#1E2536] rounded-lg shadow-xl py-1 z-50 text-xs">
                    <div className="px-3 py-2 border-b border-[#1E2536]">
                      <div className="font-semibold text-white truncate">
                        {user.displayName || 'User'}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        {user.email}
                      </div>
                      <div className="mt-1 flex items-center gap-1.5 text-[10px] text-emerald-400">
                        <Check className="w-3 h-3" />
                        <span>Progress synced across devices</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setShowUserMenu(false);
                        signOut();
                      }}
                      className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-500/10 flex items-center gap-2 transition-colors"
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
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1E2536] hover:bg-[#2A344A] text-white text-xs font-semibold transition-colors border border-[#2E3852]"
              >
                <User className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}

            {/* Tools Menu */}
            <div className="relative">
              <button
                onClick={() => setShowToolsMenu(!showToolsMenu)}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-[#131722] border border-transparent hover:border-[#1E2536]"
                title="Options"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>

              {showToolsMenu && (
                <div className="absolute right-0 mt-1.5 w-44 bg-[#11141E] border border-[#1E2536] rounded-lg shadow-xl py-1 z-50 text-xs">
                  <button
                    onClick={handleExport}
                    className="w-full text-left px-3 py-1.5 text-slate-300 hover:bg-[#181E2E] flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-400" />
                    <span>Backup Watchlist</span>
                  </button>
                  <button
                    onClick={handleImport}
                    className="w-full text-left px-3 py-1.5 text-slate-300 hover:bg-[#181E2E] flex items-center gap-2"
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
                    className="w-full text-left px-3 py-1.5 text-red-400 hover:bg-red-500/10 flex items-center gap-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Progress</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-400 hover:text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-[#1E2536] py-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium ${
                    isActive
                      ? 'bg-[#181E2E] text-white'
                      : 'text-slate-400 hover:bg-[#131722]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-[#E62429] text-white font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        )}

      </div>
    </header>
  );
};
