/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComicsList } from '../../../components/ComicsList';
import { ComicsContext } from '../../../contexts/ComicsContext';
import { mockedContextState, mockedComics } from '../__mocks__/context';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}));

const myMockUseFavorite = {
  isFavorite: jest.fn().mockImplementation(() => true),
  favoriteComic: jest.fn(),
};

jest.mock('../../../hooks/useFavorite', () => ({
  useFavorite: () => myMockUseFavorite,
}));

describe('Unit tests ComicsList component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly ', () => {
    render(
      <ComicsContext.Provider value={mockedContextState}>
        <ComicsList comics={mockedComics} />
      </ComicsContext.Provider>
    );

    const comicTitle = screen.getByText(mockedComics.comicsList[0].title);

    expect(comicTitle).not.toBe(undefined);
  });

  it('should call navigate correctly', async () => {
    render(
      <ComicsContext.Provider value={mockedContextState}>
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
