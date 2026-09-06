import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { FilterBar } from './components/FilterBar';
import { MovieCard } from './components/MovieCard';
import { MovieDetailModal } from './components/MovieDetailModal';
import { AuthModal } from './components/AuthModal';
import { useWatchlist } from './context/WatchlistContext';
import { MARVEL_CATALOG } from './data/marvelCatalog';
import { FilterState, MarvelItem } from './types/marvel';
import { SkipForward } from 'lucide-react';

export const App: React.FC = () => {
  const { getStatus, stats } = useWatchlist();

  const [selectedMovie, setSelectedMovie] = useState<MarvelItem | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    status: 'all',
    franchise: 'all',
    sortBy: 'order',
    viewMode: 'list',
  });

  const filteredItems = useMemo(() => {
    return MARVEL_CATALOG.filter(item => {
      const status = getStatus(item.id);

      // Default 'all' view: HIDE SKIPPED TITLES from active view
      if (filters.status === 'all') {
        if (status === 'skipped') return false;
      } else {
        // Specific status filter (e.g. 'skipped', 'watched', 'watching', 'watchLater')
        if (status !== filters.status) return false;
      }

      // Franchise / Universe separation
      if (filters.franchise !== 'all') {
        if (item.franchise !== filters.franchise) return false;
      }

      // Search
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesUniverse = item.universe.toLowerCase().includes(q);
        const matchesSub = (item.subfranchise || '').toLowerCase().includes(q);
        const matchesYear = String(item.year).includes(q);
        if (!matchesTitle && !matchesUniverse && !matchesSub && !matchesYear) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'order') {
        return a.order - b.order;
      }
      if (filters.sortBy === 'release-desc') {
        if (a.year !== b.year) return b.year - a.year;
        return a.order - b.order;
      }
      if (filters.sortBy === 'release-asc') {
        if (a.year !== b.year) return a.year - b.year;
        return a.order - b.order;
      }
      if (filters.sortBy === 'rating-desc') {
        return b.rating - a.rating;
      }
      if (filters.sortBy === 'title-asc') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [filters, getStatus]);

  return (
    <div className="min-h-screen bg-[#08090C] text-slate-100 flex flex-col font-sans selection:bg-[#E62429] selection:text-white">
      
      {/* Minimal Header */}
      <Navbar
        searchQuery={filters.searchQuery}
        setSearchQuery={(q) => setFilters(prev => ({ ...prev, searchQuery: q }))}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-6 pt-3 pb-16 space-y-3">
        
        {/* Minimal Progress Meter */}
        <div className="flex items-center justify-between px-1 py-1 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-slate-300">Progress</span>
            <span className="text-slate-600">&bull;</span>
            <span className="font-mono text-[11px] text-slate-400 tabular-nums">
              <strong className="text-white font-medium">{stats.watchedCount}</strong> of {stats.activeItems} ({stats.completionPercentage}%)
            </span>
            {stats.skippedCount > 0 && (
              <>
                <span className="text-slate-600 hidden sm:inline">&bull;</span>
                <span className="text-slate-500 font-mono text-[11px] hidden sm:inline">
                  {stats.skippedCount} skipped
                </span>
              </>
            )}
          </div>

          <div className="w-24 sm:w-36 h-1 bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-400/90 rounded-full transition-all duration-300"
              style={{ width: `${stats.completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Filter Bar with Franchise separation */}
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          totalMatches={filteredItems.length}
        />

        {/* Skipped Notice Banner */}
        {filters.status === 'skipped' && (
          <div className="p-3 rounded-xl bg-[#0F1118] border border-white/[0.06] flex items-center gap-2.5 text-xs text-slate-400">
            <SkipForward className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
            <span>
              Skipped titles are hidden from the active watchlist. Tap <strong className="text-slate-200">Un-skip</strong> on any title to restore it.
            </span>
          </div>
        )}

        {/* Titles List */}
        {filteredItems.length === 0 ? (
          <div className="p-10 sm:p-14 text-center rounded-xl bg-[#0F1118] border border-white/[0.06] space-y-2.5">
            <p className="text-xs sm:text-sm text-slate-400">
              {filters.status === 'skipped'
                ? 'No skipped titles found in this universe.'
                : 'No titles match your current search or filters.'}
            </p>
            {(filters.franchise !== 'all' || filters.status !== 'all' || filters.searchQuery) && (
              <button
                onClick={() => setFilters(prev => ({ ...prev, franchise: 'all', status: 'all', searchQuery: '' }))}
                className="mt-1 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-medium border border-white/[0.08] transition-colors"
              >
                Reset All Filters
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-1.5 sm:space-y-2">
            {filteredItems.map(item => (
              <MovieCard
                key={item.id}
                item={item}
                viewMode="list"
                onOpenDetails={(i) => setSelectedMovie(i)}
              />
            ))}
          </div>
        )}

      </main>

      {/* Detail Modal */}
      {selectedMovie && (
        <MovieDetailModal
          item={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onSelectMovie={(i) => setSelectedMovie(i)}
        />
      )}

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      {/* Minimal Footer */}
      <footer className="border-t border-white/[0.04] py-6 text-center text-[11px] text-slate-600 font-mono">
        MARVELMAP &bull; MINIMALIST CINEMATIC WATCHLIST
      </footer>

    </div>
  );
};
