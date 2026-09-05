export type MarvelType = 'Movie' | 'TV Show' | 'Short Film' | 'Special';

export type WatchStatus = 'unwatched' | 'watched' | 'watching' | 'watchLater';

export interface MarvelEpisode {
  rowNum: number;
  title: string;
  runtime: string;
  postCredits: string;
  universe: string;
  notes: string;
}

export interface MarvelItem {
  id: string;
  order: number;
  title: string;
  type: MarvelType;
  year: number;
  releaseDate: string;
  phase: string;
  saga: string;
  universe: string;
  runtime: string;
  postCredits: string;
  isEssential: boolean;
  isMCU: boolean;
  notes: string;
  rating: number;
  episodes: MarvelEpisode[];
  episodeCount: number;
}

export type SortOption = 'order' | 'release-desc' | 'release-asc' | 'rating-desc' | 'title-asc' | 'phase';

export type ActiveTab = 'catalog' | 'timeline' | 'watch-orders' | 'watchlist' | 'dashboard';

export interface FilterState {
  searchQuery: string;
  status: WatchStatus | 'all';
  type: MarvelType | 'all';
  phase: string;
  decade: string;
  essentialOnly: boolean;
  mcuOnly: boolean;
  hasPostCredits: boolean;
  sortBy: SortOption;
  viewMode: 'grid' | 'list';
}

export interface WatchStats {
  totalItems: number;
  watchedCount: number;
  watchingCount: number;
  watchLaterCount: number;
  completionPercentage: number;
  totalHours: number;
  watchedHours: number;
  moviesWatched: number;
  totalMovies: number;
  showsWatched: number;
  totalShows: number;
  phaseProgress: {
    phase: string;
    total: number;
    watched: number;
    percentage: number;
  }[];
}
