import styled from 'styled-components';

export const ComicsDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;

export const ComicsDetailsContent = styled.main`
  padding: 1rem;
`;

export const TitleComic = styled.h1`
  font-size: 2rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;

  border-bottom: 2px solid ${(props) => props.theme['--primary']};

  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['--secondary-300']};
  }
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
