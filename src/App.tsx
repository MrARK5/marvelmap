import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { FilterBar } from './components/FilterBar';
import { MovieCard } from './components/MovieCard';
import { MovieDetailModal } from './components/MovieDetailModal';
import { TimelineView } from './components/TimelineView';
import { WatchOrderView } from './components/WatchOrderView';
import { WatchlistView } from './components/WatchlistView';
import { DashboardView } from './components/DashboardView';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { useWatchlist } from './context/WatchlistContext';
import { MARVEL_CATALOG } from './data/marvelCatalog';
import { ActiveTab, FilterState, MarvelItem } from './types/marvel';

export const App: React.FC = () => {
  const { getStatus } = useWatchlist();

  const [activeTab, setActiveTab] = useState<ActiveTab>('catalog');
  const [selectedMovie, setSelectedMovie] = useState<MarvelItem | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    status: 'all',
    type: 'all',
    phase: 'all',
    decade: 'all',
    essentialOnly: false,
    mcuOnly: false,
    hasPostCredits: false,
    sortBy: 'order',
    viewMode: 'grid',
  });

  const filteredItems = useMemo(() => {
    return MARVEL_CATALOG.filter(item => {
      // Search
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesUniverse = item.universe.toLowerCase().includes(q);
        const matchesNotes = item.notes.toLowerCase().includes(q);
        const matchesYear = String(item.year).includes(q);
        if (!matchesTitle && !matchesUniverse && !matchesNotes && !matchesYear) {
          return false;
        }
      }

      // Watch status
      if (filters.status !== 'all') {
        const s = getStatus(item.id);
        if (s !== filters.status) return false;
      }

      // Type
      if (filters.type !== 'all') {
        if (item.type !== filters.type) return false;
      }

      // Phase
      if (filters.phase !== 'all') {
        if (item.phase !== filters.phase) return false;
      }

      // Decade
      if (filters.decade !== 'all') {
        const y = item.year;
        if (filters.decade === '1980s' && (y < 1980 || y > 1989)) return false;
        if (filters.decade === '1990s' && (y < 1990 || y > 1999)) return false;
        if (filters.decade === '2000s' && (y < 2000 || y > 2009)) return false;
        if (filters.decade === '2010s' && (y < 2010 || y > 2019)) return false;
        if (filters.decade === '2020s' && y < 2020) return false;
      }

      // Essential
      if (filters.essentialOnly && !item.isEssential) {
        return false;
      }

      // MCU Only
      if (filters.mcuOnly && !item.isMCU) {
        return false;
      }

      // Post credits
      if (filters.hasPostCredits && (!item.postCredits || item.postCredits.includes('❌ No'))) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'order') {
        return a.order - b.order;
      }
      if (filters.sortBy === 'release-desc') {
        if (a.year !== b.year) return b.year - a.year;
        return b.order - a.order;
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
      if (filters.sortBy === 'phase') {
        return a.order - b.order;
      }
      return 0;
    });
  }, [filters, getStatus]);

  return (
    <div className="min-h-screen bg-[#0A0C10] text-slate-100 flex flex-col font-sans selection:bg-[#E62429] selection:text-white">
      
      {/* Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={filters.searchQuery}
        setSearchQuery={(q) => setFilters(prev => ({ ...prev, searchQuery: q }))}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Catalog Tab */}
        {activeTab === 'catalog' && (
          <div className="space-y-4">
            
            {!filters.searchQuery && (
              <HeroBanner
                setActiveTab={setActiveTab}
                onSelectMovie={(item) => setSelectedMovie(item)}
              />
            )}

            <FilterBar
              filters={filters}
              setFilters={setFilters}
              totalMatches={filteredItems.length}
            />

            {filteredItems.length === 0 ? (
              <div className="p-12 text-center rounded-xl bg-[#11141E] border border-[#1E2536] space-y-2">
                <h3 className="font-bold text-white text-sm">No titles found</h3>
                <p className="text-xs text-slate-400">
                  Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={() => setFilters(prev => ({
                    ...prev,
                    searchQuery: '',
                    status: 'all',
                    type: 'all',
                    phase: 'all',
                    decade: 'all',
                    essentialOnly: false,
                    mcuOnly: false,
                    hasPostCredits: false,
                  }))}
                  className="mt-2 px-3 py-1.5 rounded-md bg-[#E62429] hover:bg-[#CC1E23] text-white text-xs font-semibold transition-colors"
                >
                  Reset filters
                </button>
              </div>
            ) : filters.viewMode === 'list' ? (
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
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {filteredItems.map(item => (
                  <MovieCard
                    key={item.id}
                    item={item}
                    viewMode="grid"
                    onOpenDetails={(i) => setSelectedMovie(i)}
                  />
                ))}
              </div>
            )}

          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <TimelineView onSelectMovie={(item) => setSelectedMovie(item)} />
        )}

        {/* Watch Orders Tab */}
        {activeTab === 'watch-orders' && (
          <WatchOrderView onSelectMovie={(item) => setSelectedMovie(item)} />
        )}

        {/* Watchlist Tab */}
        {activeTab === 'watchlist' && (
          <WatchlistView
            onSelectMovie={(item) => setSelectedMovie(item)}
            onBrowseCatalog={() => setActiveTab('catalog')}
          />
        )}

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <DashboardView onOpenAuth={() => setIsAuthModalOpen(true)} />
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

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
};
