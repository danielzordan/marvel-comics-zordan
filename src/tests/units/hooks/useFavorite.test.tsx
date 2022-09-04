import { renderHook } from '@testing-library/react';
import React from 'react';
import { mockedContextState } from '../__mocks__/context';

import { useFavorite } from '../../../hooks/useFavorite';

jest.spyOn(React, 'useContext').mockImplementation(() => mockedContextState);

describe('useFavorite hook unit tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return true when comic is favorited', () => {
    const { result } = renderHook(useFavorite);

    const isFavoritedComic = result.current.isFavorite(1);

    expect(isFavoritedComic).toBeTruthy();
  });

  test('should return false when comic is not favorited', () => {
    const { result } = renderHook(useFavorite);

    const isFavoritedComic = result.current.isFavorite(2);

    expect(isFavoritedComic).toBeFalsy();
  });

  test('should call addFavoritedComics when comic is not in favorites', () => {
    const { result } = renderHook(useFavorite);

    result.current.favoriteComic(mockedContextState.comics.comicsList[0]);

    expect(mockedContextState.addFavoritedComics).toBeCalledTimes(1);
  });

  test('should call removeFavoritedComics when comic is in favorites', () => {
    const { result } = renderHook(useFavorite);

    result.current.favoriteComic(mockedContextState.comics.comicsList[1]);

    expect(mockedContextState.removeFavoritedComics).toBeCalledTimes(1);
  });
});
