import { useEffect, useState } from 'react';
import { Comic } from '../../@types/comics';
import { useFavorite } from '../../hooks/useFavorite';
import { FavoriteButton } from '../FavoriteButton';
import {
  ComicImage,
  ComicImageContainer,
  ComicItemContainer,
  ComicItemContent,
  FavoriteButtonContainer,
} from './styles';

interface ComicItemProps {
  comic: Comic;
  handleClickItem: (comicId: Comic) => void;
}

export function ComicItem({ comic, handleClickItem }: ComicItemProps) {
  const { favoriteComic, isFavorite } = useFavorite();
  const [isFavoriteComic, setIsFavoritedComic] = useState(false);

  const comicThumnailUrl = `${comic.thumbnail.path}/detail.${comic.thumbnail.extension}`;
  const comicThumnailAlt = `Thumbnail of comic ${comic.title}`;

  const handleFavorite = () => {
    favoriteComic(comic);
  };

  useEffect(() => {
    setIsFavoritedComic(isFavorite(comic.id));
  }, [comic.id, isFavorite]);

  const handleClick = () => {
    handleClickItem(comic);
  };
  return (
    <ComicItemContainer>
      <FavoriteButtonContainer>
        <FavoriteButton
          isFavoriteComic={isFavoriteComic}
          handleFavoriteComic={handleFavorite}
        />
      </FavoriteButtonContainer>

      <ComicItemContent onClick={handleClick} data-testid="comic-item-content">
        <ComicImageContainer>
          <ComicImage
            src={comicThumnailUrl}
            alt={comicThumnailAlt}
            loading="lazy"
          />
        </ComicImageContainer>
        <h2>{comic.title}</h2>
      </ComicItemContent>
    </ComicItemContainer>
  );
}
