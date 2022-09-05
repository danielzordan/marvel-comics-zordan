import React from 'react';
import { Comic, ComicsDataType } from '../@types/comics';
import { FavoriteComicsContext } from '../contexts/FavoriteComicsContext';

interface UseFavoritesHookType {
  favoriteComic: (favoritedComic: Comic) => void;
  isFavorite: (comicId: number) => boolean;
  favoritedComics: ComicsDataType;
}

export function useFavorite(): UseFavoritesHookType {
  const { favoritedComics, addFavoritedComics, removeFavoritedComics } =
    React.useContext(FavoriteComicsContext);

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
    favoritedComics,
  };
}
