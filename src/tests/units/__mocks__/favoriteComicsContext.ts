import { FavoriteComicsContextType } from '../../../contexts/FavoriteComicsContext';

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

export const mockedFavoritedComics = {
  total: 90,
  comicsList: [{ ...mockedComic, title: 'favorited-1' }],
};

export const mockedFavoriteComicsContextState: FavoriteComicsContextType = {
  favoritedComics: mockedFavoritedComics,
  getStoragedFavoritedComics: jest.fn(),
  addFavoritedComics: jest.fn(),
  removeFavoritedComics: jest.fn(),
};

export const myMockUseFavorite = {
  isFavorite: jest.fn().mockImplementation(() => true),
  favoriteComic: jest.fn(),
  favoritedComics: mockedFavoritedComics,
};
