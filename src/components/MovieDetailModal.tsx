import React, { useEffect } from 'react';
import { 
  X, 
  Star, 
  Clock, 
  Calendar, 
  Globe, 
  Sparkles, 
  Check, 
  Play, 
  Bookmark, 
  SkipForward,
  RotateCcw,
  Tv, 
  Layers, 
  ExternalLink,
  CheckSquare,
  Square,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { MarvelItem } from '../types/marvel';
import { useWatchlist } from '../context/WatchlistContext';
import { MARVEL_CATALOG } from '../data/marvelCatalog';

interface MovieDetailModalProps {
  item: MarvelItem | null;
  onClose: () => void;
  onSelectMovie: (item: MarvelItem) => void;
}

export const MovieDetailModal: React.FC<MovieDetailModalProps> = ({
  item,
  onClose,
  onSelectMovie,
}) => {
  const { 
    getStatus, 
    setStatus, 
    skipItem, 
    unskipItem,
    toggleEpisode, 
    setAllEpisodes, 
    isEpisodeWatched, 
    getEpisodeProgress 
  } = useWatchlist();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const currentStatus = getStatus(item.id);
  const isSkipped = currentStatus === 'skipped';
  const epProgress = item.episodes.length > 0 ? getEpisodeProgress(item.id) : null;

  const currentIndex = MARVEL_CATALOG.findIndex(i => i.id === item.id);
  const prevItem = currentIndex > 0 ? MARVEL_CATALOG[currentIndex - 1] : null;
  const nextItem = currentIndex < MARVEL_CATALOG.length - 1 ? MARVEL_CATALOG[currentIndex + 1] : null;

  const hasPostCredits = item.postCredits && !item.postCredits.includes('❌ No');

  const renderNotes = (notes: string) => {
    if (!notes) return <span className="text-slate-500 italic">No additional notes.</span>;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = notes.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:underline font-medium inline-flex items-center gap-1 mx-1 break-all"
          >
            <span>External Link</span>
            <ExternalLink className="w-3 h-3 flex-shrink-0" />
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0B0D14] border border-white/[0.08] rounded-2xl shadow-modal overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/[0.06] relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2 pr-10">
            {(item.subfranchise || item.universe) && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/[0.05] border border-white/[0.08] px-2 py-0.5 rounded">
                {item.subfranchise || item.universe}
              </span>
            )}
            <span className="text-[11px] text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]">
              {item.type}
            </span>
            {isSkipped && (
              <span className="text-[10px] font-mono text-slate-400 bg-white/[0.08] px-2 py-0.5 rounded">
                Skipped
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
            {item.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2 font-mono">
            <span className="flex items-center gap-1.5 text-amber-400/90 font-medium tabular-nums">
              <Star className="w-3.5 h-3.5 fill-current" />
              {item.rating} / 10
            </span>
            <span className="flex items-center gap-1.5 tabular-nums">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {item.releaseDate}
            </span>
            <span className="flex items-center gap-1.5 tabular-nums">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {item.runtime}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Watch Status Selector Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#0F1118] border border-white/[0.06]">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                Watch Status
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5">
                {currentStatus === 'watched' && 'Completed'}
                {currentStatus === 'watching' && 'Currently Watching'}
                {currentStatus === 'watchLater' && 'In Watch Later Queue'}
                {currentStatus === 'skipped' && 'Skipped (Hidden from active list)'}
                {currentStatus === 'unwatched' && 'Unwatched'}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setStatus(item.id, currentStatus === 'watched' ? 'unwatched' : 'watched')}
                className={`px-2.5 py-1.2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border ${
                  currentStatus === 'watched'
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300 shadow-sm'
                    : 'bg-[#08090C] border-white/[0.06] text-slate-400 hover:text-emerald-300'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>Watched</span>
              </button>

              <button
                onClick={() => setStatus(item.id, currentStatus === 'watching' ? 'unwatched' : 'watching')}
                className={`px-2.5 py-1.2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border ${
                  currentStatus === 'watching'
                    ? 'bg-sky-500/15 border-sky-500/30 text-sky-300 shadow-sm'
                    : 'bg-[#08090C] border-white/[0.06] text-slate-400 hover:text-sky-300'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watching</span>
              </button>

              <button
                onClick={() => setStatus(item.id, currentStatus === 'watchLater' ? 'unwatched' : 'watchLater')}
                className={`px-2.5 py-1.2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border ${
                  currentStatus === 'watchLater'
                    ? 'bg-amber-500/15 border-amber-500/30 text-amber-300 shadow-sm'
                    : 'bg-[#08090C] border-white/[0.06] text-slate-400 hover:text-amber-300'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5 fill-current" />
                <span>Later</span>
              </button>

              {isSkipped ? (
                <button
                  onClick={() => unskipItem(item.id)}
                  className="px-2.5 py-1.2 rounded-lg text-xs font-medium bg-white/[0.08] hover:bg-white/[0.14] text-white flex items-center gap-1.5 border border-white/[0.1]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Un-skip</span>
                </button>
              ) : (
                <button
                  onClick={() => skipItem(item.id)}
                  className="px-2.5 py-1.2 rounded-lg text-xs font-medium bg-[#08090C] border border-white/[0.06] text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  title="Hide from active list"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                  <span>Skip</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            
            <div className="p-3.5 rounded-xl bg-[#0F1118] border border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-0.5">
                <Globe className="w-3 h-3 text-slate-500" />
                <span>Universe</span>
              </div>
              <div className="text-xs font-medium text-slate-200">
                {item.universe}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0F1118] border border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-0.5">
                <Sparkles className="w-3 h-3 text-violet-400" />
                <span>Post-Credits Scene</span>
              </div>
              <div className={`text-xs font-medium ${hasPostCredits ? 'text-violet-300' : 'text-slate-400'}`}>
                {item.postCredits}
              </div>
            </div>

          </div>

          {/* Notes */}
          {item.notes && (
            <div className="p-3.5 rounded-xl bg-[#0F1118] border border-white/[0.06] space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                Viewing Notes
              </div>
              <div className="text-xs text-slate-300 leading-relaxed">
                {renderNotes(item.notes)}
              </div>
            </div>
          )}

          {/* TV Show Episode Guide */}
          {item.episodes.length > 0 && (
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                  <Tv className="w-3.5 h-3.5 text-sky-400" />
                  <span>Episodes ({item.episodes.length})</span>
                  {epProgress && (
                    <span className="text-[11px] text-slate-400 font-mono tabular-nums">
                      &bull; {epProgress.watched}/{epProgress.total} ({epProgress.percentage}%)
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAllEpisodes(item.id, true)}
                    className="text-[11px] font-medium text-emerald-400 hover:text-emerald-300 px-1.5 transition-colors"
                  >
                    Mark All
                  </button>
                  <button
                    onClick={() => setAllEpisodes(item.id, false)}
                    className="text-[11px] font-medium text-slate-400 hover:text-slate-200 px-1.5 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="max-h-52 overflow-y-auto space-y-1 border border-white/[0.06] rounded-xl p-1.5 bg-[#08090C]">
                {item.episodes.map((ep) => {
                  const watched = isEpisodeWatched(item.id, ep.rowNum);
                  return (
                    <div
                      key={ep.rowNum}
                      onClick={() => toggleEpisode(item.id, ep.rowNum)}
                      className={`flex items-center justify-between p-2 rounded-lg text-xs cursor-pointer transition-colors ${
                        watched
                          ? 'bg-emerald-500/10 text-emerald-200 border border-emerald-500/20'
                          : 'hover:bg-white/[0.04] text-slate-400 hover:text-slate-200 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        {watched ? (
                          <CheckSquare className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        ) : (
                          <Square className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                        )}
                        <span className="truncate">{ep.title}</span>
                      </div>

                      {ep.runtime && (
                        <span className="text-[11px] text-slate-500 font-mono ml-2 flex-shrink-0 tabular-nums">
                          {ep.runtime}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Previous / Next Navigation */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs">
            {prevItem ? (
              <button
                onClick={() => onSelectMovie(prevItem)}
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors max-w-[45%] truncate"
              >
                <ChevronLeft className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">Prev: {prevItem.title}</span>
              </button>
            ) : <div />}

            {nextItem ? (
              <button
                onClick={() => onSelectMovie(nextItem)}
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors ml-auto max-w-[45%] truncate"
              >
                <span className="truncate">Next: {nextItem.title}</span>
                <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
              </button>
            ) : <div />}
          </div>

        </div>

      </div>

    </div>
  );
};
