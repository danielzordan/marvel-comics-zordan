export type ImageType = {
  path: string;
  extension: string;
};

export type CreatorsItemsType = {
  resourceURI: string;
  name: string;
  role: string;
};

export type CreatorsType = {
  available: number;
  collectionURI: string;
  items: CreatorsItemsType[];
  returned: number;
};

export type CharactersItemsType = {
  resourceURI: string;
  name: string;
};

export type CharactersType = {
  available: number;
  collectionURI: string;
  items: CharactersItemsType[];
  returned: number;
};

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  description: string;
  variantDescription: string;
  format: string;
  pageCount: number;
  images: ImageType[];
  resourceURI: string;
  thumbnail: ImageType;
  creators: CreatorsType;
  characters: CharactersType;
}

export interface ComicsDataType {
  total: number;
  comicsList: Comic[];
}
