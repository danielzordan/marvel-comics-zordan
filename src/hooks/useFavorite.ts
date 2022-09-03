import React from 'react';
import { ComicsContext } from '../contexts/ComicsContext';

interface UseFavoritesHookType {
  favoriteComic: (comicId: number, comicThumbnailUrl: string) => void;
  isFavorite: (comicId: number) => boolean;
}

export function useFavorite(): UseFavoritesHookType {
  const { favoritedComics, addFavoritedComics, removeFavoritedComics } =
    React.useContext(ComicsContext);

  const isFavorite = (comicId: number) => {
    return favoritedComics.some((comic) => comic.comicId === comicId);
  };

  const favoriteComic = (comicId: number, comicThumbnailUrl: string) => {
    if (isFavorite(comicId)) {
      removeFavoritedComics(comicId);
    } else {
      addFavoritedComics({ comicId, comicThumbnailUrl });
    }
  };

  return {
    favoriteComic,
    isFavorite,
  };
}
