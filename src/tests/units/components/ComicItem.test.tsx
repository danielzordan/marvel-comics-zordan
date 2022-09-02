/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComicItem } from '../../../components/ComicItem';
import { ComicsContext } from '../../../contexts/ComicsContext';
import { mockedContextState, mockedComics } from './__mocks__';

describe('Unit tests ComicItem component', () => {
  const mockedHandleClickItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly ', () => {
    render(
      <ComicsContext.Provider value={mockedContextState}>
        <ComicItem
          comic={mockedComics.comicsList[0]}
          handleClickItem={mockedHandleClickItem}
        />
      </ComicsContext.Provider>
    );

    const comicTitle = screen.getByText(mockedComics.comicsList[0].title);

    expect(comicTitle).not.toBe(undefined);
  });

  it('should call handleClickItem correctly ', async () => {
    render(
      <ComicsContext.Provider value={mockedContextState}>
        <ComicItem
          comic={mockedComics.comicsList[0]}
          handleClickItem={mockedHandleClickItem}
        />
      </ComicsContext.Provider>
    );

    const comicContainer = screen.getByTestId('comic-item-container');
    await userEvent.click(comicContainer);

    expect(mockedHandleClickItem).toBeCalledTimes(1);
  });
});
