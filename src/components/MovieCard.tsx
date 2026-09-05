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
import { MarvelItem, WatchStatus } from '../types/marvel';
import { useWatchlist } from '../context/WatchlistContext';

interface MovieCardProps {
  item: MarvelItem;
  onOpenDetails: (item: MarvelItem) => void;
  viewMode?: 'list' | 'grid';
}

export const MovieCard: React.FC<MovieCardProps> = ({
  item,
  onOpenDetails,
  viewMode = 'list',
}) => {
  const { getStatus, toggleStatus, skipItem, unskipItem, getEpisodeProgress } = useWatchlist();
  const status = getStatus(item.id);
  const epProgress = item.episodes.length > 0 ? getEpisodeProgress(item.id) : null;

  const isSkipped = status === 'skipped';

  return (
    <div 
      className={`group flex items-center justify-between p-3 sm:p-3.5 rounded-lg border transition-all ${
        status === 'watched'
          ? 'bg-[#101713] border-emerald-500/30'
          : status === 'watching'
          ? 'bg-[#0F1524] border-blue-500/35'
          : status === 'watchLater'
          ? 'bg-[#18140B] border-amber-500/30'
          : status === 'skipped'
          ? 'bg-[#121318] border-slate-800 opacity-60'
          : 'bg-[#11141E] border-[#1E2536] hover:border-[#2E3852]'
      }`}
    >
      {/* Clickable info area */}
      <div 
        className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 cursor-pointer"
        onClick={() => onOpenDetails(item)}
      >
        {/* Subtle left status pill indicator */}
        <div className={`w-1 h-8 rounded-full flex-shrink-0 ${
          status === 'watched' ? 'bg-emerald-500' :
          status === 'watching' ? 'bg-blue-500' :
          status === 'watchLater' ? 'bg-amber-500' :
          status === 'skipped' ? 'bg-slate-600' :
          'bg-transparent'
        }`} />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <span className="text-[10px] font-mono text-slate-400">
              {item.phase.split(':')[0]}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {item.year}
            </span>
            <span className="text-[11px] text-slate-500">
              {item.type}
            </span>
            {isSkipped && (
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.2 rounded">
                Skipped
              </span>
            )}
          </div>

          <h4 className="font-semibold text-sm sm:text-base text-slate-100 truncate group-hover:text-white transition-colors">
            {item.title}
          </h4>

          <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5 font-mono text-[11px]">
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-slate-500" />
              {item.runtime}
            </span>
            <span className="flex items-center gap-1 text-amber-400">
              <Star className="w-3 h-3 fill-amber-400" />
              {item.rating}
            </span>
            {epProgress && (
              <span className="text-blue-400">
                {epProgress.watched}/{epProgress.total} eps
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 ml-3 flex-shrink-0">
        {isSkipped ? (
          <button
            onClick={() => unskipItem(item.id)}
            className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium text-slate-300 hover:text-white bg-[#1E2536] hover:bg-[#2A344A] transition-colors"
            title="Restore to active list"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Un-skip</span>
          </button>
        ) : (
          <>
            <button
              onClick={() => toggleStatus(item.id, 'watched')}
              className={`p-1.5 rounded-md text-xs transition-colors ${
                status === 'watched'
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-400 hover:text-emerald-400 hover:bg-[#1E2536]'
              }`}
              title="Mark Watched"
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
              title="Currently Watching"
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
              title="Watch Later"
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
            </button>

            <button
              onClick={() => skipItem(item.id)}
              className="p-1.5 rounded-md text-xs text-slate-400 hover:text-slate-200 hover:bg-[#1E2536] transition-colors"
              title="Skip (Hides from main list)"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>
          </>
        )}

        <button
          onClick={() => onOpenDetails(item)}
          className="p-1.5 text-slate-500 hover:text-slate-300 rounded-md hover:bg-[#1E2536]"
          title="Details"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
