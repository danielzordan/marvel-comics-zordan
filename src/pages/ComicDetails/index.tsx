import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { Comic } from '../../@types/comics';
import { ComicsContext } from '../../contexts/ComicsContext';
import {
  ComicImage,
  ComebackButton,
  ComicImageContainer,
  ComicsDetailsContainer,
  ComicsDetailsContent,
  TitleComic,
  ImagesContainer,
  SubsectionTitle,
} from './styles';
import { CoverModal } from '../../components/CoverModal';
import { ComicDetailsContent } from '../../components/ComicDetailsContent';

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
          <ComebackButton
            type="button"
            onClick={() => navigate(-1)}
            data-testid="comic-details-comeback-button"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </ComebackButton>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <TitleComic>{comic.title}</TitleComic>
            </Dialog.Trigger>

            <CoverModal
              imagePath={`${comic.thumbnail.path}/detail.${comic.thumbnail.extension}`}
              imageAlt={`Image of ${comic.title}`}
            />
          </Dialog.Root>

          <ComicDetailsContent comic={comic} />

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
        <h1>Loading...</h1>
      )}
    </ComicsDetailsContainer>
  );
}
