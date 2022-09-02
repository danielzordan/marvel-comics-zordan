/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import { ComicDetailsContent } from '../../../components/ComicDetailsContent';
import { ComicsContext } from '../../../contexts/ComicsContext';
import {
  mockedContextState,
  mockedComics,
  mockedComicsNullValues,
} from './__mocks__';

describe('Unit tests ComicDetailsContent component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly when have data in comic fields', () => {
    render(
      <ComicsContext.Provider value={mockedContextState}>
        <ComicDetailsContent comic={mockedComics.comicsList[0]} />
      </ComicsContext.Provider>
    );

    const comicDescription = screen.getByText(
      mockedComics.comicsList[0].description
    );
    const comicVariantDescription = screen.getByText(
      mockedComics.comicsList[0].variantDescription
    );

    expect(comicDescription).not.toBe(undefined);
    expect(comicVariantDescription).not.toBe(undefined);
  });

  it('should render correctly when have data in comic fields', () => {
    render(
      <ComicsContext.Provider value={mockedContextState}>
        <ComicDetailsContent comic={mockedComicsNullValues.comicsList[0]} />
      </ComicsContext.Provider>
    );

    const comicDescription = screen.getAllByText('Missing data');
    expect(comicDescription.length).not.toBe(0);
  });
});
