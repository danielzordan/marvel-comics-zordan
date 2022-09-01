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
  const [searchString, setSearchString] = useState('');
  const [requestConfig, setRequestConfig] = useState<RequestConfig>({
    offset: 0,
    limit: 30,
    ts: 1,
  });

  const loadComics = useCallback(async () => {
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

    const { results } = data.data;

    if (results.length > 0) {
      setComics(results);
    }
  }, [requestConfig, searchString]);

  useEffect(() => {
    loadComics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestConfig, searchString]);

  function resetRequestConfig() {
    setRequestConfig({
      offset: 0,
      limit: 30,
      ts: 1,
    });
  }

  const handleSearch = useCallback(async (search: string) => {
    setSearchString(search);
    resetRequestConfig();
  }, []);

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
