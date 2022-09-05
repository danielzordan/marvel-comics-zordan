import { ComicsContextType } from '../../../contexts/ComicsContext';

const mockedComic = {
  id: 1,
  digitalId: 1,
  title: 'comic title',
  description: 'description',
  variantDescription: 'variantDescription',
  format: 'format',
  pageCount: 1,
  images: [
    {
      path: 'path',
      extension: 'extension',
    },
  ],
  resourceURI: 'string',
  thumbnail: {
    path: 'path',
    extension: 'extension',
  },
  creators: {
    available: 1,
    collectionURI: 'collectionURI',
    items: [
      {
        resourceURI: 'resourceURI',
        name: 'name',
        role: 'role',
      },
    ],
    returned: 1,
  },
  characters: {
    available: 1,
    collectionURI: 'collectionURI',
    items: [
      {
        resourceURI: 'resourceURI',
        name: 'name',
      },
    ],
    returned: 1,
  },
};

const mockedNullComic = {
  id: 1,
  digitalId: 1,
  title: 'comic title',
  description: '',
  variantDescription: '',
  format: '',
  pageCount: 0,
  images: [],
  resourceURI: '',
  thumbnail: {
    path: 'path',
    extension: 'extension',
  },
  creators: {
    available: 1,
    collectionURI: 'string',
    items: [],
    returned: 1,
  },
  characters: {
    available: 1,
    collectionURI: 'string',
    items: [],
    returned: 1,
  },
};

export const mockedComics = {
  total: 90,
  comicsList: [mockedComic, { ...mockedComic, id: 2, title: 'title2' }],
};

export const mockedFavoritedComics = {
  total: 90,
  comicsList: [{ ...mockedComic, title: 'favorited-1' }],
};

export const mockedComicsNullValues = {
  total: 90,
  comicsList: [mockedNullComic],
};

export const mockedRequestConfig = {
  offset: 0,
  limit: 30,
  ts: 1,
};

export const mockedContextState: ComicsContextType = {
  comics: mockedComics,
  favoritedComics: mockedFavoritedComics,
  requestConfig: mockedRequestConfig,
  isLoadingComics: false,
  handleClickNextPage: jest.fn(),
  handleClickNavigatePage: jest.fn(),
  handleClickPreviousPage: jest.fn(),
  getStoragedFavoritedComics: jest.fn(),
  addFavoritedComics: jest.fn(),
  removeFavoritedComics: jest.fn(),
  handleSearch: jest.fn(),
  loadComic: jest.fn().mockImplementation(() => {
    return mockedComics.comicsList[0];
  }),
};
