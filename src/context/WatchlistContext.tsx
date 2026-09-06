import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { MARVEL_CATALOG } from '../data/marvelCatalog';
import { MarvelItem, WatchStatus, WatchStats } from '../types/marvel';
import { useAuth } from './AuthContext';
import { saveUserData, loadUserData } from '../lib/firebase';

interface StoredData {
  statusMap: Record<string, WatchStatus>;
  episodeStatusMap: Record<string, Record<number, boolean>>;
  userNotes: Record<string, string>;
}

interface WatchlistContextType {
  statusMap: Record<string, WatchStatus>;
  episodeStatusMap: Record<string, Record<number, boolean>>;
  userNotes: Record<string, string>;
  stats: WatchStats;
  isSavingToCloud: boolean;
  setStatus: (id: string, status: WatchStatus) => void;
  toggleStatus: (id: string, targetStatus: WatchStatus) => void;
  skipItem: (id: string) => void;
  unskipItem: (id: string) => void;
  toggleEpisode: (itemId: string, rowNum: number) => void;
  setAllEpisodes: (itemId: string, watched: boolean) => void;
  getStatus: (id: string) => WatchStatus;
  isEpisodeWatched: (itemId: string, rowNum: number) => boolean;
  getEpisodeProgress: (itemId: string) => { watched: number; total: number; percentage: number };
  setUserNote: (id: string, note: string) => void;
  resetAllProgress: () => void;
  exportData: () => string;
  importData: (jsonStr: string) => boolean;
}

