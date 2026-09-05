import React from 'react';
import { 
  Check, 
  Play, 
  Bookmark, 
  Star, 
  Clock, 
  Tv, 
  Film, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { MarvelItem, WatchStatus } from '../types/marvel';
import { useWatchlist } from '../context/WatchlistContext';

interface MovieCardProps {
  item: MarvelItem;
  onOpenDetails: (item: MarvelItem) => void;
  viewMode?: 'grid' | 'list';
}

export const MovieCard: React.FC<MovieCardProps> = ({
  item,
  onOpenDetails,
  viewMode = 'grid',
}) => {
  const { getStatus, toggleStatus, getEpisodeProgress } = useWatchlist();
  const status = getStatus(item.id);
  const epProgress = item.episodes.length > 0 ? getEpisodeProgress(item.id) : null;

  const hasPostCredits = item.postCredits && !item.postCredits.includes('❌ No');

  // Subtle phase pill styling
  const getPhaseTagStyle = (phase: string) => {
    if (phase.includes('Phase 1')) return 'text-red-400 border-red-500/30 bg-red-500/5';
    if (phase.includes('Phase 2')) return 'text-amber-400 border-amber-500/30 bg-amber-500/5';
    if (phase.includes('Phase 3')) return 'text-purple-400 border-purple-500/30 bg-purple-500/5';
    if (phase.includes('Phase 4')) return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5';
    if (phase.includes('Phase 5')) return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5';
    if (phase.includes('Phase 6')) return 'text-rose-400 border-rose-500/30 bg-rose-500/5';
    if (phase.includes('Legacy')) return 'text-orange-400 border-orange-500/30 bg-orange-500/5';
    return 'text-blue-400 border-blue-500/30 bg-blue-500/5';
  };

  // LIST VIEW
  if (viewMode === 'list') {
    return (
      <div 
        className={`group flex items-center justify-between p-3 sm:p-3.5 rounded-lg border transition-all ${
          status === 'watched'
            ? 'bg-[#111915] border-emerald-500/30'
            : status === 'watching'
            ? 'bg-[#101624] border-blue-500/40'
            : status === 'watchLater'
            ? 'bg-[#1c170d] border-amber-500/30'
            : 'bg-[#11141E] border-[#1E2536] hover:border-[#2E3852]'
        }`}
      >
        <div 
          className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 cursor-pointer"
          onClick={() => onOpenDetails(item)}
        >
          {/* Status Indicator Bar */}
          <div className={`w-1 h-8 rounded-full flex-shrink-0 ${
            status === 'watched' ? 'bg-emerald-500' :
            status === 'watching' ? 'bg-blue-500' :
            status === 'watchLater' ? 'bg-amber-500' :
            'bg-transparent'
          }`} />

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className={`text-[10px] font-mono font-medium px-1.5 py-0.5 rounded border ${getPhaseTagStyle(item.phase)}`}>
                {item.phase.split(':')[0]}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {item.year}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                {item.type}
              </span>
              {item.isEssential && (
                <span className="text-[10px] font-medium text-amber-300 bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/30">
                  Essential
                </span>
              )}
            </div>

            <h4 className="font-semibold text-sm sm:text-base text-slate-100 truncate group-hover:text-white transition-colors">
              {item.title}
            </h4>

            <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
              <span className="flex items-center gap-1 font-mono text-[11px]">
                <Clock className="w-3 h-3 text-slate-500" />
                {item.runtime}
              </span>
              <span className="flex items-center gap-1 text-amber-400 font-mono text-[11px]">
                <Star className="w-3 h-3 fill-amber-400" />
                {item.rating}
              </span>
              <span className="hidden md:inline text-slate-500 truncate max-w-xs text-[11px]">
                {item.universe}
              </span>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex items-center gap-1 ml-3 flex-shrink-0">
          <button
            onClick={() => toggleStatus(item.id, 'watched')}
            className={`p-1.5 rounded-md text-xs transition-colors ${
              status === 'watched'
                ? 'bg-emerald-500 text-white'
                : 'text-slate-400 hover:text-emerald-400 hover:bg-[#1E2536]'
            }`}
            title="Mark watched"
          >
            <Check className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => toggleStatus(item.id, 'watching')}
            className={`p-1.5 rounded-md text-xs transition-colors ${
              status === 'watching'
                ? 'bg-blue-500 text-white'
                : 'text-slate-400 hover:text-blue-400 hover:bg-[#1E2536]'
            }`}
            title="Currently watching"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
          </button>

          <button
            onClick={() => toggleStatus(item.id, 'watchLater')}
            className={`p-1.5 rounded-md text-xs transition-colors ${
              status === 'watchLater'
                ? 'bg-amber-500 text-white'
                : 'text-slate-400 hover:text-amber-400 hover:bg-[#1E2536]'
            }`}
            title="Watch later"
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
          </button>

          <button
            onClick={() => onOpenDetails(item)}
            className="p-1.5 text-slate-500 hover:text-slate-300 rounded-md hover:bg-[#1E2536]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // GRID VIEW (Poster-free, clean typography and layout)
  return (
    <div
      className={`group flex flex-col justify-between rounded-xl p-4 border transition-all ${
        status === 'watched'
          ? 'bg-[#0E1512] border-emerald-500/30'
          : status === 'watching'
          ? 'bg-[#0D1424] border-blue-500/35'
          : status === 'watchLater'
          ? 'bg-[#18140B] border-amber-500/30'
          : 'bg-[#11141E] border-[#1E2536] hover:border-[#2E3852]'
      }`}
    >
      <div>
        
        {/* Top Header: Phase & Rating */}
        <div className="flex items-center justify-between gap-1 mb-2">
          <span className={`text-[10px] font-mono font-medium px-1.5 py-0.5 rounded border ${getPhaseTagStyle(item.phase)} truncate max-w-[75%]`}>
            {item.phase.split(':')[0]}
          </span>

          <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400 flex-shrink-0">
            <Star className="w-3 h-3 fill-amber-400" />
            <span>{item.rating}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          onClick={() => onOpenDetails(item)}
          className="font-bold text-sm sm:text-base text-slate-100 hover:text-white cursor-pointer line-clamp-2 leading-snug transition-colors mb-2"
          title={item.title}
        >
          {item.title}
        </h3>

        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 mb-3">
          <span className="font-mono text-slate-300">{item.year}</span>
          <span>•</span>
          <span>{item.type}</span>
          <span>•</span>
          <span className="font-mono text-slate-400">{item.runtime}</span>
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          {item.isEssential && (
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
              Essential
            </span>
          )}

          {hasPostCredits && (
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Credits</span>
            </span>
          )}

          <span className="text-[10px] text-slate-500 truncate max-w-full">
            {item.universe.split('[')[0].trim()}
          </span>
        </div>

        {/* TV Series Episode Progress */}
        {epProgress && (
          <div className="mb-3 p-2 rounded-md bg-[#0A0C10] border border-[#1E2536] space-y-1">
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Episodes</span>
              <span className="font-mono text-blue-400">{epProgress.watched}/{epProgress.total}</span>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all"
                style={{ width: `${epProgress.percentage}%` }}
              />
            </div>
          </div>
        )}

      </div>

      {/* Card Footer: Status & Action Toggles */}
      <div className="pt-3 border-t border-[#1E2536] flex items-center justify-between gap-1.5">
        
        {/* Watch Status Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => toggleStatus(item.id, 'watched')}
            className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 transition-colors ${
              status === 'watched'
                ? 'bg-emerald-500 text-white'
                : 'text-slate-400 hover:text-emerald-400 hover:bg-[#1E2536]'
            }`}
            title="Mark Watched"
          >
            <Check className="w-3.5 h-3.5" />
            <span className="text-[11px]">Watched</span>
          </button>

          <button
            onClick={() => toggleStatus(item.id, 'watching')}
            className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 transition-colors ${
              status === 'watching'
                ? 'bg-blue-500 text-white'
                : 'text-slate-400 hover:text-blue-400 hover:bg-[#1E2536]'
            }`}
            title="Currently Watching"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span className="text-[11px]">Watching</span>
          </button>

          <button
            onClick={() => toggleStatus(item.id, 'watchLater')}
            className={`p-1 rounded text-xs transition-colors ${
              status === 'watchLater'
                ? 'bg-amber-500 text-white'
                : 'text-slate-400 hover:text-amber-400 hover:bg-[#1E2536]'
            }`}
            title="Watch Later"
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
          </button>
        </div>

        {/* Detail view link */}
        <button
          onClick={() => onOpenDetails(item)}
          className="text-xs text-slate-500 hover:text-slate-200 p-1"
          title="View Details"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
};
