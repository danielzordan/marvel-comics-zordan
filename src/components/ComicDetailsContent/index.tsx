import { Comic } from '../../@types/comics';
import {
  CitationsContainer,
  CitationItem,
  Description,
  FormatInfoBox,
  SectionTitle,
} from './styles';

interface ComicDetailsContentProps {
  comic: Comic;
}

export function ComicDetailsContent({ comic }: ComicDetailsContentProps) {
  return (
    <>
      <FormatInfoBox>
        <span>Format: {comic.format}</span>
        <span>Pages: {comic.pageCount || 'missing data'}</span>
      </FormatInfoBox>

      <Description>
        <SectionTitle>Description</SectionTitle>
        {comic.description ? (
          <p>{comic.description}</p>
        ) : (
          <span>Missing data</span>
        )}

        <SectionTitle>Variant Description</SectionTitle>
        {comic.variantDescription ? (
          <p>{comic.variantDescription}</p>
        ) : (
          <span>Missing data</span>
        )}
      </Description>

      <CitationsContainer>
        <CitationItem>
          <SectionTitle>Characters</SectionTitle>
          <ul>
            {comic.characters.items.map((character) => (
              <li key={character.resourceURI}>{character.name}</li>
            ))}
          </ul>
        </CitationItem>

        <CitationItem>
          <SectionTitle>Creators</SectionTitle>
          <ul>
            {comic.creators.items.map((character) => (
              <li key={character.resourceURI}>{character.name}</li>
            ))}
          </ul>
        </CitationItem>
      </CitationsContainer>
    </>
  );
}
