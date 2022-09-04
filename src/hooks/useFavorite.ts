import React from 'react';
import { Comic } from '../@types/comics';
import { ComicsContext } from '../contexts/ComicsContext';

interface UseFavoritesHookType {
  favoriteComic: (favoritedComic: Comic) => void;
  isFavorite: (comicId: number) => boolean;
}

export function useFavorite(): UseFavoritesHookType {
  const { favoritedComics, addFavoritedComics, removeFavoritedComics } =
    React.useContext(ComicsContext);

  const isFavorite = (comicId: number) => {
    return favoritedComics.comicsList.some((comic) => comic.id === comicId);
  };

  const favoriteComic = (favoritedComic: Comic) => {
    if (isFavorite(favoritedComic.id)) {
      removeFavoritedComics(favoritedComic.id);
    } else {
      addFavoritedComics(favoritedComic);
    }
  };

  return {
    favoriteComic,
    isFavorite,
  };
}
