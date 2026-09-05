import React, { useState } from 'react';
import { 
  Bookmark, 
  Play, 
  Check, 
  Clock, 
  Trash2, 
  Star,
  ChevronRight
} from 'lucide-react';
import { MarvelItem, MarvelType } from '../types/marvel';
import { MARVEL_CATALOG } from '../data/marvelCatalog';
import { useWatchlist } from '../context/WatchlistContext';

interface WatchlistViewProps {
  onSelectMovie: (item: MarvelItem) => void;
  onBrowseCatalog: () => void;
}

export const WatchlistView: React.FC<WatchlistViewProps> = ({
  onSelectMovie,
  onBrowseCatalog,
}) => {
  const { statusMap, setStatus, getEpisodeProgress } = useWatchlist();
  const [activeSection, setActiveSection] = useState<'watching' | 'watchLater' | 'watched'>('watching');
  const [typeFilter, setTypeFilter] = useState<MarvelType | 'all'>('all');

  const currentlyWatching = MARVEL_CATALOG.filter(i => statusMap[i.id] === 'watching');
  const watchLater = MARVEL_CATALOG.filter(i => statusMap[i.id] === 'watchLater');
  const watched = MARVEL_CATALOG.filter(i => statusMap[i.id] === 'watched');

  const getFilteredList = (list: MarvelItem[]) => {
    if (typeFilter === 'all') return list;
    return list.filter(i => i.type === typeFilter);
  };

  const currentList = 
    activeSection === 'watching' ? getFilteredList(currentlyWatching) :
    activeSection === 'watchLater' ? getFilteredList(watchLater) :
    getFilteredList(watched);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#11141E] border border-[#1E2536]">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-400" />
            <span>My Watchlist</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage your in-progress series, queued titles, and watch history.
          </p>
        </div>

        {/* Content Type Filter */}
        <div className="flex items-center gap-1 bg-[#0A0C10] p-1 rounded-lg border border-[#1E2536]">
          {(['all', 'Movie', 'TV Show'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTypeFilter(t as MarvelType | 'all')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                typeFilter === t
                  ? 'bg-[#1E2536] text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t === 'all' ? 'All' : t === 'Movie' ? 'Movies' : 'Shows'}
            </button>
          ))}
        </div>
      </div>

      {/* Segmented Watchlist Tabs */}
      <div className="grid grid-cols-3 gap-3">
        
        <button
          onClick={() => setActiveSection('watching')}
          className={`p-3.5 rounded-xl border text-left transition-all ${
            activeSection === 'watching'
              ? 'bg-[#121929] border-blue-500/50'
              : 'bg-[#11141E] border-[#1E2536] hover:border-[#2E3852]'
          }`}
        >
          <div className="flex items-center justify-between text-blue-400 text-xs font-medium mb-1">
            <span className="flex items-center gap-1.5">
              <Play className="w-3 h-3 fill-current" />
              Watching
            </span>
            <span className="font-mono text-[11px]">{currentlyWatching.length}</span>
          </div>
          <div className="text-xl font-bold text-white font-mono">
            {currentlyWatching.length}
          </div>
        </button>

        <button
          onClick={() => setActiveSection('watchLater')}
          className={`p-3.5 rounded-xl border text-left transition-all ${
            activeSection === 'watchLater'
              ? 'bg-[#1c170d] border-amber-500/50'
              : 'bg-[#11141E] border-[#1E2536] hover:border-[#2E3852]'
          }`}
        >
          <div className="flex items-center justify-between text-amber-400 text-xs font-medium mb-1">
            <span className="flex items-center gap-1.5">
              <Bookmark className="w-3 h-3 fill-current" />
              Watch Later
            </span>
            <span className="font-mono text-[11px]">{watchLater.length}</span>
          </div>
          <div className="text-xl font-bold text-white font-mono">
            {watchLater.length}
          </div>
        </button>

        <button
          onClick={() => setActiveSection('watched')}
          className={`p-3.5 rounded-xl border text-left transition-all ${
            activeSection === 'watched'
              ? 'bg-[#111915] border-emerald-500/50'
              : 'bg-[#11141E] border-[#1E2536] hover:border-[#2E3852]'
          }`}
        >
          <div className="flex items-center justify-between text-emerald-400 text-xs font-medium mb-1">
            <span className="flex items-center gap-1.5">
              <Check className="w-3 h-3" />
              Completed
            </span>
            <span className="font-mono text-[11px]">{watched.length}</span>
          </div>
          <div className="text-xl font-bold text-white font-mono">
            {watched.length}
          </div>
        </button>

      </div>

      {/* Item List */}
      <div className="space-y-2">
        {currentList.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-[#11141E] border border-[#1E2536] space-y-3">
            <p className="text-xs sm:text-sm text-slate-400">
              No titles in this section.
            </p>
            <button
              onClick={onBrowseCatalog}
              className="px-3.5 py-1.5 rounded-md bg-[#E62429] hover:bg-[#CC1E23] text-white text-xs font-semibold transition-colors"
            >
              Browse Catalog
            </button>
          </div>
        ) : (
          currentList.map(item => {
            const epProgress = item.episodes.length > 0 ? getEpisodeProgress(item.id) : null;

            return (
              <div
                key={item.id}
                className="p-3.5 rounded-lg bg-[#11141E] border border-[#1E2536] hover:border-[#2E3852] transition-colors flex items-center justify-between gap-4"
              >
                <div 
                  className="min-w-0 flex-1 cursor-pointer"
                  onClick={() => onSelectMovie(item)}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-mono text-slate-500">
                      {item.phase.split(':')[0]}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.year}
                    </span>
                    <span className="text-amber-400 font-mono text-xs flex items-center gap-0.5 ml-auto">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {item.rating}
                    </span>
                  </div>

                  <h4 className="font-semibold text-sm text-slate-100 truncate hover:text-white">
                    {item.title}
                  </h4>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono mt-0.5">
                    <span>{item.type}</span>
                    <span>•</span>
                    <span>{item.runtime}</span>
                  </div>

                  {/* Episodes progress */}
                  {epProgress && (
                    <div className="mt-2 flex items-center gap-2 max-w-xs">
                      <div className="flex-1 h-1 bg-[#0A0C10] rounded-full overflow-hidden border border-[#1E2536]">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${epProgress.percentage}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {epProgress.watched}/{epProgress.total} eps
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {activeSection !== 'watched' && (
                    <button
                      onClick={() => setStatus(item.id, 'watched')}
                      className="px-2.5 py-1 rounded text-xs font-medium text-emerald-400 hover:bg-emerald-500/10 border border-emerald-500/20 transition-colors"
                    >
                      Watched
                    </button>
                  )}

                  {activeSection !== 'watching' && (
                    <button
                      onClick={() => setStatus(item.id, 'watching')}
                      className="px-2.5 py-1 rounded text-xs font-medium text-blue-400 hover:bg-blue-500/10 border border-blue-500/20 transition-colors"
                    >
                      Watch
                    </button>
                  )}

                  <button
                    onClick={() => setStatus(item.id, 'unwatched')}
                    className="p-1 rounded text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    title="Remove from watchlist"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
