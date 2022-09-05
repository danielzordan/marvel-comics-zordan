/* eslint-disable react/jsx-no-constructed-context-values */
import { fireEvent, render, screen } from '@testing-library/react';
import { ComicsContext } from '../../../contexts/ComicsContext';
import { FavoriteComicsContext } from '../../../contexts/FavoriteComicsContext';
import { Home } from '../../../pages/Home';
import { mockedComicsContextState } from '../__mocks__/comicsContext';
import {
  mockedFavoriteComicsContextState,
  myMockUseFavorite,
} from '../__mocks__/favoriteComicsContext';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}));

jest.mock('../../../hooks/useFavorite', () => ({
  useFavorite: () => myMockUseFavorite,
}));

describe('Unit tests Home page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    render(
      <ComicsContext.Provider value={mockedComicsContextState}>
        <Home />
      </ComicsContext.Provider>
    );

    const searchButton = screen.getByText('Search');

    expect(searchButton).not.toBe(undefined);
  });

  it('should call handleSearch correctly', async () => {
    render(
      <ComicsContext.Provider value={mockedComicsContextState}>
        <Home />
      </ComicsContext.Provider>
    );

    const searchForm = screen.getByTestId('home-search-form');
    const searchFormInput = screen.getByTestId('home-search-form-input');
    await fireEvent.change(searchFormInput, { target: { value: 'spider' } });
    await fireEvent.submit(searchForm);

    expect(mockedComicsContextState.handleSearch).toBeCalledTimes(1);
    expect(mockedComicsContextState.handleSearch).toBeCalledWith('spider');
  });

  it('should render correctly when have not comics', async () => {
    render(
      <ComicsContext.Provider
        value={{
          ...mockedComicsContextState,
          comics: { total: 0, comicsList: [] },
        }}
      >
        <Home />
      </ComicsContext.Provider>
    );

    const comicLoadingText = screen.getByText('There is no items in list');

    expect(comicLoadingText).not.toBe(undefined);
  });

  it('should render correctly when comics are loading', async () => {
    render(
      <ComicsContext.Provider
        value={{ ...mockedComicsContextState, isLoadingComics: true }}
      >
        <Home />
      </ComicsContext.Provider>
    );

    const comicLoadingText = screen.getByText('Loading...');

    expect(comicLoadingText).not.toBe(undefined);
  });

  it('should not find favorited comic when filter is down', async () => {
    render(
      <ComicsContext.Provider value={mockedComicsContextState}>
        <FavoriteComicsContext.Provider
          value={mockedFavoriteComicsContextState}
        >
          <Home />
        </FavoriteComicsContext.Provider>
      </ComicsContext.Provider>
    );

    const favoritedComic = screen.queryByText('favorited-1');

    expect(favoritedComic).toBe(null);
  });

  it('should find favorited comic when filter is up', async () => {
    render(
      <ComicsContext.Provider value={mockedComicsContextState}>
        <FavoriteComicsContext.Provider
          value={mockedFavoriteComicsContextState}
        >
          <Home />
        </FavoriteComicsContext.Provider>
      </ComicsContext.Provider>
    );

    const favoriteFilterButton = screen.getByTestId(
      'home-favorite-filter-button'
    );
    await fireEvent.click(favoriteFilterButton);

    const favoritedComic = screen.getByText('favorited-1');

    expect(favoritedComic).not.toBe(undefined);
  });
});
