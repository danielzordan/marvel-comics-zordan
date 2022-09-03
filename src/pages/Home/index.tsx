import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { createSearchParams, useNavigate } from 'react-router-dom';

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
import { Comic } from '../../@types/comics';

export function Home() {
  const { comics, handleSearch } = useContext(ComicsContext);
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');

  const handleClickComic = (comic: Comic) => {
    navigate(
      {
        pathname: 'details',
        search: `?${createSearchParams({
          comicId: String(comic.id),
        })}`,
      },
      {
        state: comic,
      }
    );
  };

  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();

    handleSearch(searchValue);
    setTimeout(setSearchValue, 1000, '');
  };

  return (
    <ComicsContainer>
      <SearchForm onSubmit={handleSubmitSearch} data-testid="home-search-form">
        <SearchFormInput
          data-testid="home-search-form-input"
          id="comicNameSearch"
          type="text"
          placeholder="Comic name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchFormButton type="submit" title="Search comics">
          <FontAwesomeIcon icon={faSearch} />
          Search
        </SearchFormButton>
      </SearchForm>

      {comics.total ? (
        <ComicsListContainer>
          {comics.comicsList.map((comic) => (
            <ComicItem
              key={comic.id}
              comic={comic}
              handleClickItem={handleClickComic}
            />
          ))}
        </ComicsListContainer>
      ) : (
        <h1>Loading...</h1>
      )}

      <Pagination />
    </ComicsContainer>
  );
}
