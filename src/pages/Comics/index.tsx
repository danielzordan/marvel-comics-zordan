import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import { FormEvent, useContext, useState } from 'react';
import { ComicItem } from '../../components/ComicItem';
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

  const [searchValue, setSearchValue] = useState('');

  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();

    handleSearch(searchValue);
    setTimeout(setSearchValue, 1000, '');
  };

  return (
    <ComicsContainer>
      <SearchForm onSubmit={handleSubmitSearch}>
        <SearchFormInput
          type="text"
          placeholder="Comic name"
          id="comicNameSearch"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchFormButton type="submit">
          <FontAwesomeIcon icon={faSearch} />
          Search
        </SearchFormButton>
      </SearchForm>

      {comics ? (
        <ComicsListContainer>
          {comics.map((comic) => (
            <ComicItem key={comic.id} comic={comic} />
          ))}
        </ComicsListContainer>
      ) : (
        <h1>Carregando...</h1>
      )}

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
