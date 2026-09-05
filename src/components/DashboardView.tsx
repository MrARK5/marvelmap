import React from 'react';
import { 
  BarChart2, 
  Check, 
  Play, 
  Bookmark, 
  Clock, 
  Film, 
  Tv, 
  Download, 
  Upload, 
  RotateCcw,
  Cloud,
  UserCheck,
  LogIn
} from 'lucide-react';
import { useWatchlist } from '../context/WatchlistContext';
import { useAuth } from '../context/AuthContext';

interface DashboardViewProps {
  onOpenAuth: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onOpenAuth }) => {
  const { stats, exportData, importData, resetAllProgress, isSavingToCloud } = useWatchlist();
  const { user, isFirebaseActive } = useAuth();

  const handleExport = () => {
    const jsonStr = exportData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `marvelmap-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
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
            alert('Watchlist progress restored successfully.');
          } else {
            alert('Invalid backup file.');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#11141E] border border-[#1E2536]">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-[#E62429]" />
            <span>Watch Progress Dashboard</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Overview of completed content, viewing time, and phase progression.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExport}
            className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium bg-[#0A0C10] border border-[#1E2536] text-slate-300 hover:text-white transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>Export</span>
          </button>
          <button
            onClick={handleImport}
            className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium bg-[#0A0C10] border border-[#1E2536] text-slate-300 hover:text-white transition-colors"
          >
            <Upload className="w-3.5 h-3.5 text-slate-400" />
            <span>Import</span>
          </button>
        </div>
      </div>

      {/* Account Cloud Status Banner */}
      <div className="p-4 rounded-xl bg-[#11141E] border border-[#1E2536] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg border ${
            user ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
          }`}>
            {user ? <UserCheck className="w-4 h-4" /> : <Cloud className="w-4 h-4" />}
          </div>
          <div>
            <div className="text-xs font-semibold text-white">
              {user ? `Signed in as ${user.email}` : 'Guest Mode (Local Only)'}
            </div>
            <div className="text-[11px] text-slate-400">
              {user ? (
                <span className="flex items-center gap-1 text-emerald-400">
                  <Check className="w-3 h-3" />
                  <span>
                    {isSavingToCloud ? 'Saving changes to cloud...' : 'Cross-device cloud sync active'}
                  </span>
                </span>
              ) : (
                'Sign in to save and sync your watch progress across any phone, tablet, or browser.'
              )}
            </div>
          </div>
        </div>

        {!user && (
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#E62429] hover:bg-[#CC1E23] text-white text-xs font-semibold transition-colors"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In / Create Account</span>
          </button>
        )}
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        
        <div className="p-4 rounded-xl bg-[#11141E] border border-[#1E2536]">
          <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
            Completion
          </div>
          <div className="text-2xl font-bold font-mono text-white">
            {stats.completionPercentage}%
          </div>
          <div className="text-[11px] text-slate-500 font-mono mt-0.5">
            {stats.watchedCount} of {stats.totalItems}
          </div>
          <div className="w-full h-1 bg-[#0A0C10] rounded-full overflow-hidden mt-3 border border-[#1E2536]">
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: `${stats.completionPercentage}%` }}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#11141E] border border-[#1E2536]">
          <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
            In Progress
          </div>
          <div className="text-2xl font-bold font-mono text-blue-400">
            {stats.watchingCount}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Active titles
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#11141E] border border-[#1E2536]">
          <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
            Watch Later
          </div>
          <div className="text-2xl font-bold font-mono text-amber-400">
            {stats.watchLaterCount}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Queued
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#11141E] border border-[#1E2536]">
          <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
            Watch Time
          </div>
          <div className="text-2xl font-bold font-mono text-slate-200">
            ~{stats.watchedHours}h
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            of ~{stats.totalHours}h total
          </div>
        </div>

      </div>

      {/* Movies vs TV Shows Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        
        <div className="p-4 rounded-xl bg-[#11141E] border border-[#1E2536] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#0A0C10] border border-[#1E2536] text-slate-400">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Movies</div>
              <div className="text-xs text-slate-400 font-mono">
                {stats.moviesWatched} / {stats.totalMovies} watched
              </div>
            </div>
          </div>
          <div className="text-sm font-bold font-mono text-slate-300">
            {stats.totalMovies > 0 ? Math.round((stats.moviesWatched / stats.totalMovies) * 100) : 0}%
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#11141E] border border-[#1E2536] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#0A0C10] border border-[#1E2536] text-slate-400">
              <Tv className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">TV Series</div>
              <div className="text-xs text-slate-400 font-mono">
                {stats.showsWatched} / {stats.totalShows} watched
              </div>
            </div>
          </div>
          <div className="text-sm font-bold font-mono text-slate-300">
            {stats.totalShows > 0 ? Math.round((stats.showsWatched / stats.totalShows) * 100) : 0}%
          </div>
        </div>

      </div>

      {/* Phase Progression */}
      <div className="p-5 rounded-xl bg-[#11141E] border border-[#1E2536] space-y-4">
        <div>
          <h3 className="text-sm font-bold text-white">
            Progress by Era & Phase
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Completion metrics for each phase in the collection.
          </p>
        </div>

        <div className="space-y-3">
          {stats.phaseProgress.map((p) => {
            const isFinished = p.percentage === 100 && p.total > 0;

            return (
              <div key={p.phase} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-300">{p.phase}</span>
                  <span className="font-mono text-slate-400">
                    {p.watched} / {p.total} ({p.percentage}%)
                  </span>
                </div>

                <div className="w-full h-1.5 bg-[#0A0C10] rounded-full overflow-hidden border border-[#1E2536]">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isFinished ? 'bg-emerald-500' : 'bg-[#E62429]'
                    }`}
                    style={{ width: `${p.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Reset Tool */}
      <div className="flex justify-end pt-2">
        <button
          onClick={resetAllProgress}
          className="text-xs text-slate-500 hover:text-red-400 flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset All Data</span>
        </button>
      </div>

    </div>
  );
};
