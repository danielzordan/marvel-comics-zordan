import styled, { css } from 'styled-components';

type ButtonCssProps = { color: 'favorited' | 'unfavorited' };

const modifierFavoriteButton = {
  favorited: () => css`
    background: ${(props) => props.theme['--yellow-500']};
    color: ${(props) => props.theme['--yellow-700']};
  `,

  unfavorited: () => css`
    background: ${(props) => props.theme['--secondary']};
    color: ${(props) => props.theme['--secondary-700']};
  `,
};

export const FavoriteButtonComponent = styled.button`
  width: 3rem;
  height: 3rem;

  border-radius: 4px;
  border: 0;

  ${({ color }: ButtonCssProps) => modifierFavoriteButton[color]()}

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
