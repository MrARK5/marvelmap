import React from 'react';
import { 
  LayoutGrid, 
  List, 
  Check, 
  Play, 
  Bookmark, 
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react';
import { FilterState, MarvelType, SortOption, WatchStatus } from '../types/marvel';
import { MARVEL_PHASES } from '../data/marvelCatalog';

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
  const statusOptions: { id: WatchStatus | 'all'; label: string; icon?: React.ElementType }[] = [
    { id: 'all', label: 'All' },
    { id: 'watched', label: 'Watched', icon: Check },
    { id: 'watching', label: 'Watching', icon: Play },
    { id: 'watchLater', label: 'Watch Later', icon: Bookmark },
    { id: 'unwatched', label: 'Unwatched' },
  ];

  const typeOptions: { id: MarvelType | 'all'; label: string }[] = [
    { id: 'all', label: 'All Types' },
    { id: 'Movie', label: 'Movies' },
    { id: 'TV Show', label: 'TV Shows' },
    { id: 'Short Film', label: 'Shorts' },
    { id: 'Special', label: 'Specials' },
  ];

  const decades = [
    { id: 'all', label: 'All Eras' },
    { id: '1980s', label: '1980s' },
    { id: '1990s', label: '1990s' },
    { id: '2000s', label: '2000s' },
    { id: '2010s', label: '2010s' },
    { id: '2020s', label: '2020s+' },
  ];

  const sortOptions: { id: SortOption; label: string }[] = [
    { id: 'order', label: 'Default Curated Order' },
    { id: 'release-desc', label: 'Release: Newest First' },
    { id: 'release-asc', label: 'Release: Oldest First' },
    { id: 'rating-desc', label: 'Rating: Highest First' },
    { id: 'title-asc', label: 'Title: A to Z' },
    { id: 'phase', label: 'Phase Order' },
  ];

  const resetFilters = () => {
    setFilters(prev => ({
      ...prev,
      status: 'all',
      type: 'all',
      phase: 'all',
      decade: 'all',
      essentialOnly: false,
      mcuOnly: false,
      hasPostCredits: false,
    }));
  };

  const hasActiveFilters = 
    filters.status !== 'all' ||
    filters.type !== 'all' ||
    filters.phase !== 'all' ||
    filters.decade !== 'all' ||
    filters.essentialOnly ||
    filters.mcuOnly ||
    filters.hasPostCredits;

  return (
    <div className="bg-[#11141E] border border-[#1E2536] rounded-xl p-4 mb-6 space-y-3.5">
      
      {/* Top row: Status Tabs & Layout */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        
        {/* Watch Status Segmented Control */}
        <div className="flex items-center gap-1 bg-[#0A0C10] p-1 rounded-lg border border-[#1E2536]">
          {statusOptions.map(opt => {
            const isSelected = filters.status === opt.id;
            const Icon = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => setFilters(prev => ({ ...prev, status: opt.id }))}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  isSelected
                    ? 'bg-[#1E2536] text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {Icon && <Icon className="w-3 h-3" />}
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right side: Count & View Switcher */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400">
            <strong className="text-slate-200 font-semibold">{totalMatches}</strong> titles
          </span>

          <div className="flex items-center bg-[#0A0C10] border border-[#1E2536] rounded-md p-0.5">
            <button
              onClick={() => setFilters(prev => ({ ...prev, viewMode: 'grid' }))}
              className={`p-1 rounded transition-colors ${
                filters.viewMode === 'grid' ? 'bg-[#1E2536] text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
              title="Grid"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setFilters(prev => ({ ...prev, viewMode: 'list' }))}
              className={`p-1 rounded transition-colors ${
                filters.viewMode === 'list' ? 'bg-[#1E2536] text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
              title="List"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Middle row: Dropdowns */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        
        {/* Phase Filter */}
        <select
          value={filters.phase}
          onChange={(e) => setFilters(prev => ({ ...prev, phase: e.target.value }))}
          className="bg-[#0A0C10] border border-[#1E2536] rounded-md px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-[#E62429] cursor-pointer"
        >
          <option value="all">All Phases</option>
          {MARVEL_PHASES.map(phase => (
            <option key={phase} value={phase}>{phase}</option>
          ))}
        </select>

        {/* Type Filter */}
        <select
          value={filters.type}
          onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value as MarvelType | 'all' }))}
          className="bg-[#0A0C10] border border-[#1E2536] rounded-md px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-[#E62429] cursor-pointer"
        >
          {typeOptions.map(t => (
            <option key={t.id} value={t.id}>{t.label}</option>
          ))}
        </select>

        {/* Era Filter */}
        <select
          value={filters.decade}
          onChange={(e) => setFilters(prev => ({ ...prev, decade: e.target.value }))}
          className="bg-[#0A0C10] border border-[#1E2536] rounded-md px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-[#E62429] cursor-pointer"
        >
          {decades.map(d => (
            <option key={d.id} value={d.id}>{d.label}</option>
          ))}
        </select>

        {/* Sort Order */}
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as SortOption }))}
          className="bg-[#0A0C10] border border-[#1E2536] rounded-md px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-[#E62429] cursor-pointer"
        >
          {sortOptions.map(s => (
            <option key={s.id} value={s.id}>{s.label}</option>
          ))}
        </select>

      </div>

      {/* Bottom row: Filter Chips */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
        <div className="flex flex-wrap items-center gap-1.5">
          
          <button
            onClick={() => setFilters(prev => ({ ...prev, essentialOnly: !prev.essentialOnly }))}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors ${
              filters.essentialOnly
                ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                : 'bg-[#0A0C10] border-[#1E2536] text-slate-400 hover:text-slate-200'
            }`}
          >
            Essential Only
          </button>

          <button
            onClick={() => setFilters(prev => ({ ...prev, mcuOnly: !prev.mcuOnly }))}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors ${
              filters.mcuOnly
                ? 'bg-red-500/10 border-red-500/40 text-red-300'
                : 'bg-[#0A0C10] border-[#1E2536] text-slate-400 hover:text-slate-200'
            }`}
          >
            Mainline MCU Only
          </button>

          <button
            onClick={() => setFilters(prev => ({ ...prev, hasPostCredits: !prev.hasPostCredits }))}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors ${
              filters.hasPostCredits
                ? 'bg-purple-500/10 border-purple-500/40 text-purple-300'
                : 'bg-[#0A0C10] border-[#1E2536] text-slate-400 hover:text-slate-200'
            }`}
          >
            Has Post-Credits
          </button>

        </div>

        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 ml-auto transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

    </div>
  );
};
