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
  max-height: 80vh;

  width: 90vw;
  height: auto;
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 2px solid ${(props) => props.theme['--secondary']};
  border-radius: 4px;
  background: ${(props) => props.theme['--secondary-700']};

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const ComicThumbnail = styled.img`
  display: block;
  width: 100%;
  max-height: 80vh;

  border-radius: 4px;

  @media (min-width: 768px) {
    width: auto;
    height: auto;
  }
`;

export const CloseDialogButton = styled(Dialog.Close)`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  border: 0;
  margin-bottom: 1rem;

  top: 1.5rem;
  right: 1.5rem;

  cursor: pointer;

  background: ${(props) => props.theme['--secondary']};
  color: ${(props) => props.theme['--secondary-900']};

  transition: 0.1s;

  &:hover {
    background: ${(props) => props.theme['--secondary-700']};
  }
`;
