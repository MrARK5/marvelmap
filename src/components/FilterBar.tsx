import React from 'react';
import { 
  Check, 
  Play, 
  Bookmark, 
  SkipForward,
  RotateCcw
} from 'lucide-react';
import { FilterState, SortOption, WatchStatus } from '../types/marvel';
import { MARVEL_PHASES } from '../data/marvelCatalog';
import { useWatchlist } from '../context/WatchlistContext';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalMatches: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  setFilters,
  totalMatches,
}) => {
  const { stats } = useWatchlist();

  const statusTabs: { id: WatchStatus | 'all'; label: string; count?: number; icon?: React.ElementType }[] = [
    { id: 'all', label: 'All Active', count: stats.activeItems },
    { id: 'watching', label: 'Watching', count: stats.watchingCount, icon: Play },
    { id: 'watchLater', label: 'Watch Later', count: stats.watchLaterCount, icon: Bookmark },
    { id: 'watched', label: 'Watched', count: stats.watchedCount, icon: Check },
    { id: 'skipped', label: 'Skipped', count: stats.skippedCount, icon: SkipForward },
  ];

  const sortOptions: { id: SortOption; label: string }[] = [
    { id: 'order', label: 'Release / Curated Order' },
    { id: 'release-desc', label: 'Newest First' },
    { id: 'release-asc', label: 'Oldest First' },
    { id: 'rating-desc', label: 'Highest Rating' },
    { id: 'title-asc', label: 'Title: A to Z' },
  ];

  return (
    <div className="bg-[#11141E] border border-[#1E2536] rounded-xl p-3 sm:p-4 space-y-3">
      
      {/* Top row: Status Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        
        <div className="flex flex-wrap items-center gap-1 bg-[#0A0C10] p-1 rounded-lg border border-[#1E2536]">
          {statusTabs.map(tab => {
            const isSelected = filters.status === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setFilters(prev => ({ ...prev, status: tab.id }))}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  isSelected
                    ? tab.id === 'skipped'
                      ? 'bg-slate-700 text-white'
                      : 'bg-[#1E2536] text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {Icon && <Icon className="w-3 h-3" />}
                <span>{tab.label}</span>
                {tab.count !== undefined && tab.count > 0 && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-black/40 text-slate-200' : 'bg-[#1E2536] text-slate-400'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Count */}
        <span className="text-xs text-slate-400 font-mono">
          {totalMatches} {filters.status === 'skipped' ? 'skipped' : 'titles'}
        </span>

      </div>

      {/* Filter & Sort Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1 border-t border-[#1E2536]/60">
        
        <div className="flex flex-wrap items-center gap-2">
          {/* Phase Filter */}
          <select
            value={filters.phase}
            onChange={(e) => setFilters(prev => ({ ...prev, phase: e.target.value }))}
            className="bg-[#0A0C10] border border-[#1E2536] rounded-md px-2.5 py-1 text-xs text-slate-300 focus:outline-none focus:border-[#E62429] cursor-pointer"
          >
            <option value="all">All Phases</option>
            {MARVEL_PHASES.map(phase => (
              <option key={phase} value={phase}>{phase}</option>
            ))}
          </select>

          {/* Sort Option */}
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as SortOption }))}
            className="bg-[#0A0C10] border border-[#1E2536] rounded-md px-2.5 py-1 text-xs text-slate-300 focus:outline-none focus:border-[#E62429] cursor-pointer"
          >
            {sortOptions.map(s => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>

        {(filters.phase !== 'all' || filters.status !== 'all' || filters.searchQuery) && (
          <button
            onClick={() => setFilters(prev => ({
              ...prev,
              phase: 'all',
              status: 'all',
              searchQuery: '',
            }))}
            className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset filters</span>
          </button>
        )}

      </div>

    </div>
  );
};
