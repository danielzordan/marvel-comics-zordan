/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from '../../../components/Pagination';
import { ComicsContext } from '../../../contexts/ComicsContext';
import {
  mockedComicsContextState,
  mockedComics,
} from '../__mocks__/comicsContext';

describe('Unit tests Pagination component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly in position 0', () => {
    render(
      <ComicsContext.Provider value={mockedComicsContextState}>
        <Pagination totalComics={mockedComics.total} />
      </ComicsContext.Provider>
    );

    const buttonCurrentPage = screen.getByText('1');

    expect(buttonCurrentPage).not.toBe(undefined);
  });

  it('should navigate correctly when click in button to page 2', async () => {
    render(
      <ComicsContext.Provider
        value={{
          ...mockedComicsContextState,
          requestConfig: {
            offset: 1,
            limit: 30,
            ts: 1,
          },
        }}
      >
        <Pagination totalComics={mockedComics.total} />
      </ComicsContext.Provider>
    );

    const buttonToPage2 = screen.getByText('2');

    await userEvent.click(buttonToPage2);

    expect(mockedComicsContextState.handleClickNavigatePage).toBeCalledTimes(1);
  });

  it('should navigate correctly to next page', async () => {
    render(
      <ComicsContext.Provider
        value={{
          ...mockedComicsContextState,
          requestConfig: {
            offset: 0,
            limit: 30,
            ts: 1,
          },
        }}
      >
        <Pagination totalComics={mockedComics.total} />
      </ComicsContext.Provider>
    );

    const buttonToNextPage = screen.getByTestId('pagination-button-next-page');

    await userEvent.click(buttonToNextPage);

    expect(mockedComicsContextState.handleClickNextPage).toBeCalledTimes(1);
  });

  it('should navigate correctly to previous page', async () => {
    render(
      <ComicsContext.Provider
        value={{
          ...mockedComicsContextState,
          requestConfig: {
            offset: 1,
            limit: 30,
            ts: 1,
          },
        }}
      >
        <Pagination totalComics={mockedComics.total} />
      </ComicsContext.Provider>
    );

    const buttonToPreviousPage = screen.getByTestId(
      'pagination-button-previous-page'
    );

    await userEvent.click(buttonToPreviousPage);

    expect(mockedComicsContextState.handleClickPreviousPage).toBeCalledTimes(1);
  });
});
