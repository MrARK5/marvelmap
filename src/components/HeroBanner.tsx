import React from 'react';
import { Play, Check, Bookmark, Clock, ArrowRight } from 'lucide-react';
import { useWatchlist } from '../context/WatchlistContext';
import { MARVEL_CATALOG } from '../data/marvelCatalog';
import { ActiveTab, MarvelItem } from '../types/marvel';

interface HeroBannerProps {
  setActiveTab: (tab: ActiveTab) => void;
  onSelectMovie: (item: MarvelItem) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ setActiveTab, onSelectMovie }) => {
  const { stats, statusMap } = useWatchlist();

  // Find next title to watch
  const currentlyWatching = MARVEL_CATALOG.find(i => statusMap[i.id] === 'watching');
  const nextUp = currentlyWatching || MARVEL_CATALOG.find(i => (statusMap[i.id] || 'unwatched') === 'unwatched');

  return (
    <div className="bg-[#11141E] border border-[#1E2536] rounded-xl p-5 sm:p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Left: Summary & Next Up CTA */}
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E62429]" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              The Complete Collection
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Marvel Cinematic Watchlist
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            All 208 theatrical releases, streaming series, one-shots, and multiverse stories. Track your progress with episode breakdowns and curated watch paths.
          </p>

          {nextUp && (
            <div className="pt-1 flex items-center gap-3">
              <button
                onClick={() => onSelectMovie(nextUp)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#E62429] hover:bg-[#CC1E23] text-white text-xs font-semibold transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>
                  {currentlyWatching ? 'Resume: ' : 'Next up: '}
                  {nextUp.title}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('watch-orders')}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 font-medium transition-colors"
              >
                <span>Recommended Orders</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Right: Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-3 md:w-80 flex-shrink-0">
          
          <div className="p-3 rounded-lg bg-[#0A0C10] border border-[#1E2536]">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-[11px] font-medium">Watched</span>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-lg font-bold text-white">
              {stats.watchedCount}
              <span className="text-xs text-slate-500 font-normal ml-1">/ {stats.totalItems}</span>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${stats.completionPercentage}%` }}
              />
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#0A0C10] border border-[#1E2536]">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-[11px] font-medium">Watching</span>
              <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
            </div>
            <div className="text-lg font-bold text-white">
              {stats.watchingCount}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              Active series / movies
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#0A0C10] border border-[#1E2536]">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-[11px] font-medium">Queue</span>
              <Bookmark className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            </div>
            <div className="text-lg font-bold text-white">
              {stats.watchLaterCount}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              Watch later
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#0A0C10] border border-[#1E2536]">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-[11px] font-medium">Watch Time</span>
              <Clock className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="text-lg font-bold text-white">
              ~{stats.watchedHours}h
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              of ~{stats.totalHours}h total
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
