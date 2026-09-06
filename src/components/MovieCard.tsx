import React from 'react';
import { 
  Check, 
  Play, 
  Bookmark, 
  Star, 
  Clock, 
  SkipForward, 
  RotateCcw, 
  ChevronRight 
} from 'lucide-react';
import { MarvelItem } from '../types/marvel';
import { useWatchlist } from '../context/WatchlistContext';

interface MovieCardProps {
  item: MarvelItem;
  onOpenDetails: (item: MarvelItem) => void;
  viewMode?: 'list' | 'grid';
}

export const MovieCard: React.FC<MovieCardProps> = ({
  item,
  onOpenDetails,
}) => {
  const { getStatus, toggleStatus, skipItem, unskipItem, getEpisodeProgress } = useWatchlist();
  const status = getStatus(item.id);
  const epProgress = item.episodes.length > 0 ? getEpisodeProgress(item.id) : null;
  const isSkipped = status === 'skipped';

  return (
    <div 
      className={`group rounded-xl border transition-all ${
        isSkipped
          ? 'bg-[#0A0C10] border-white/[0.04] opacity-50'
          : status === 'watched'
          ? 'bg-[#0A130F] border-emerald-500/30 hover:border-emerald-500/45 shadow-[inset_0_1px_0_0_rgba(52,211,153,0.06)]'
          : status === 'watching'
          ? 'bg-[#0C121D] border-sky-500/25 hover:border-sky-500/35'
          : status === 'watchLater'
          ? 'bg-[#14120E] border-amber-500/25 hover:border-amber-500/35'
          : 'bg-[#0F1118] border-white/[0.06] hover:border-white/[0.12] hover:bg-[#131622]'
      }`}
    >
      {/* Desktop Layout (sm and up) */}
      <div className="hidden sm:flex items-center justify-between p-3.5 gap-3">
        
        {/* Clickable Info Area */}
        <div 
          className="flex items-center gap-3.5 flex-1 min-w-0 cursor-pointer"
          onClick={() => onOpenDetails(item)}
        >
          {/* Subtle Status Indicator */}
          <div className="flex-shrink-0 flex items-center justify-center">
            {status === 'watched' ? (
              <div className="w-5 h-5 rounded-md bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-400" title="Completed">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
            ) : status === 'watching' ? (
              <div className="w-5 h-5 rounded-md bg-sky-500/15 border border-sky-500/35 flex items-center justify-center text-sky-400" title="Watching">
                <Play className="w-2.5 h-2.5 fill-current" />
              </div>
            ) : status === 'watchLater' ? (
              <div className="w-5 h-5 rounded-md bg-amber-500/15 border border-amber-500/35 flex items-center justify-center text-amber-400" title="Watch Later">
                <Bookmark className="w-2.5 h-2.5 fill-current" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-md bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-slate-600 group-hover:border-white/[0.12]">
                <span className="w-1 h-1 rounded-full bg-white/20" />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            {/* Metadata Tags */}
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              {item.subfranchise && (
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/[0.04] border border-white/[0.06] px-1.5 py-0.2 rounded">
                  {item.subfranchise}
                </span>
              )}
              <span className="text-xs font-mono text-slate-400 tabular-nums">
                {item.year}
              </span>
              <span className="text-[11px] text-slate-500">
                &bull; {item.type}
              </span>
              {isSkipped && (
                <span className="text-[10px] font-mono text-slate-400 bg-white/[0.06] px-1.5 py-0.2 rounded">
                  Skipped
                </span>
              )}
            </div>

            {/* Title */}
            <h4 className="font-semibold text-sm text-slate-100 truncate group-hover:text-white transition-colors tracking-tight">
              {item.title}
            </h4>

            {/* Micro details */}
            <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5 font-mono text-[11px]">
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3 h-3 text-slate-500" />
                {item.runtime}
              </span>
              <span className="flex items-center gap-1 text-amber-400/90 tabular-nums">
                <Star className="w-3 h-3 fill-current" />
                {item.rating}
              </span>
              {epProgress && (
                <span className="text-sky-400/90">
                  {epProgress.watched} / {epProgress.total} eps ({epProgress.percentage}%)
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 ml-2 flex-shrink-0">
          {isSkipped ? (
            <button
              onClick={() => unskipItem(item.id)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] transition-colors"
              title="Restore to active watchlist"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Un-skip</span>
            </button>
          ) : (
            <>
              <button
                onClick={() => toggleStatus(item.id, 'watched')}
                className={`p-1.5 rounded-md text-xs transition-colors border ${
                  status === 'watched'
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300 shadow-sm'
                    : 'bg-transparent border-transparent text-slate-400 hover:text-emerald-300 hover:bg-white/[0.04]'
                }`}
                title="Mark as Completed"
              >
                <Check className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => toggleStatus(item.id, 'watching')}
                className={`p-1.5 rounded-md text-xs transition-colors border ${
                  status === 'watching'
                    ? 'bg-sky-500/15 border-sky-500/30 text-sky-300 shadow-sm'
                    : 'bg-transparent border-transparent text-slate-400 hover:text-sky-300 hover:bg-white/[0.04]'
                }`}
                title="Currently Watching"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>

              <button
                onClick={() => toggleStatus(item.id, 'watchLater')}
                className={`p-1.5 rounded-md text-xs transition-colors border ${
                  status === 'watchLater'
                    ? 'bg-amber-500/15 border-amber-500/30 text-amber-300 shadow-sm'
                    : 'bg-transparent border-transparent text-slate-400 hover:text-amber-300 hover:bg-white/[0.04]'
                }`}
                title="Watch Later"
              >
                <Bookmark className="w-3.5 h-3.5 fill-current" />
              </button>

              <button
                onClick={() => skipItem(item.id)}
                className="p-1.5 rounded-md text-xs text-slate-500 hover:text-slate-300 hover:bg-white/[0.04] transition-colors"
                title="Skip (hide from active list)"
              >
                <SkipForward className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          <button
            onClick={() => onOpenDetails(item)}
            className="p-1.5 text-slate-500 hover:text-slate-200 rounded-md hover:bg-white/[0.04] transition-colors"
            title="View Details"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Mobile Layout (Fluid and Clean) */}
      <div className="sm:hidden p-3 space-y-2">
        
        {/* Header & Title */}
        <div 
          className="cursor-pointer"
          onClick={() => onOpenDetails(item)}
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              {status === 'watched' ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  Watched
                </span>
              ) : status === 'watching' ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-sky-300 bg-sky-500/15 border border-sky-500/30 px-1.5 py-0.2 rounded">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  Watching
                </span>
              ) : status === 'watchLater' ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-amber-300 bg-amber-500/15 border border-amber-500/30 px-1.5 py-0.2 rounded">
                  <Bookmark className="w-2.5 h-2.5 fill-current" />
                  Queue
                </span>
              ) : null}

              {item.subfranchise && (
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/[0.04] border border-white/[0.06] px-1.5 py-0.2 rounded">
                  {item.subfranchise}
                </span>
              )}
              <span className="text-[11px] font-mono text-slate-400 tabular-nums">
                {item.year}
              </span>
              <span className="text-[11px] text-slate-500">
                &bull; {item.type}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <span className="text-amber-400/90 font-mono flex items-center gap-0.5 tabular-nums">
                <Star className="w-3 h-3 fill-current" />
                {item.rating}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 ml-0.5" />
            </div>
          </div>

          <h4 className="font-semibold text-sm text-slate-100 leading-snug line-clamp-2 tracking-tight">
            {item.title}
          </h4>

          <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-1 font-mono">
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-slate-500" />
              {item.runtime}
            </span>
            {epProgress && (
              <span className="text-sky-400">
                {epProgress.watched} / {epProgress.total} eps
              </span>
            )}
            {isSkipped && (
              <span className="text-slate-400 bg-white/[0.06] px-1.5 py-0.2 rounded text-[10px]">
                Skipped
              </span>
            )}
          </div>
        </div>

        {/* Mobile Action Bar */}
        <div className="flex items-center justify-between gap-1.5 pt-2 border-t border-white/[0.04]">
          {isSkipped ? (
            <button
              onClick={() => unskipItem(item.id)}
              className="w-full py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-white/[0.06] active:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restore to Watchlist</span>
            </button>
          ) : (
            <>
              <button
                onClick={() => toggleStatus(item.id, 'watched')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-colors border ${
                  status === 'watched'
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                    : 'bg-[#08090C] border-white/[0.06] text-slate-400 active:text-white'
                }`}
              >
                <Check className="w-3 h-3" />
                <span className="text-[11px]">Watched</span>
              </button>

              <button
                onClick={() => toggleStatus(item.id, 'watching')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-colors border ${
                  status === 'watching'
                    ? 'bg-sky-500/15 border-sky-500/30 text-sky-300'
                    : 'bg-[#08090C] border-white/[0.06] text-slate-400 active:text-white'
                }`}
              >
                <Play className="w-3 h-3 fill-current" />
                <span className="text-[11px]">Watching</span>
              </button>

              <button
                onClick={() => toggleStatus(item.id, 'watchLater')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-colors border ${
                  status === 'watchLater'
                    ? 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                    : 'bg-[#08090C] border-white/[0.06] text-slate-400 active:text-white'
                }`}
              >
                <Bookmark className="w-3 h-3 fill-current" />
                <span className="text-[11px]">Later</span>
              </button>

              <button
                onClick={() => skipItem(item.id)}
                className="py-1.5 px-2.5 rounded-lg text-xs font-medium bg-[#08090C] border border-white/[0.06] text-slate-400 active:text-white flex items-center justify-center"
                title="Skip"
              >
                <SkipForward className="w-3 h-3" />
              </button>
            </>
          )}
        </div>

      </div>

    </div>
  );
};
