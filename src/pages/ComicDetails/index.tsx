import { faArrowLeft, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { Comic } from '../../@types/comics';
import { ComicsContext } from '../../contexts/ComicsContext';
import {
  CitationsContainer,
  SubsectionTitle,
  ComicImage,
  ComebackButton,
  ComicImageContainer,
  ComicsDetailsContainer,
  ComicsDetailsContent,
  Description,
  ImagesContainer,
  InfoBox,
  TitleComic,
  CitationItem,
  ComicThumbnail,
  Overlay,
  ThumbnailContent,
} from './styles';

interface LocationStateType {
  comic: Comic;
}

export function ComicDetails() {
  const { loadComic } = useContext(ComicsContext);
  const [comic, setComic] = useState<Comic>();
  const navigate = useNavigate();

  const location = useLocation();
  const state = location.state as LocationStateType;

  const getComic = useCallback(
    async (comicId: string | null) => {
      const comicResult = await loadComic(comicId);
      setComic(comicResult);
    },
    [loadComic]
  );

  useEffect(() => {
    if (!state || !state.comic) {
      const urlParams = new URLSearchParams(location.search);
      const comicId = urlParams.get('comicId');
      getComic(comicId);
    }
  }, [getComic, location.search, state]);

  return (
    <ComicsDetailsContainer>
      {comic ? (
        <ComicsDetailsContent>
          <ComebackButton type="button" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </ComebackButton>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <TitleComic>{comic.title}</TitleComic>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Close>
                <FontAwesomeIcon icon={faClose} />
              </Dialog.Close>
              <Overlay />
              <ThumbnailContent>
                <ComicThumbnail
                  src={`${comic.thumbnail.path}/detail.${comic.thumbnail.extension}`}
                  alt={`Image of ${comic.title}`}
                />
              </ThumbnailContent>
            </Dialog.Portal>
          </Dialog.Root>

          <InfoBox>
            <span>Format: {comic.format}</span>
            <span>Pages: {comic.pageCount || 'missing data'}</span>
          </InfoBox>

          <Description>
            <SubsectionTitle>Description</SubsectionTitle>
            {comic.description ? (
              <p>{comic.description}</p>
            ) : (
              <span>Missing data</span>
            )}

            <SubsectionTitle>Variant Description</SubsectionTitle>
            {comic.variantDescription ? (
              <p>{comic.variantDescription}</p>
            ) : (
              <span>Missing data</span>
            )}
          </Description>

          <CitationsContainer>
            <CitationItem>
              <SubsectionTitle>Characters</SubsectionTitle>
              <ul>
                {comic.characters.items.map((character) => (
                  <li>{character.name}</li>
                ))}
              </ul>
            </CitationItem>

            <CitationItem>
              <SubsectionTitle>Creators</SubsectionTitle>
              <ul>
                {comic.creators.items.map((character) => (
                  <li>{character.name}</li>
                ))}
              </ul>
            </CitationItem>
          </CitationsContainer>

          <SubsectionTitle>Images</SubsectionTitle>
          <ImagesContainer>
            {comic.images.map((image) => (
              <ComicImageContainer>
                <ComicImage
                  src={`${image.path}/detail.${image.extension}`}
                  alt={`Image of ${comic.title}`}
                />
              </ComicImageContainer>
            ))}
          </ImagesContainer>
        </ComicsDetailsContent>
      ) : (
        <h1>Carregando...</h1>
      )}
    </ComicsDetailsContainer>
  );
}
