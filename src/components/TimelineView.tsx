import React, { useState, useMemo } from 'react';
import { 
  Clock, 
  Check, 
  Play, 
  Bookmark, 
  Star, 
  ChevronRight
} from 'lucide-react';
import { MarvelItem } from '../types/marvel';
import { MARVEL_CATALOG } from '../data/marvelCatalog';
import { useWatchlist } from '../context/WatchlistContext';

interface TimelineViewProps {
  onSelectMovie: (item: MarvelItem) => void;
}

export const TimelineView: React.FC<TimelineViewProps> = ({ onSelectMovie }) => {
  const { getStatus, toggleStatus } = useWatchlist();
  const [timelineMode, setTimelineMode] = useState<'release' | 'chronological'>('release');

  const timelineItems = useMemo(() => {
    let items = [...MARVEL_CATALOG];

    if (timelineMode === 'chronological') {
      // Approximate chronological order for storyline
      items = items.sort((a, b) => {
        // Captain America 1 is 1942, Captain Marvel is 1995
        const getChronoYear = (item: MarvelItem) => {
          if (item.title.includes('Captain America: The First Avenger')) return 1942;
          if (item.title.includes('Captain Marvel')) return 1995;
          return item.year;
        };
        const yA = getChronoYear(a);
        const yB = getChronoYear(b);
        if (yA !== yB) return yA - yB;
        return a.order - b.order;
      });
    } else {
      items = items.sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return a.order - b.order;
      });
    }

    return items;
  }, [timelineMode]);

  const groupedByYear = useMemo(() => {
    const groups: { [year: string]: MarvelItem[] } = {};
    timelineItems.forEach(item => {
      const key = String(item.year);
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
    });
    return groups;
  }, [timelineItems]);

  const years = Object.keys(groupedByYear).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-obsidian-900/60 border border-white/[0.06] backdrop-blur-md">
        <div>
          <h2 className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#E62429]" />
            <span>Marvel Timeline</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            View content sequenced by theatrical release or in-universe story order.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <div className="flex items-center bg-obsidian-950 p-0.5 rounded-lg border border-white/[0.06]">
            <button
              onClick={() => setTimelineMode('release')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                timelineMode === 'release'
                  ? 'bg-white/[0.08] text-white shadow-sm border border-white/[0.08]'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              Theatrical Release
            </button>
            <button
              onClick={() => setTimelineMode('chronological')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                timelineMode === 'chronological'
                  ? 'bg-white/[0.08] text-white shadow-sm border border-white/[0.08]'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              Story Chronology
            </button>
          </div>
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/[0.08]">
        {years.map(year => (
          <div key={year} className="relative space-y-3">
            
            {/* Year Node */}
            <div className="flex items-center gap-2.5 -ml-6 sm:-ml-8">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-obsidian-900 border border-white/[0.12] text-slate-200 flex items-center justify-center font-mono font-medium text-[10px] sm:text-xs z-10 tabular-nums shadow-sm">
                {year.slice(-2)}
              </div>
              <span className="font-mono text-xs font-semibold text-slate-300 tabular-nums">
                {year}
              </span>
            </div>

            {/* Year Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {groupedByYear[year].map(item => {
                const status = getStatus(item.id);

                return (
                  <div
                    key={item.id}
                    className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between group ${
                      status === 'watched'
                        ? 'bg-[#0A130F] border-emerald-500/30 hover:border-emerald-500/45 shadow-[inset_0_1px_0_0_rgba(52,211,153,0.06)]'
                        : 'bg-obsidian-900/80 border-white/[0.06] hover:border-white/[0.14]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {status === 'watched' && (
                            <span className="inline-flex items-center gap-1 text-[9px] font-mono font-medium text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                              Watched
                            </span>
                          )}
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                            {item.subfranchise || item.universe || item.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400/90 tabular-nums">
                          <Star className="w-3 h-3 fill-amber-400/80" />
                          <span>{item.rating}</span>
                        </div>
                      </div>

                      <h4
                        onClick={() => onSelectMovie(item)}
                        className="font-medium text-sm text-slate-100 group-hover:text-white cursor-pointer line-clamp-1 mb-1 transition-colors"
                      >
                        {item.title}
                      </h4>

                      <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                        <span>{item.type}</span>
                        <span>•</span>
                        <span>{item.runtime}</span>
                      </div>
                    </div>

                    <div className="mt-3.5 pt-2.5 border-t border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => toggleStatus(item.id, 'watched')}
                          className={`p-1.5 rounded-md text-xs transition-colors ${
                            status === 'watched'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : 'text-slate-400 hover:text-emerald-400 hover:bg-white/[0.04]'
                          }`}
                          title="Mark Watched"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => toggleStatus(item.id, 'watching')}
                          className={`p-1.5 rounded-md text-xs transition-colors ${
                            status === 'watching'
                              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                              : 'text-slate-400 hover:text-sky-400 hover:bg-white/[0.04]'
                          }`}
                          title="Currently Watching"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                        </button>
                        <button
                          onClick={() => toggleStatus(item.id, 'watchLater')}
                          className={`p-1.5 rounded-md text-xs transition-colors ${
                            status === 'watchLater'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : 'text-slate-400 hover:text-amber-400 hover:bg-white/[0.04]'
                          }`}
                          title="Watch Later"
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>

                      <button
                        onClick={() => onSelectMovie(item)}
                        className="text-slate-500 hover:text-slate-300 p-1"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
