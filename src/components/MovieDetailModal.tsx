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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#11141E] border border-[#1E2536] rounded-xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="p-5 border-b border-[#1E2536] relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-[#1E2536] transition-colors"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-1.5 pr-8">
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded border border-red-500/30 text-red-400 bg-red-500/5">
              {item.phase}
            </span>
            <span className="text-[11px] font-medium text-slate-400 px-2 py-0.5 rounded bg-[#0A0C10] border border-[#1E2536]">
              {item.type}
            </span>
            {isSkipped && (
              <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                Skipped
              </span>
            )}
          </div>

          <h2 className="text-xl font-bold text-white tracking-tight">
            {item.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2 font-mono">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              {item.rating} / 10
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {item.releaseDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {item.runtime}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4">
          
          {/* Watch Status Selector */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-[#0A0C10] border border-[#1E2536]">
            <div>
              <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Status
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5">
                {currentStatus === 'watched' && 'Marked as Watched'}
                {currentStatus === 'watching' && 'Currently Watching'}
                {currentStatus === 'watchLater' && 'In Watch Later Queue'}
                {currentStatus === 'skipped' && 'Skipped (Hidden from active list)'}
                {currentStatus === 'unwatched' && 'Not Watched'}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setStatus(item.id, currentStatus === 'watched' ? 'unwatched' : 'watched')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
                  currentStatus === 'watched'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-[#141926] border border-[#1E2536] text-slate-300 hover:text-emerald-400'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>Watched</span>
              </button>

              <button
                onClick={() => setStatus(item.id, currentStatus === 'watching' ? 'unwatched' : 'watching')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
                  currentStatus === 'watching'
                    ? 'bg-blue-500 text-white'
                    : 'bg-[#141926] border border-[#1E2536] text-slate-300 hover:text-blue-400'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watching</span>
              </button>

              <button
                onClick={() => setStatus(item.id, currentStatus === 'watchLater' ? 'unwatched' : 'watchLater')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
                  currentStatus === 'watchLater'
                    ? 'bg-amber-500 text-white'
                    : 'bg-[#141926] border border-[#1E2536] text-slate-300 hover:text-amber-400'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5 fill-current" />
                <span>Later</span>
              </button>

              {isSkipped ? (
                <button
                  onClick={() => unskipItem(item.id)}
                  className="px-2.5 py-1 rounded text-xs font-medium bg-[#1E2536] text-slate-200 hover:text-white flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Un-skip</span>
                </button>
              ) : (
                <button
                  onClick={() => skipItem(item.id)}
                  className="px-2.5 py-1 rounded text-xs font-medium bg-[#141926] border border-[#1E2536] text-slate-400 hover:text-slate-200 flex items-center gap-1"
                  title="Skip (Hides from main list)"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                  <span>Skip</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            
            <div className="p-3 rounded-lg bg-[#0A0C10] border border-[#1E2536]">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 mb-0.5">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>Universe</span>
              </div>
              <div className="text-xs font-medium text-slate-200">
                {item.universe}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0A0C10] border border-[#1E2536]">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 mb-0.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Post-Credits</span>
              </div>
              <div className={`text-xs font-medium ${hasPostCredits ? 'text-purple-300' : 'text-slate-400'}`}>
                {item.postCredits}
              </div>
            </div>

          </div>

          {/* Notes */}
          {item.notes && (
            <div className="p-3 rounded-lg bg-[#0A0C10] border border-[#1E2536] space-y-1">
              <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
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
                  <Tv className="w-3.5 h-3.5 text-blue-400" />
                  <span>Episodes ({item.episodes.length})</span>
                  {epProgress && (
                    <span className="text-[11px] text-slate-400 font-mono">
                      &bull; {epProgress.watched}/{epProgress.total}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAllEpisodes(item.id, true)}
                    className="text-[11px] font-medium text-emerald-400 hover:underline px-1.5"
                  >
                    Mark All
                  </button>
                  <button
                    onClick={() => setAllEpisodes(item.id, false)}
                    className="text-[11px] font-medium text-slate-400 hover:underline px-1.5"
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="max-h-52 overflow-y-auto space-y-1 border border-[#1E2536] rounded-lg p-1.5 bg-[#0A0C10]">
                {item.episodes.map((ep) => {
                  const watched = isEpisodeWatched(item.id, ep.rowNum);
                  return (
                    <div
                      key={ep.rowNum}
                      onClick={() => toggleEpisode(item.id, ep.rowNum)}
                      className={`flex items-center justify-between p-2 rounded text-xs cursor-pointer transition-colors ${
                        watched
                          ? 'bg-[#111915] text-slate-200'
                          : 'hover:bg-[#151A26] text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        {watched ? (
                          <CheckSquare className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        ) : (
                          <Square className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                        )}
                        <span className="truncate">{ep.title}</span>
                      </div>

                      {ep.runtime && (
                        <span className="text-[11px] text-slate-500 font-mono ml-2 flex-shrink-0">
                          {ep.runtime}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Previous / Next */}
          <div className="flex items-center justify-between pt-2 border-t border-[#1E2536] text-xs">
            {prevItem ? (
              <button
                onClick={() => onSelectMovie(prevItem)}
                className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev: {prevItem.title}</span>
              </button>
            ) : <div />}

            {nextItem ? (
              <button
                onClick={() => onSelectMovie(nextItem)}
                className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors ml-auto"
              >
                <span>Next: {nextItem.title}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : <div />}
          </div>

        </div>

      </div>

    </div>
  );
};
