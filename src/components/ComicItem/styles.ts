import styled from 'styled-components';

export const ComicItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1rem;

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

export const ComicImageContainer = styled.div`
  display: block;
  width: 100%;
  height: 70%;
  margin-bottom: 1rem;
`;

export const ComicImage = styled.img`
  max-width: 100%;
  max-height: 100%;

  width: auto;
  height: auto;
`;
