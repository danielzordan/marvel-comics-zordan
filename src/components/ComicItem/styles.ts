import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ComicItemContainer = styled.div`
  margin-top: 1rem;
  position: relative;
  text-align: center;

  width: 90%;
  height: 35rem;

  border: 2px solid;
  border-color: ${(props) => props.theme['--primary']};
  border-radius: 4px;

  background: ${(props) => props.theme['--grey-900']};

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme['--secondary']};
  }
`;

export const ComicItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 35rem;
  transition: 0.2s;
`;

export const ComicImageContainer = styled.div`
  display: block;
  width: 100%;
  height: 70%;
  margin-bottom: 1rem;
`;

export const ComicImage = styled(LazyLoadImage)`
  max-width: 100%;
  max-height: 100%;
`;

export const FavoriteButtonContainer = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
`;
