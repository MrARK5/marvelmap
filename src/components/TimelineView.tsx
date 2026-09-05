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
import { MARVEL_CATALOG, MARVEL_PHASES } from '../data/marvelCatalog';
import { useWatchlist } from '../context/WatchlistContext';

interface TimelineViewProps {
  onSelectMovie: (item: MarvelItem) => void;
}

export const TimelineView: React.FC<TimelineViewProps> = ({ onSelectMovie }) => {
  const { getStatus, toggleStatus } = useWatchlist();
  const [timelineMode, setTimelineMode] = useState<'release' | 'chronological'>('release');
  const [phaseFilter, setPhaseFilter] = useState<string>('all');

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

    if (phaseFilter !== 'all') {
      items = items.filter(i => i.phase === phaseFilter);
    }

    return items;
  }, [timelineMode, phaseFilter]);

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#11141E] border border-[#1E2536]">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#E62429]" />
            <span>Marvel Timeline</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            View content sequenced by theatrical release or in-universe story order.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Phase Filter */}
          <select
            value={phaseFilter}
            onChange={(e) => setPhaseFilter(e.target.value)}
            className="bg-[#0A0C10] border border-[#1E2536] rounded-md px-2.5 py-1 text-xs text-slate-300 focus:outline-none focus:border-[#E62429]"
          >
            <option value="all">All Phases</option>
            {MARVEL_PHASES.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          {/* Mode Switcher */}
          <div className="flex items-center bg-[#0A0C10] p-0.5 rounded-md border border-[#1E2536]">
            <button
              onClick={() => setTimelineMode('release')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                timelineMode === 'release'
                  ? 'bg-[#1E2536] text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Release
            </button>
            <button
              onClick={() => setTimelineMode('chronological')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                timelineMode === 'chronological'
                  ? 'bg-[#1E2536] text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Storyline
            </button>
          </div>
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#1E2536]">
        {years.map(year => (
          <div key={year} className="relative space-y-3">
            
            {/* Year Node */}
            <div className="flex items-center gap-2.5 -ml-6 sm:-ml-8">
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#11141E] border border-[#2E3852] text-slate-300 flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs z-10">
                {year.slice(-2)}
              </div>
              <span className="font-mono text-xs font-bold text-slate-400">
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
                    className={`p-3 rounded-lg border transition-all flex flex-col justify-between ${
                      status === 'watched'
                        ? 'bg-[#111915] border-emerald-500/30'
                        : status === 'watching'
                        ? 'bg-[#101624] border-blue-500/40'
                        : status === 'watchLater'
                        ? 'bg-[#1c170d] border-amber-500/30'
                        : 'bg-[#11141E] border-[#1E2536] hover:border-[#2E3852]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-mono text-slate-400">
                          {item.phase.split(':')[0]}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>{item.rating}</span>
                        </div>
                      </div>

                      <h4
                        onClick={() => onSelectMovie(item)}
                        className="font-semibold text-sm text-slate-100 hover:text-white cursor-pointer line-clamp-1 mb-1"
                      >
                        {item.title}
                      </h4>

                      <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                        <span>{item.type}</span>
                        <span>•</span>
                        <span>{item.runtime}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#1E2536] flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => toggleStatus(item.id, 'watched')}
                          className={`p-1 rounded text-xs ${
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
                          className={`p-1 rounded text-xs ${
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
                          className={`p-1 rounded text-xs ${
                            status === 'watchLater'
                              ? 'bg-amber-500 text-white'
                              : 'text-slate-400 hover:text-amber-400 hover:bg-[#1E2536]'
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
