import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.5);
`;

export const ThumbnailContent = styled(Dialog.Content)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme['--secondary']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ComicsDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ComicsDetailsContent = styled.main`
  padding: 1rem;
`;

export const TitleComic = styled.h1`
  font-size: 2rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;

  border-bottom: 2px solid ${(props) => props.theme['--primary']};
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['--primary']};
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin-bottom: 1rem;

  min-height: 8rem;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['--primary']};
  * + h3 {
    margin-top: 1rem;
  }
`;

export const CitationsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 8rem;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['--primary']};

  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1rem;
  }
`;

export const CitationItem = styled.div`
  margin-top: 1rem;
  ul {
    margin-left: 1rem;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const SubsectionTitle = styled.h3`
  font-size: 1.25rem;
  border-bottom: 2px solid ${(props) => props.theme['--primary']};
  margin-bottom: 0.5rem;
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  row-gap: 1rem;
  column-gap: 1rem;
  margin-top: 1rem;
`;

export const ComicImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const ComicImage = styled.img`
  max-width: 100%;
  max-height: 100%;

  width: auto;
  height: auto;
`;

export const ComicThumbnail = styled.div`
  width: 100%;
  height: 100%;
`;

export const ComebackButton = styled.button`
  width: 5rem;
  height: 3rem;
  border-radius: 4px;
  border: 0;
  margin-bottom: 1rem;

  cursor: pointer;

  background: ${(props) => props.theme['--secondary']};
  color: ${(props) => props.theme['--secondary-900']};

  transition: 0.1s;

  &:hover {
    background: ${(props) => props.theme['--secondary-700']};
  }
`;
