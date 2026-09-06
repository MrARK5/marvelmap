import React from 'react';
import { 
  Check, 
  Play, 
  Bookmark, 
  SkipForward, 
  RotateCcw, 
  SlidersHorizontal 
} from 'lucide-react';
import { FilterState, MarvelFranchise, SortOption, WatchStatus } from '../types/marvel';
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

  const franchiseTabs: { id: MarvelFranchise; label: string }[] = [
    { id: 'all', label: 'All Universes' },
    { id: 'mcu', label: 'Avengers / MCU' },
    { id: 'x-men', label: 'X-Men' },
    { id: 'legacy', label: 'Legacy Classics' },
    { id: 'spiderman', label: 'Spider-Man' },
    { id: 'animated', label: '90s Animated' },
  ];

  const statusTabs: { 
    id: WatchStatus | 'all'; 
    label: string; 
    count?: number; 
    dotColor?: string;
  }[] = [
    { id: 'all', label: 'All Active' },
    { id: 'watching', label: 'Watching', count: stats.watchingCount, dotColor: 'bg-sky-400' },
    { id: 'watchLater', label: 'Watch Later', count: stats.watchLaterCount, dotColor: 'bg-amber-400' },
    { id: 'watched', label: 'Completed', count: stats.watchedCount, dotColor: 'bg-emerald-400' },
    { id: 'skipped', label: 'Skipped', count: stats.skippedCount, dotColor: 'bg-slate-500' },
  ];

  const sortOptions: { id: SortOption; label: string }[] = [
    { id: 'order', label: 'Chronological' },
    { id: 'release-desc', label: 'Newest First' },
    { id: 'release-asc', label: 'Oldest First' },
    { id: 'rating-desc', label: 'Top Rated' },
    { id: 'title-asc', label: 'A to Z' },
  ];

  return (
    <div className="bg-[#0F1118] border border-white/[0.06] rounded-xl p-3 sm:p-3.5 space-y-2.5">
      
      {/* 1. Franchise Segmented Strip (Linear / Raycast Style) */}
      <div className="overflow-x-auto no-scrollbar flex items-center gap-1 pb-0.5 -mx-1 px-1">
        {franchiseTabs.map(tab => {
          const isSelected = filters.franchise === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setFilters(prev => ({ ...prev, franchise: tab.id }))}
              className={`flex-shrink-0 px-2.5 py-1.2 rounded-lg text-xs font-medium transition-all ${
                isSelected
                  ? 'bg-white/[0.1] text-white shadow-subtle border border-white/[0.12]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] border border-transparent'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 2. Status Chips & Metrics Row */}
      <div className="pt-2 border-t border-white/[0.04] flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
        
        {/* Status Chips */}
        <div className="overflow-x-auto no-scrollbar flex items-center gap-1.5 pb-0.5 -mx-1 px-1">
          {statusTabs.map(tab => {
            const isSelected = filters.status === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setFilters(prev => ({ ...prev, status: tab.id }))}
                className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-white/[0.1] text-white border border-white/[0.14]'
                    : 'bg-[#08090C] text-slate-400 hover:text-slate-200 border border-white/[0.06]'
                }`}
              >
                {tab.dotColor && (
                  <span className={`w-1.5 h-1.5 rounded-full ${tab.dotColor} ${isSelected ? 'opacity-100' : 'opacity-60'}`} />
                )}
                <span>{tab.label}</span>
                {tab.count !== undefined && tab.count > 0 && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isSelected ? 'bg-white/10 text-white' : 'bg-white/[0.04] text-slate-400'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Total match counter */}
        <span className="text-xs text-slate-400 font-mono hidden sm:inline flex-shrink-0 ml-auto tabular-nums">
          {totalMatches} {filters.status === 'skipped' ? 'skipped' : 'titles'}
        </span>

      </div>

      {/* 3. Sort & Reset Bar */}
      <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-[11px]">Sort:</span>
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as SortOption }))}
            className="bg-[#08090C] border border-white/[0.08] hover:border-white/[0.14] rounded-md px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-white/30 cursor-pointer transition-colors"
          >
            {sortOptions.map(s => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-mono sm:hidden tabular-nums">
            {totalMatches} {filters.status === 'skipped' ? 'skipped' : 'titles'}
          </span>

          {(filters.franchise !== 'all' || filters.status !== 'all' || filters.searchQuery) && (
            <button
              onClick={() => setFilters(prev => ({
                ...prev,
                franchise: 'all',
                status: 'all',
                searchQuery: '',
              }))}
              className="text-[11px] text-slate-400 hover:text-rose-400 flex items-center gap-1 transition-colors ml-auto sm:ml-0"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
