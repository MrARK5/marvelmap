import React, { useState, useMemo } from 'react';
import { 
  Compass, 
  Check, 
  Play, 
  Bookmark, 
  Star, 
  BookOpen, 
  Clock, 
  Zap, 
  Layers
} from 'lucide-react';
import { MarvelItem } from '../types/marvel';
import { MARVEL_CATALOG } from '../data/marvelCatalog';
import { useWatchlist } from '../context/WatchlistContext';

interface WatchOrderViewProps {
  onSelectMovie: (item: MarvelItem) => void;
}

type OrderType = 'curated' | 'mcu-release' | 'chronological' | 'infinity-core';

export const WatchOrderView: React.FC<WatchOrderViewProps> = ({ onSelectMovie }) => {
  const { getStatus, toggleStatus } = useWatchlist();
  const [selectedOrder, setSelectedOrder] = useState<OrderType>('curated');

  const orderOptions = [
    {
      id: 'curated' as OrderType,
      title: 'Complete Curated Journey',
      subtitle: 'Comprehensive Multiverse Experience',
      tag: 'Recommended',
      description: 'The complete sequence incorporating legacy, multiverse, and 90s animated classics right when they tie into modern Marvel events.',
    },
    {
      id: 'mcu-release' as OrderType,
      title: 'Mainline Release Order',
      subtitle: 'Theatrical & Disney+ Order',
      tag: 'Classic',
      description: 'Follow the MCU as released in theaters and streaming from Iron Man (2008) to present day.',
    },
    {
      id: 'chronological' as OrderType,
      title: 'Chronological Storyline',
      subtitle: 'In-Universe Timeline',
      tag: 'Storyline',
      description: 'Watch events unfold by historical timeline: Steve Rogers in WWII (1942), Captain Marvel (1995), to current Multiverse events.',
    },
    {
      id: 'infinity-core' as OrderType,
      title: 'Infinity Saga Essentials',
      subtitle: 'Road to Endgame',
      tag: 'Fast-Track',
      description: 'The core essential releases leading directly to Avengers: Infinity War & Endgame without extraneous side-stories.',
    },
  ];

  const activeList = useMemo(() => {
    if (selectedOrder === 'curated') {
      return [...MARVEL_CATALOG].sort((a, b) => a.order - b.order);
    }
    if (selectedOrder === 'mcu-release') {
      return MARVEL_CATALOG.filter(i => i.isMCU).sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        return a.order - b.order;
      });
    }
    if (selectedOrder === 'chronological') {
      return [...MARVEL_CATALOG].sort((a, b) => {
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
    }
    if (selectedOrder === 'infinity-core') {
      return MARVEL_CATALOG.filter(
        i => i.isEssential && i.isMCU && i.year <= 2019
      ).sort((a, b) => a.order - b.order);
    }
    return MARVEL_CATALOG;
  }, [selectedOrder]);

  const watchedCount = activeList.filter(i => getStatus(i.id) === 'watched').length;
  const progressPercent = Math.round((watchedCount / (activeList.length || 1)) * 100);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="p-4 rounded-xl bg-obsidian-900/60 border border-white/[0.06] backdrop-blur-md">
        <h2 className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-[#E62429]" />
          <span>Curated Watch Orders</span>
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Select a viewing roadmap tailored to your universe depth and preference.
        </p>
      </div>

      {/* Order Cards Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {orderOptions.map((opt) => {
          const isSelected = selectedOrder === opt.id;

          return (
            <div
              key={opt.id}
              onClick={() => setSelectedOrder(opt.id)}
              className={`cursor-pointer p-4 rounded-xl border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-obsidian-900 border-white/[0.18] shadow-sm'
                  : 'bg-obsidian-900/40 border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border ${
                    isSelected ? 'bg-white/[0.1] border-white/[0.15] text-white' : 'bg-obsidian-950 border-white/[0.06] text-slate-400'
                  }`}>
                    {opt.tag}
                  </span>
                </div>

                <h3 className="font-semibold text-sm text-white mb-1 tracking-tight">
                  {opt.title}
                </h3>
                <p className="text-[11px] text-slate-400 mb-2 font-medium">
                  {opt.subtitle}
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {opt.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Order Progress */}
      <div className="p-4 rounded-xl bg-obsidian-900/60 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-slate-200">
            Roadmap Progress: <span className="font-mono text-white tabular-nums">{progressPercent}%</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5 font-mono tabular-nums">
            {watchedCount} of {activeList.length} titles completed
          </div>
        </div>

        <div className="w-full sm:w-60 h-1.5 bg-obsidian-950 rounded-full overflow-hidden border border-white/[0.06]">
          <div
            className="h-full bg-[#E62429] rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Item List */}
      <div className="space-y-2">
        {activeList.map((item, index) => {
          const status = getStatus(item.id);

          return (
            <div
              key={item.id}
              className="flex items-center justify-between p-3.5 rounded-xl bg-obsidian-900/80 border border-white/[0.06] hover:border-white/[0.14] transition-all group"
            >
              <div 
                className="flex items-center gap-3.5 flex-1 min-w-0 cursor-pointer"
                onClick={() => onSelectMovie(item)}
              >
                {/* Index step */}
                <div className={`w-6 h-6 rounded-md flex items-center justify-center font-mono font-medium text-xs flex-shrink-0 tabular-nums ${
                  status === 'watched'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-obsidian-950 border border-white/[0.06] text-slate-400'
                }`}>
                  {status === 'watched' ? <Check className="w-3.5 h-3.5" /> : index + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {item.subfranchise || item.universe || item.type}
                    </span>
                    <span className="text-slate-600 text-[10px]">•</span>
                    <span className="text-xs font-mono text-slate-400 tabular-nums">
                      {item.year}
                    </span>
                    {item.isEssential && (
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                        Essential
                      </span>
                    )}
                  </div>

                  <h4 className="font-medium text-sm text-slate-100 truncate group-hover:text-white transition-colors">
                    {item.title}
                  </h4>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mt-1">
                    <span>{item.type}</span>
                    <span>•</span>
                    <span>{item.runtime}</span>
                    <span className="flex items-center gap-1 text-amber-400/90 ml-auto tabular-nums">
                      <Star className="w-3 h-3 fill-amber-400/80" />
                      {item.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status toggles */}
              <div className="flex items-center gap-1 ml-3 flex-shrink-0">
                <button
                  onClick={() => toggleStatus(item.id, 'watched')}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${
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
                  className={`p-1.5 rounded-lg text-xs transition-colors ${
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
                  className={`p-1.5 rounded-lg text-xs transition-colors ${
                    status === 'watchLater'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'text-slate-400 hover:text-amber-400 hover:bg-white/[0.04]'
                  }`}
                  title="Watch Later"
                >
                  <Bookmark className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
