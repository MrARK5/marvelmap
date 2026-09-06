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
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-obsidian-900/60 border border-white/[0.06] backdrop-blur-md">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
            <Bookmark className="w-3.5 h-3.5 text-amber-400" />
            <span>My Watchlist</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Active series in progress, personal queue, and completed titles.
          </p>
        </div>

        {/* Content Type Filter */}
        <div className="flex items-center gap-1 bg-obsidian-950 p-1 rounded-lg border border-white/[0.06]">
          {(['all', 'Movie', 'TV Show'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTypeFilter(t as MarvelType | 'all')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                typeFilter === t
                  ? 'bg-white/[0.08] text-white shadow-sm border border-white/[0.08]'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              {t === 'all' ? 'All Formats' : t === 'Movie' ? 'Movies' : 'Series'}
            </button>
          ))}
        </div>
      </div>

      {/* Segmented Watchlist Tabs */}
      <div className="grid grid-cols-3 gap-3">
        
        <button
          onClick={() => setActiveSection('watching')}
          className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden ${
            activeSection === 'watching'
              ? 'bg-obsidian-900 border-sky-400/40 shadow-sm'
              : 'bg-obsidian-900/40 border-white/[0.06] hover:border-white/[0.12]'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-medium mb-1">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block" />
              Watching
            </span>
            <span className="font-mono text-xs text-sky-400 font-semibold tabular-nums">{currentlyWatching.length}</span>
          </div>
          <div className="text-2xl font-semibold text-white font-mono tabular-nums tracking-tight">
            {currentlyWatching.length}
          </div>
        </button>

        <button
          onClick={() => setActiveSection('watchLater')}
          className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden ${
            activeSection === 'watchLater'
              ? 'bg-obsidian-900 border-amber-400/40 shadow-sm'
              : 'bg-obsidian-900/40 border-white/[0.06] hover:border-white/[0.12]'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-medium mb-1">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
              Queue
            </span>
            <span className="font-mono text-xs text-amber-400 font-semibold tabular-nums">{watchLater.length}</span>
          </div>
          <div className="text-2xl font-semibold text-white font-mono tabular-nums tracking-tight">
            {watchLater.length}
          </div>
        </button>

        <button
          onClick={() => setActiveSection('watched')}
          className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden ${
            activeSection === 'watched'
              ? 'bg-obsidian-900 border-emerald-400/40 shadow-sm'
              : 'bg-obsidian-900/40 border-white/[0.06] hover:border-white/[0.12]'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-medium mb-1">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Finished
            </span>
            <span className="font-mono text-xs text-emerald-400 font-semibold tabular-nums">{watched.length}</span>
          </div>
          <div className="text-2xl font-semibold text-white font-mono tabular-nums tracking-tight">
            {watched.length}
          </div>
        </button>

      </div>

      {/* Item List */}
      <div className="space-y-2">
        {currentList.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-obsidian-900/40 border border-white/[0.06] space-y-3">
            <p className="text-xs sm:text-sm text-slate-400">
              No titles in this list right now.
            </p>
            <button
              onClick={onBrowseCatalog}
              className="px-3.5 py-1.5 rounded-md bg-white/[0.08] hover:bg-white/[0.12] text-white text-xs font-medium border border-white/[0.1] transition-colors"
            >
              Explore Catalog
            </button>
          </div>
        ) : (
          currentList.map(item => {
            const epProgress = item.episodes.length > 0 ? getEpisodeProgress(item.id) : null;

            return (
              <div
                key={item.id}
                className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/[0.06] hover:border-white/[0.14] transition-all flex items-center justify-between gap-4 group"
              >
                <div 
                  className="min-w-0 flex-1 cursor-pointer"
                  onClick={() => onSelectMovie(item)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {item.subfranchise || item.universe || item.type}
                    </span>
                    <span className="text-slate-600 text-[10px]">•</span>
                    <span className="text-xs font-mono text-slate-400 tabular-nums">
                      {item.year}
                    </span>
                    <span className="text-amber-400/90 font-mono text-xs flex items-center gap-1 ml-auto tabular-nums">
                      <Star className="w-3 h-3 fill-amber-400/80" />
                      {item.rating}
                    </span>
                  </div>

                  <h4 className="font-medium text-sm text-slate-100 truncate group-hover:text-white transition-colors">
                    {item.title}
                  </h4>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mt-1">
                    <span>{item.type}</span>
                    <span>•</span>
                    <span>{item.runtime}</span>
                  </div>

                  {/* Episodes progress */}
                  {epProgress && (
                    <div className="mt-2.5 flex items-center gap-2 max-w-xs">
                      <div className="flex-1 h-1 bg-obsidian-950 rounded-full overflow-hidden border border-white/[0.06]">
                        <div
                          className="h-full bg-sky-400 rounded-full transition-all"
                          style={{ width: `${epProgress.percentage}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 tabular-nums">
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
                      className="px-2.5 py-1 rounded text-xs font-medium text-sky-400 hover:bg-sky-500/10 border border-sky-500/20 transition-colors"
                    >
                      Watch
                    </button>
                  )}

                  <button
                    onClick={() => setStatus(item.id, 'unwatched')}
                    className="p-1.5 rounded text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
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
