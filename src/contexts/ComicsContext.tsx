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

interface ComicsContextType {
  comics: Comic[];
  handleClickPreviousPage: () => void;
  handleClickNextPage: () => void;
  handleSearch: (search: string) => void;
  requestConfig: RequestConfig;
}

interface ComicsProviderProps {
  children: React.ReactNode;
}

export const ComicsContext = createContext({} as ComicsContextType);

const API_KEY = 'cd9f147c64cd174b64792d0914f2917d';
const HASH = 'e9b5767664ccb44fc297036cdcbf8035';

export function ComicsProvider({ children }: ComicsProviderProps) {
  const [comics, setComics] = useState<Comic[]>([]);
  const [requestConfig, setRequestConfig] = useState<RequestConfig>({
    offset: 0,
    limit: 30,
    ts: 1,
  });

  const loadComics = useCallback(async () => {
    const { data } = await api.get('comics', {
      params: {
        limit: requestConfig.limit,
        offset: requestConfig.offset,
        ts: 1,
        apikey: API_KEY,
        hash: HASH,
      },
    });

    const { results } = data.data;

    if (results.length > 0) {
      setComics(results);
    }
  }, [requestConfig]);

  useEffect(() => {
    loadComics();
  }, []);

  const handleSearch = useCallback(
    async (search: string) => {
      const { data } = await api.get('comics', {
        params: {
          limit: requestConfig.limit,
          offset: requestConfig.offset,
          ts: 1,
          apikey: API_KEY,
          hash: HASH,
          titleStartsWith: search,
        },
      });

      const { results } = data.data;

      if (results.length > 0) {
        setComics(results);
      }
    },
    [requestConfig]
  );

  const handleClickNextPage = useCallback(async () => {
    const { data } = await api.get('comics', {
      params: {
        limit: requestConfig.limit,
        offset: requestConfig.offset + requestConfig.limit,
        ts: 1,
        apikey: API_KEY,
        hash: HASH,
      },
    });

    const { results } = data.data;

    if (results.length > 0) {
      setComics(results);
      setRequestConfig({
        ...requestConfig,
        offset: requestConfig.offset + requestConfig.limit,
      });
    }
  }, [requestConfig]);

  const handleClickPreviousPage = useCallback(async () => {
    if (requestConfig.offset > 0) {
      const { data } = await api.get('comics', {
        params: {
          limit: requestConfig.limit,
          offset: requestConfig.offset - requestConfig.limit,
          ts: 1,
          apikey: API_KEY,
          hash: HASH,
        },
      });

      const { results } = data.data;

      if (results.length > 0) {
        setComics(results);
        setRequestConfig({
          ...requestConfig,
          offset: requestConfig.offset - requestConfig.limit,
        });
      }
    }
  }, [requestConfig]);

  const state: ComicsContextType = useMemo(() => {
    return {
      comics,
      handleClickNextPage,
      handleClickPreviousPage,
      handleSearch,
      requestConfig,
    };
  }, [
    comics,
    requestConfig,
    handleClickNextPage,
    handleClickPreviousPage,
    handleSearch,
  ]);

  return (
    <ComicsContext.Provider value={state}>{children}</ComicsContext.Provider>
  );
}
