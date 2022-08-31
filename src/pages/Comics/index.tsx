import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import { ComicItem } from '../ComicItem';
import {
  ComicsContainer,
  ComicsListContainer,
  PaginationFormContainer,
  SearchFormButton,
  SearchFormContainer,
  SearchFormInput,
} from './styles';

export function Comics() {
  const [comics, setComics] = useState([]);

  async function loadComics() {
    const response = await fetch(
      'https://gateway.marvel.com/v1/public/comics?limit=30&offset=30&ts=1&apikey=cd9f147c64cd174b64792d0914f2917d&hash=e9b5767664ccb44fc297036cdcbf8035'
    );

    const { data } = await response.json();

    console.log(data);
    setComics(data.results);
  }

  useEffect(() => {
    loadComics();
  }, []);

  return (
    <ComicsContainer>
      <SearchFormContainer>
        <SearchFormInput
          type="text"
          placeholder="Comic name"
          id="comicNameSearch"
        />
        <SearchFormButton type="submit">
          <FontAwesomeIcon icon={faSearch} />
          Search
        </SearchFormButton>
      </SearchFormContainer>

      <ComicsListContainer>
        {comics.map((comic) => (
          <ComicItem
            key={comic.id}
            title={comic.title}
            image={`${comic.thumbnail.path}/detail.${comic.thumbnail.extension}`}
          />
        ))}
      </ComicsListContainer>

      <PaginationFormContainer>
        <form>
          <button type="submit">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span>1</span>
          <button type="submit">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </PaginationFormContainer>
    </ComicsContainer>
  );
}
