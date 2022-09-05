import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ComicsContext } from '../../contexts/ComicsContext';
import {
  ListButtons,
  PaginationFormContainer,
  ParginationButton,
} from './styles';

const MAX_LEFT = 4;
const MAX_ITEMS = 9;

interface PaginationProps {
  totalComics: number;
}

export function Pagination({ totalComics }: PaginationProps) {
  const {
    requestConfig,
    handleClickNextPage,
    handleClickNavigatePage,
    handleClickPreviousPage,
  } = useContext(ComicsContext);

  const currentPage = requestConfig.offset
    ? requestConfig.offset / requestConfig.limit + 1
    : 1;

  const numberOfPages = Math.ceil(totalComics / requestConfig.limit);

  const firstPage = Math.max(currentPage - MAX_LEFT, 1);

  const buttonsArrayLength = Math.min(MAX_ITEMS, numberOfPages);

  return (
    <PaginationFormContainer>
      <ParginationButton
        type="button"
        onClick={handleClickPreviousPage}
        disabled={currentPage === 1}
        data-testid="pagination-button-previous-page"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </ParginationButton>
      <ListButtons>
        {Array.from({ length: buttonsArrayLength })
          .map((_, index) => index + firstPage)
          .map((page) => (
            <li key={page}>
              <ParginationButton
                type="button"
                onClick={() => handleClickNavigatePage(page - 1)}
                disabled={page === currentPage}
              >
                {page}
              </ParginationButton>
            </li>
          ))}
      </ListButtons>
      <ParginationButton
        type="button"
        onClick={handleClickNextPage}
        disabled={!totalComics || currentPage === numberOfPages}
        data-testid="pagination-button-next-page"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </ParginationButton>
    </PaginationFormContainer>
  );
}
