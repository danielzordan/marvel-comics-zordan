import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

import { FormEvent, useContext, useState } from 'react';
import {
  ComicsContainer,
  FavoriteFilterButton,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './styles';
import { ComicsContext } from '../../contexts/ComicsContext';
import { Pagination } from '../../components/Pagination';
import { ComicsList } from '../../components/ComicsList';
import { useFavorite } from '../../hooks/useFavorite';

export function Home() {
  const { comics, handleSearch, isLoadingComics } = useContext(ComicsContext);
  const { favoritedComics } = useFavorite();

  const [searchValue, setSearchValue] = useState('');
  const [isActiveFavoriteFilter, setIsActiveFavoriteFilter] = useState(false);

  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();

    handleSearch(searchValue);
    setTimeout(setSearchValue, 1000, '');
  };

  const handleFilterFavoriteComics = () => {
    setIsActiveFavoriteFilter(!isActiveFavoriteFilter);
  };

  return (
    <ComicsContainer>
      <SearchForm onSubmit={handleSubmitSearch} data-testid="home-search-form">
        <FavoriteFilterButton
          data-testid="home-favorite-filter-button"
          aria-label="Filter favorite comics"
          type="button"
          title="Search comics"
          onClick={handleFilterFavoriteComics}
          isActive={isActiveFavoriteFilter}
        >
          <FontAwesomeIcon icon={faFilter} />
          Favorites
        </FavoriteFilterButton>
        <SearchFormInput
          data-testid="home-search-form-input"
          id="comicNameSearch"
          type="text"
          placeholder="Comic name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchFormButton
          aria-label="Search comics by title"
          type="submit"
          title="Search comics"
          data-testid="home-search-form-button"
        >
          <FontAwesomeIcon icon={faSearch} />
          Search
        </SearchFormButton>
      </SearchForm>

      {isLoadingComics ? (
        <h2>Loading...</h2>
      ) : (
        <ComicsList
          comics={isActiveFavoriteFilter ? favoritedComics : comics}
        />
      )}

      <Pagination
        totalComics={
          isActiveFavoriteFilter ? favoritedComics.total : comics.total
        }
      />
    </ComicsContainer>
  );
}
