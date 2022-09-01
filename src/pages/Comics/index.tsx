import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { FormEvent, useContext, useState } from 'react';
import { ComicItem } from '../../components/ComicItem';
import {
  ComicsContainer,
  ComicsListContainer,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './styles';
import { ComicsContext } from '../../contexts/ComicsContext';
import { Pagination } from '../../components/Pagination';

export function Comics() {
  const { comics, handleSearch } = useContext(ComicsContext);

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

      {comics.total ? (
        <ComicsListContainer>
          {comics.comicsList.map((comic) => (
            <ComicItem key={comic.id} comic={comic} />
          ))}
        </ComicsListContainer>
      ) : (
        <h1>Carregando...</h1>
      )}

      <Pagination />
    </ComicsContainer>
  );
}
