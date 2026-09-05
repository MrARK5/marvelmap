import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { FilterBar } from './components/FilterBar';
import { MovieCard } from './components/MovieCard';
import { MovieDetailModal } from './components/MovieDetailModal';
import { AuthModal } from './components/AuthModal';
import { useWatchlist } from './context/WatchlistContext';
import { MARVEL_CATALOG } from './data/marvelCatalog';
import { FilterState, MarvelItem } from './types/marvel';
import { SkipForward, CheckCircle2 } from 'lucide-react';

export const App: React.FC = () => {
  const { getStatus, stats } = useWatchlist();

  const [selectedMovie, setSelectedMovie] = useState<MarvelItem | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    status: 'all',
    type: 'all',
    phase: 'all',
    sortBy: 'order',
    viewMode: 'list',
  });

  const filteredItems = useMemo(() => {
    return MARVEL_CATALOG.filter(item => {
      const status = getStatus(item.id);

      // Default 'all' view: HIDE SKIPPED TITLES so they don't appear in default homepage
      if (filters.status === 'all') {
        if (status === 'skipped') return false;
      } else {
        // Specific status filter (e.g. 'skipped', 'watched', 'watching', 'watchLater')
        if (status !== filters.status) return false;
      }

      // Search
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesUniverse = item.universe.toLowerCase().includes(q);
        const matchesYear = String(item.year).includes(q);
        if (!matchesTitle && !matchesUniverse && !matchesYear) {
          return false;
        }
      }

      // Phase
      if (filters.phase !== 'all') {
        if (item.phase !== filters.phase) return false;
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
    <div className="min-h-screen bg-[#0A0C10] text-slate-100 flex flex-col font-sans selection:bg-[#E62429] selection:text-white">
      
      {/* Minimal Header */}
      <Navbar
        searchQuery={filters.searchQuery}
        setSearchQuery={(q) => setFilters(prev => ({ ...prev, searchQuery: q }))}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 pt-5 pb-12 space-y-4">
        
        {/* Minimal Progress Bar */}
        <div className="p-3.5 rounded-xl bg-[#11141E] border border-[#1E2536] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="text-xs font-semibold text-slate-200">
              Watch Progress
            </div>
            <div className="text-xs text-slate-400 font-mono">
              <strong className="text-white">{stats.watchedCount}</strong> of {stats.activeItems} watched ({stats.completionPercentage}%)
            </div>
            {stats.skippedCount > 0 && (
              <span className="text-[11px] text-slate-500 font-mono">
                &bull; {stats.skippedCount} skipped
              </span>
            )}
          </div>

          <div className="w-full sm:w-48 h-1.5 bg-[#0A0C10] rounded-full overflow-hidden border border-[#1E2536]">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${stats.completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          totalMatches={filteredItems.length}
        />

        {/* Skipped section notification banner when on 'skipped' tab */}
        {filters.status === 'skipped' && (
          <div className="p-3 rounded-lg bg-[#11141E] border border-[#1E2536] flex items-center gap-2.5 text-xs text-slate-400">
            <SkipForward className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span>
              These titles are marked as skipped and will <strong>not appear</strong> on your default watchlist. You can restore any title back to your active list at any time.
            </span>
          </div>
        )}

        {/* Titles List */}
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-[#11141E] border border-[#1E2536] space-y-2">
            <p className="text-xs sm:text-sm text-slate-400">
              {filters.status === 'skipped'
                ? 'No skipped titles. You can mark any title as skipped from the main list.'
                : 'No titles match your current filters.'}
            </p>
            {filters.status !== 'all' && (
              <button
                onClick={() => setFilters(prev => ({ ...prev, status: 'all' }))}
                className="mt-2 px-3 py-1.5 rounded-md bg-[#1E2536] hover:bg-[#2A344A] text-white text-xs font-medium transition-colors"
              >
                Show All Active Titles
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-2">
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
      <footer className="border-t border-[#1E2536] py-6 text-center text-[11px] text-slate-600">
        MarvelMap &bull; Minimalist Marvel Cinematic Watchlist
      </footer>

    </div>
  );
};
