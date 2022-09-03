/* eslint-disable react/jsx-no-constructed-context-values */
import { fireEvent, render, screen } from '@testing-library/react';
import { ComicsContext } from '../../../contexts/ComicsContext';
import { Home } from '../../../pages/Home';
import { mockedContextState } from '../__mocks__/context';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}));

describe('Unit tests Home page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    render(
      <ComicsContext.Provider value={mockedContextState}>
        <Home />
      </ComicsContext.Provider>
    );

    const searchButton = screen.getByText('Search');

    expect(searchButton).not.toBe(undefined);
  });

  it('should call handleSearch correctly', async () => {
    render(
      <ComicsContext.Provider value={mockedContextState}>
        <Home />
      </ComicsContext.Provider>
    );

    const searchForm = screen.getByTestId('home-search-form');
    const searchFormInput = screen.getByTestId('home-search-form-input');
    await fireEvent.change(searchFormInput, { target: { value: 'spider' } });
    await fireEvent.submit(searchForm);

    expect(mockedContextState.handleSearch).toBeCalledTimes(1);
    expect(mockedContextState.handleSearch).toBeCalledWith('spider');
  });

  it('should call handleSearch correctly', async () => {
    render(
      <ComicsContext.Provider value={mockedContextState}>
        <Home />
      </ComicsContext.Provider>
    );

    const comicItem = screen.getAllByTestId('comic-item-content')[0];
    await fireEvent.click(comicItem);

    expect(mockedUseNavigate).toBeCalledTimes(1);
  });

  it('should render correctly when have not comics', async () => {
    render(
      <ComicsContext.Provider
        value={{ ...mockedContextState, comics: { total: 0, comicsList: [] } }}
      >
        <Home />
      </ComicsContext.Provider>
    );

    const comicLoadingText = screen.getByText('Loading...');

    expect(comicLoadingText).not.toBe(undefined);
  });
});
