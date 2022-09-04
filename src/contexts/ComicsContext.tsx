import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Comic } from '../@types/comics';
import { api } from '../lib/axios';

interface RequestConfig {
  offset: number;
  limit: number;
  ts: number;
}

export interface ComicsDataType {
  total: number;
  comicsList: Comic[];
}

export interface ComicsContextType {
  comics: ComicsDataType;
  requestConfig: RequestConfig;
  handleClickNextPage: () => void;
  handleClickNavigatePage: (page: number) => void;
  handleClickPreviousPage: () => void;
  handleSearch: (search: string) => void;
  loadComic: (comicId: string | null) => Promise<Comic>;
  favoritedComics: ComicsDataType;
  getStoragedFavoritedComics: () => void;
  addFavoritedComics: (favoritedComic: Comic) => void;
  removeFavoritedComics: (comicId: number) => void;
}

export interface ComicsProviderProps {
  children: React.ReactNode;
}

export const ComicsContext = createContext({} as ComicsContextType);

const API_KEY = 'cd9f147c64cd174b64792d0914f2917d';
const HASH = 'e9b5767664ccb44fc297036cdcbf8035';
const OFFSET_BASE = 0;
const LIMIT_BASE = 30;
const TIMESTAMP_BASE = 1;

export function ComicsProvider({ children }: ComicsProviderProps) {
  const [comics, setComics] = useState<ComicsDataType>({
    total: 0,
    comicsList: [],
  });

  const [searchString, setSearchString] = useState('');
  const [favoritedComics, setFavoritedComics] = useState<ComicsDataType>({
    total: 0,
    comicsList: [],
  });

  const [requestConfig, setRequestConfig] = useState<RequestConfig>({
    offset: OFFSET_BASE,
    limit: LIMIT_BASE,
    ts: TIMESTAMP_BASE,
  });

  const loadComicsList = useCallback(async () => {
    const params = {
      limit: requestConfig.limit,
      offset: requestConfig.offset,
      ts: 1,
      apikey: API_KEY,
      hash: HASH,
      ...(searchString && { titleStartsWith: searchString }),
    };

    const { data } = await api.get('comics', {
      params,
    });

    const { results: comicsList, total } = data.data;

    if (total > 0) {
      setComics({
        total,
        comicsList,
      });
    }
  }, [requestConfig, searchString]);

  useEffect(() => {
    loadComicsList();
  }, [loadComicsList, requestConfig, searchString]);

  const loadComic = useCallback(async (comicId: string | null) => {
    if (!comicId) return null;

    const params = {
      ts: 1,
      apikey: API_KEY,
      hash: HASH,
    };

    const { data } = await api.get(`comics/${comicId}`, {
      params,
    });

    const { results: comic } = data.data;

    return comic[0];
  }, []);

  function resetRequestConfig() {
    setRequestConfig({
      offset: OFFSET_BASE,
      limit: LIMIT_BASE,
      ts: TIMESTAMP_BASE,
    });
  }

  const handleSearch = useCallback(
    async (search: string) => {
      if (search !== searchString) {
        setSearchString(search);
        resetRequestConfig();
      }
    },
    [searchString]
  );

  const handleClickNextPage = useCallback(async () => {
    setRequestConfig({
      ...requestConfig,
      offset: requestConfig.offset + requestConfig.limit,
    });
  }, [requestConfig]);

  const handleClickPreviousPage = useCallback(async () => {
    if (requestConfig.offset > 0) {
      setRequestConfig({
        ...requestConfig,
        offset: requestConfig.offset - requestConfig.limit,
      });
    }
  }, [requestConfig]);

  const handleClickNavigatePage = useCallback(
    async (page: number) => {
      setRequestConfig({
        ...requestConfig,
        offset: requestConfig.limit * page,
      });
    },
    [requestConfig]
  );

  const getStoragedFavoritedComics = useCallback(async () => {
    const storedFavoritedComics = localStorage.getItem('favoritedComics');

    let parsedFavoritedComics: Comic[] = [];
    if (storedFavoritedComics) {
      parsedFavoritedComics = await JSON.parse(storedFavoritedComics);
    }

    setFavoritedComics({
      total: parsedFavoritedComics.length,
      comicsList: parsedFavoritedComics,
    });
  }, []);

  const addFavoritedComics = useCallback(
    (favoritedComic: Comic) => {
      const newFavorites = [...favoritedComics.comicsList, favoritedComic];
      setFavoritedComics({
        total: newFavorites.length,
        comicsList: newFavorites,
      });

      localStorage.setItem('favoritedComics', JSON.stringify(newFavorites));
    },
    [favoritedComics]
  );

  const removeFavoritedComics = useCallback(
    (comicId: number) => {
      const newFavorites = favoritedComics.comicsList.filter(
        (favoritedComic) => favoritedComic.id !== comicId
      );

      setFavoritedComics({
        total: newFavorites.length,
        comicsList: newFavorites,
      });

      localStorage.setItem('favoritedComics', JSON.stringify(newFavorites));
    },
    [favoritedComics]
  );

  useEffect(() => {
    getStoragedFavoritedComics();
  }, [getStoragedFavoritedComics]);

  const state: ComicsContextType = useMemo(() => {
    return {
      comics,
      requestConfig,
      loadComic,
      handleClickNextPage,
      handleClickNavigatePage,
      handleClickPreviousPage,
      handleSearch,
      favoritedComics,
      getStoragedFavoritedComics,
      addFavoritedComics,
      removeFavoritedComics,
    };
  }, [
    comics,
    requestConfig,
    loadComic,
    handleClickNextPage,
    handleClickNavigatePage,
    handleClickPreviousPage,
    handleSearch,
    favoritedComics,
    getStoragedFavoritedComics,
    addFavoritedComics,
    removeFavoritedComics,
  ]);

  return (
    <ComicsContext.Provider value={state}>{children}</ComicsContext.Provider>
  );
}
