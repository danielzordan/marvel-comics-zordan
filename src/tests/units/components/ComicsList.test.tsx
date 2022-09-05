/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComicsList } from '../../../components/ComicsList';
import { ComicsContext } from '../../../contexts/ComicsContext';
import {
  mockedComicsContextState,
  mockedComics,
} from '../__mocks__/comicsContext';
import { myMockUseFavorite } from '../__mocks__/favoriteComicsContext';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}));

jest.mock('../../../hooks/useFavorite', () => ({
  useFavorite: () => myMockUseFavorite,
}));

describe('Unit tests ComicsList component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly ', () => {
    render(
      <ComicsContext.Provider value={mockedComicsContextState}>
        <ComicsList comics={mockedComics} />
      </ComicsContext.Provider>
    );

    const comicTitle = screen.getByText(mockedComics.comicsList[0].title);

    expect(comicTitle).not.toBe(undefined);
  });

  it('should call navigate correctly', async () => {
    render(
      <ComicsContext.Provider value={mockedComicsContextState}>
        <ComicsList comics={mockedComics} />
      </ComicsContext.Provider>
    );

    const comicItem = screen.getAllByTestId('comic-item-content')[0];
    await userEvent.click(comicItem);

    expect(mockedUseNavigate).toBeCalledTimes(1);
    expect(mockedUseNavigate).toBeCalledWith(
      {
        pathname: 'details',
        search: `?comicId=${mockedComics.comicsList[0].id}`,
      },
      { state: mockedComics.comicsList[0] }
    );
  });
});
