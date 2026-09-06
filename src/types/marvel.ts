export type MarvelType = 'Movie' | 'TV Show' | 'Short Film' | 'Special';

export type WatchStatus = 'unwatched' | 'watched' | 'watching' | 'watchLater' | 'skipped';

export type MarvelFranchise = 'all' | 'mcu' | 'x-men' | 'spiderman' | 'legacy' | 'animated';

export type ActiveTab = 'catalog' | 'timeline' | 'watch-orders' | 'watchlist' | 'dashboard';

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
  franchise?: MarvelFranchise;
  subfranchise?: string;
}

export type SortOption = 'order' | 'release-desc' | 'release-asc' | 'rating-desc' | 'title-asc';

export interface FilterState {
  searchQuery: string;
  status: WatchStatus | 'all';
  franchise: MarvelFranchise;
  type?: MarvelType | 'all';
  sortBy: SortOption;
  viewMode?: 'list' | 'grid';
}

export interface WatchStats {
  totalItems: number;
  activeItems: number;
  watchedCount: number;
  watchingCount: number;
  watchLaterCount: number;
  skippedCount: number;
  completionPercentage: number;
  totalHours: number;
  watchedHours: number;
  moviesWatched: number;
  totalMovies: number;
  showsWatched: number;
  totalShows: number;
}
