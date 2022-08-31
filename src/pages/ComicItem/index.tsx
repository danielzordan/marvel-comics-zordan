import { ComicImage, ComicImageContainer, ComicItemContainer } from './styles';

interface ComicItemProps {
  image: string;
  title: string;
}

export function ComicItem({ title, image }: ComicItemProps) {
  return (
    <ComicItemContainer>
      <ComicImageContainer>
        <ComicImage src={image} alt="" />
      </ComicImageContainer>
      <h2>{title}</h2>
    </ComicItemContainer>
  );
}
