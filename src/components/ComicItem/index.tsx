import { Comic } from '../../@types/comics';
import { ComicImage, ComicImageContainer, ComicItemContainer } from './styles';

interface ComicItemProps {
  comic: Comic;
}

export function ComicItem({ comic }: ComicItemProps) {
  return (
    <ComicItemContainer>
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
