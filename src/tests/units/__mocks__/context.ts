import { ComicsContextType } from '../../../contexts/ComicsContext';

export const mockedComics = {
  total: 90,
  comicsList: [
    {
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
    },
  ],
};

export const mockedComicsNullValues = {
  total: 90,
  comicsList: [
    {
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
    },
  ],
};

export const mockedRequestConfig = {
  offset: 0,
  limit: 30,
  ts: 1,
};

export const mockedContextState: ComicsContextType = {
  comics: mockedComics,
  requestConfig: mockedRequestConfig,
  handleClickNextPage: jest.fn(),
  handleClickNavigatePage: jest.fn(),
  handleClickPreviousPage: jest.fn(),
  handleSearch: jest.fn(),
  loadComic: jest.fn().mockImplementation(() => {
    return mockedComics.comicsList[0];
  }),
};
