import React from 'react';
import { 
  Check, 
  Play, 
  Bookmark, 
  SkipForward, 
  RotateCcw, 
  Shield 
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
    { id: 'legacy', label: 'Legacy (Blade, etc.)' },
    { id: 'spiderman', label: 'Spider-Man' },
    { id: 'animated', label: '90s Animated' },
  ];

  const statusTabs: { id: WatchStatus | 'all'; label: string; count?: number; icon?: React.ElementType }[] = [
    { id: 'all', label: 'All Active' },
    { id: 'watching', label: 'Watching', count: stats.watchingCount, icon: Play },
    { id: 'watchLater', label: 'Watch Later', count: stats.watchLaterCount, icon: Bookmark },
    { id: 'watched', label: 'Watched', count: stats.watchedCount, icon: Check },
    { id: 'skipped', label: 'Skipped', count: stats.skippedCount, icon: SkipForward },
  ];

  const sortOptions: { id: SortOption; label: string }[] = [
    { id: 'order', label: 'Chronological' },
    { id: 'release-desc', label: 'Newest First' },
    { id: 'release-asc', label: 'Oldest First' },
    { id: 'rating-desc', label: 'Top Rated' },
    { id: 'title-asc', label: 'A to Z' },
  ];

  return (
    <div className="bg-[#11141E] border border-[#1E2536] rounded-2xl p-3 sm:p-4 space-y-3">
      
      {/* 1. Franchise Tabs (Swipeable on mobile) */}
      <div>
        <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-[#E62429]" />
            <span>Franchise / Universe</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono sm:hidden">
            Swipe &rarr;
          </span>
        </div>

        <div className="overflow-x-auto no-scrollbar flex items-center gap-1.5 pb-1 -mx-1 px-1">
          {franchiseTabs.map(tab => {
            const isSelected = filters.franchise === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setFilters(prev => ({ ...prev, franchise: tab.id, phase: 'all' }))}
                className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-[#E62429] text-white shadow-sm'
                    : 'bg-[#0A0C10] text-slate-400 hover:text-slate-200 border border-[#1E2536]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Status Pills (Swipeable on mobile) */}
      <div className="pt-2 border-t border-[#1E2536]/70">
        <div className="overflow-x-auto no-scrollbar flex items-center justify-between gap-1.5 pb-1 -mx-1 px-1">
          
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {statusTabs.map(tab => {
              const isSelected = filters.status === tab.id;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setFilters(prev => ({ ...prev, status: tab.id }))}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                    isSelected
                      ? tab.id === 'skipped'
                        ? 'bg-slate-700 text-white'
                        : 'bg-[#1E2536] text-white border border-[#2E3852]'
                      : 'bg-[#0A0C10] text-slate-400 hover:text-slate-200 border border-[#1E2536]'
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

          <span className="text-xs text-slate-400 font-mono hidden sm:inline flex-shrink-0 ml-2">
            {totalMatches} {filters.status === 'skipped' ? 'skipped' : 'titles'}
          </span>

        </div>
      </div>

      {/* 3. Dropdowns & Reset: 2-column on mobile, flex on desktop */}
      <div className="pt-2 border-t border-[#1E2536]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        
        <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
          {/* Phase Filter (only for MCU or All) */}
          {(filters.franchise === 'all' || filters.franchise === 'mcu') ? (
            <select
              value={filters.phase}
              onChange={(e) => setFilters(prev => ({ ...prev, phase: e.target.value }))}
              className="w-full sm:w-auto bg-[#0A0C10] border border-[#1E2536] rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-[#E62429] cursor-pointer"
            >
              <option value="all">All MCU Phases</option>
              <option value="Phase 1: Avengers Assemble">Phase 1: Assemble</option>
              <option value="Phase 2: Age of Miracles">Phase 2: Miracles</option>
              <option value="Phase 3: Infinity War">Phase 3: Infinity War</option>
              <option value="Phase 4: Multiverse">Phase 4: Multiverse</option>
              <option value="Phase 5: New Heroes">Phase 5: New Heroes</option>
              <option value="Phase 6: Battleworld">Phase 6: Battleworld</option>
            </select>
          ) : <div className="hidden sm:block" />}

          {/* Sort Option */}
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as SortOption }))}
            className="w-full sm:w-auto bg-[#0A0C10] border border-[#1E2536] rounded-xl px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-[#E62429] cursor-pointer"
          >
            {sortOptions.map(s => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
          <span className="text-xs text-slate-400 font-mono sm:hidden">
            {totalMatches} {filters.status === 'skipped' ? 'skipped' : 'titles'}
          </span>

          {(filters.franchise !== 'all' || filters.phase !== 'all' || filters.status !== 'all' || filters.searchQuery) && (
            <button
              onClick={() => setFilters(prev => ({
                ...prev,
                franchise: 'all',
                phase: 'all',
                status: 'all',
                searchQuery: '',
              }))}
              className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors ml-auto sm:ml-0"
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