const GUEST_STORAGE_KEY = 'marvelmap_user_data';

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, setIsSyncing } = useAuth();
  const [isSavingToCloud, setIsSavingToCloud] = useState(false);

  const [data, setData] = useState<StoredData>(() => {
    try {
      const saved = localStorage.getItem(GUEST_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          statusMap: parsed.statusMap || {},
          episodeStatusMap: parsed.episodeStatusMap || {},
          userNotes: parsed.userNotes || {},
        };
      }
    } catch (e) {
      console.error('Failed to parse saved data', e);
    }
    return { statusMap: {}, episodeStatusMap: {}, userNotes: {} };
  });

  // Sync on user auth change
  useEffect(() => {
    let isCancelled = false;

    async function syncOnAuth() {
      if (user) {
        setIsSavingToCloud(true);
        setIsSyncing(true);
        try {
          const userCloudData = await loadUserData(user.uid);
          if (!isCancelled) {
            if (userCloudData && Object.keys(userCloudData.statusMap || {}).length > 0) {
              setData({
                statusMap: (userCloudData.statusMap as any) || {},
                episodeStatusMap: userCloudData.episodeStatusMap || {},
                userNotes: userCloudData.userNotes || {},
              });
            } else {
              // First time sign in: transfer guest progress to this account
              await saveUserData(user.uid, {
                statusMap: data.statusMap,
                episodeStatusMap: data.episodeStatusMap,
                userNotes: data.userNotes,
                updatedAt: new Date().toISOString(),
              });
            }
          }
        } catch (e) {
          console.error('Sync failed', e);
        } finally {
          if (!isCancelled) {
            setIsSavingToCloud(false);
            setIsSyncing(false);
          }
        }
      } else {
        // User logged out: restore guest session cleanly
        try {
          const saved = localStorage.getItem(GUEST_STORAGE_KEY);
          if (saved) {
            const parsed = JSON.parse(saved);
            setData({
              statusMap: parsed.statusMap || {},
              episodeStatusMap: parsed.episodeStatusMap || {},
              userNotes: parsed.userNotes || {},
            });
          } else {
            setData({ statusMap: {}, episodeStatusMap: {}, userNotes: {} });
          }
        } catch {
          setData({ statusMap: {}, episodeStatusMap: {}, userNotes: {} });
        }
      }
    }

    syncOnAuth();
    return () => { isCancelled = true; };
  }, [user?.uid]);

  // Persist locally & to Cloud
  useEffect(() => {
    if (!user) {
      try {
        localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(data));
      } catch (e) {
        console.error('Failed to write to localStorage', e);
      }
      return;
    }

    setIsSavingToCloud(true);
    const timer = setTimeout(async () => {
      try {
        await saveUserData(user.uid, {
          statusMap: data.statusMap,
          episodeStatusMap: data.episodeStatusMap,
          userNotes: data.userNotes,
          updatedAt: new Date().toISOString(),
        });
      } catch (e) {
        console.error('Auto cloud sync failed', e);
      } finally {
        setIsSavingToCloud(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [data, user?.uid]);

  const getStatus = useCallback((id: string): WatchStatus => {
    return data.statusMap[id] || 'unwatched';
  }, [data.statusMap]);

  const setStatus = useCallback((id: string, status: WatchStatus) => {
    setData(prev => {
      const newStatusMap = { ...prev.statusMap, [id]: status };
      const newEpMap = { ...prev.episodeStatusMap };

      const item = MARVEL_CATALOG.find(i => i.id === id);
      if (item && item.episodes.length > 0) {
        if (status === 'watched') {
          const epDict: Record<number, boolean> = {};
          item.episodes.forEach(ep => { epDict[ep.rowNum] = true; });
          newEpMap[id] = epDict;
        } else if (status === 'unwatched' || status === 'skipped') {
          delete newEpMap[id];
        }
      }

      return {
        ...prev,
        statusMap: newStatusMap,
        episodeStatusMap: newEpMap,
      };
    });
  }, []);

  const toggleStatus = useCallback((id: string, targetStatus: WatchStatus) => {
    const current = getStatus(id);
    setStatus(id, current === targetStatus ? 'unwatched' : targetStatus);
  }, [getStatus, setStatus]);

  const skipItem = useCallback((id: string) => {
    setStatus(id, 'skipped');
  }, [setStatus]);

  const unskipItem = useCallback((id: string) => {
    setStatus(id, 'unwatched');
  }, [setStatus]);

  const toggleEpisode = useCallback((itemId: string, rowNum: number) => {
    setData(prev => {
      const item = MARVEL_CATALOG.find(i => i.id === itemId);
      if (!item) return prev;

      const currentEpMap = { ...(prev.episodeStatusMap[itemId] || {}) };
      const currentVal = !!currentEpMap[rowNum];
      currentEpMap[rowNum] = !currentVal;

      const watchedCount = item.episodes.filter(ep => currentEpMap[ep.rowNum]).length;
      let newShowStatus: WatchStatus = prev.statusMap[itemId] || 'unwatched';

      if (watchedCount === item.episodes.length && item.episodes.length > 0) {
        newShowStatus = 'watched';
      } else if (watchedCount > 0) {
        newShowStatus = 'watching';
      } else if (watchedCount === 0 && newShowStatus === 'watching') {
        newShowStatus = 'unwatched';
      }

      return {
        ...prev,
        episodeStatusMap: {
          ...prev.episodeStatusMap,
          [itemId]: currentEpMap
        },
        statusMap: {
          ...prev.statusMap,
          [itemId]: newShowStatus
        }
      };
    });
  }, []);

  const setAllEpisodes = useCallback((itemId: string, watched: boolean) => {
    setData(prev => {
      const item = MARVEL_CATALOG.find(i => i.id === itemId);
      if (!item) return prev;

      const epDict: Record<number, boolean> = {};
      if (watched) {
        item.episodes.forEach(ep => { epDict[ep.rowNum] = true; });
      }

      return {
        ...prev,
        episodeStatusMap: {
          ...prev.episodeStatusMap,
          [itemId]: epDict
        },
        statusMap: {
          ...prev.statusMap,
          [itemId]: watched ? 'watched' : 'unwatched'
        }
      };
    });
  }, []);

  const isEpisodeWatched = useCallback((itemId: string, rowNum: number): boolean => {
    return !!(data.episodeStatusMap[itemId] && data.episodeStatusMap[itemId][rowNum]);
  }, [data.episodeStatusMap]);

  const getEpisodeProgress = useCallback((itemId: string) => {
    const item = MARVEL_CATALOG.find(i => i.id === itemId);
    if (!item || item.episodes.length === 0) {
      return { watched: 0, total: 0, percentage: 0 };
    }
    const epMap = data.episodeStatusMap[itemId] || {};
    const watched = item.episodes.filter(ep => epMap[ep.rowNum]).length;
    const total = item.episodes.length;
    const percentage = Math.round((watched / total) * 100);
    return { watched, total, percentage };
  }, [data.episodeStatusMap]);

  const setUserNote = useCallback((id: string, note: string) => {
    setData(prev => ({
      ...prev,
      userNotes: { ...prev.userNotes, [id]: note }
    }));
  }, []);

  const resetAllProgress = useCallback(() => {
    if (window.confirm('Reset all your watch progress? This cannot be undone.')) {
      setData({ statusMap: {}, episodeStatusMap: {}, userNotes: {} });
    }
  }, []);

  const exportData = useCallback((): string => {
    return JSON.stringify(data, null, 2);
  }, [data]);

  const importData = useCallback((jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && typeof parsed === 'object') {
        setData({
          statusMap: parsed.statusMap || {},
          episodeStatusMap: parsed.episodeStatusMap || {},
          userNotes: parsed.userNotes || {},
        });
        return true;
      }
    } catch (e) {
      console.error('Import error', e);
    }
    return false;
  }, []);

  const stats = useMemo<WatchStats>(() => {
    let watchedCount = 0;
    let watchingCount = 0;
    let watchLaterCount = 0;
    let skippedCount = 0;
    let moviesWatched = 0;
    let totalMovies = 0;
    let showsWatched = 0;
    let totalShows = 0;
    let totalHours = 0;
    let watchedHours = 0;

    const parseHours = (runtime: string): number => {
      if (!runtime) return 0;
      const hMatch = runtime.match(/(\d+)h/);
      const mMatch = runtime.match(/(\d+)m/);
      const h = hMatch ? parseInt(hMatch[1], 10) : 0;
      const m = mMatch ? parseInt(mMatch[1], 10) : 0;
      return h + m / 60;
    };

    MARVEL_CATALOG.forEach(item => {
      const status = data.statusMap[item.id] || 'unwatched';
      const hours = parseHours(item.runtime);
      totalHours += hours;

      if (item.type === 'Movie') totalMovies++;
      if (item.type === 'TV Show') totalShows++;

      if (status === 'watched') {
        watchedCount++;
        watchedHours += hours;
        if (item.type === 'Movie') moviesWatched++;
        if (item.type === 'TV Show') showsWatched++;
      } else if (status === 'watching') {
        watchingCount++;
        if (item.episodes.length > 0) {
          const epMap = data.episodeStatusMap[item.id] || {};
          const epWatched = item.episodes.filter(ep => epMap[ep.rowNum]).length;
          const ratio = epWatched / item.episodes.length;
          watchedHours += hours * ratio;
        } else {
          watchedHours += hours * 0.5;
        }
      } else if (status === 'watchLater') {
        watchLaterCount++;
      } else if (status === 'skipped') {
        skippedCount++;
      }
    });

    const activeItems = Math.max(MARVEL_CATALOG.length - skippedCount, 0);
    const completionPercentage = activeItems > 0 ? Math.round((watchedCount / activeItems) * 100) : 0;

    return {
      totalItems: MARVEL_CATALOG.length,
      activeItems,
      watchedCount,
      watchingCount,
      watchLaterCount,
      skippedCount,
      completionPercentage,
      totalHours: Math.round(totalHours),
      watchedHours: Math.round(watchedHours),
      moviesWatched,
      totalMovies,
      showsWatched,
      totalShows,
    };
  }, [data]);

  return (
    <WatchlistContext.Provider
      value={{
        statusMap: data.statusMap,
        episodeStatusMap: data.episodeStatusMap,
        userNotes: data.userNotes,
        stats,
        isSavingToCloud,
        setStatus,
        toggleStatus,
        skipItem,
        unskipItem,
        toggleEpisode,
        setAllEpisodes,
        getStatus,
        isEpisodeWatched,
        getEpisodeProgress,
        setUserNote,
        resetAllProgress,
        exportData,
        importData,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};
