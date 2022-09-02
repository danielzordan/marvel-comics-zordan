import { Comic } from '../../@types/comics';
import { ComicImage, ComicImageContainer, ComicItemContainer } from './styles';

interface ComicItemProps {
  comic: Comic;
  handleClickItem: (comicId: Comic) => void;
}

export function ComicItem({ comic, handleClickItem }: ComicItemProps) {
  const handleClick = () => {
    handleClickItem(comic);
  };

  return (
    <ComicItemContainer
      onClick={handleClick}
      data-testid="comic-item-container"
    >
      <ComicImageContainer>
        <ComicImage
          src={`${comic.thumbnail.path}/detail.${comic.thumbnail.extension}`}
          alt=""
        />
      </ComicImageContainer>
      <h2>{comic.title}</h2>
    </ComicItemContainer>
  );
}
