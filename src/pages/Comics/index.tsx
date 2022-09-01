import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { ComicItem } from '../ComicItem';
import {
  ComicsContainer,
  ComicsListContainer,
  PaginationFormContainer,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './styles';
import { ComicsContext } from '../../contexts/ComicsContext';

export function Comics() {
  const {
    comics,
    handleSearch,
    requestConfig,
    handleClickNextPage,
    handleClickPreviousPage,
  } = useContext(ComicsContext);

  return (
    <ComicsContainer>
      <SearchForm onSubmit={handleSearch}>
        <SearchFormInput
          type="text"
          placeholder="Comic name"
          id="comicNameSearch"
        />
        <SearchFormButton type="submit">
          <FontAwesomeIcon icon={faSearch} />
          Search
        </SearchFormButton>
      </SearchForm>

      <ComicsListContainer>
        {comics &&
          comics.map((comic) => <ComicItem key={comic.id} comic={comic} />)}
      </ComicsListContainer>

      <PaginationFormContainer>
        <button type="button" onClick={handleClickPreviousPage}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <span>{requestConfig.offset / requestConfig.limit + 1}</span>
        <button type="button" onClick={handleClickNextPage}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </PaginationFormContainer>
    </ComicsContainer>
  );
}
