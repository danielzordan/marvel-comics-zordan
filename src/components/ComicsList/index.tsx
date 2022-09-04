import { createSearchParams, useNavigate } from 'react-router-dom';
import { Comic } from '../../@types/comics';
import { ComicsDataType } from '../../contexts/ComicsContext';
import { ComicItem } from '../ComicItem';
import { ComicsListContainer } from './styles';

interface ComicsListProps {
  comics: ComicsDataType;
}

export function ComicsList({ comics }: ComicsListProps) {
  const navigate = useNavigate();

  console.log(comics);

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

  return comics.total ? (
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
  );
}
