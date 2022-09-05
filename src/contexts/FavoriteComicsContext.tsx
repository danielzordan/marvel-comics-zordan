import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Comic, ComicsDataType } from '../@types/comics';

export interface FavoriteComicsContextType {
  favoritedComics: ComicsDataType;
  getStoragedFavoritedComics: () => void;
  addFavoritedComics: (favoritedComic: Comic) => void;
  removeFavoritedComics: (comicId: number) => void;
}

export interface FavoriteComicsProviderProps {
  children: React.ReactNode;
}

export const FavoriteComicsContext = createContext(
  {} as FavoriteComicsContextType
);

export function FavoriteComicsProvider({
  children,
}: FavoriteComicsProviderProps) {
  const [favoritedComics, setFavoritedComics] = useState<ComicsDataType>({
    total: 0,
    comicsList: [],
  });

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

  const state: FavoriteComicsContextType = useMemo(() => {
    return {
      favoritedComics,
      getStoragedFavoritedComics,
      addFavoritedComics,
      removeFavoritedComics,
    };
  }, [
    favoritedComics,
    getStoragedFavoritedComics,
    addFavoritedComics,
    removeFavoritedComics,
  ]);

  return (
    <FavoriteComicsContext.Provider value={state}>
      {children}
    </FavoriteComicsContext.Provider>
  );
}
