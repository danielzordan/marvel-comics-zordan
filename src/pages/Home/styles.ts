import styled, { css } from 'styled-components';

export const ComicsContainer = styled.main`
  flex: 1;
  min-height: 80vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SearchForm = styled.form`
  width: 100%;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchFormInput = styled.input`
  width: 100%;
  flex: 1;
  background: transparent;
  height: 3.22rem;
  border-radius: 4px;
  font-size: 1.125rem;
  padding: 0 0.5rem;

  margin-bottom: 0.5rem;
  color: ${(props) => props.theme['--secondary-100']};

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 0.5rem;
  }
`;

const SearchFormButtonBasic = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  transition: 0.1s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['--secondary-700']};
  }

  @media (min-width: 768px) {
    width: 10rem;
  }
`;

export const SearchFormButton = styled(SearchFormButtonBasic)`
  background: ${(props) => props.theme['--secondary']};
  color: ${(props) => props.theme['--secondary-900']};
`;

type FavoriteFormButtonProps = {
  isActive: boolean;
};

export const FavoriteFormButton = styled(SearchFormButtonBasic)`
  background: ${(props) => props.theme['--yellow-500']};
  color: ${(props) => props.theme['--secondary-900']};
  margin-bottom: 1rem;

  ${({ isActive }: FavoriteFormButtonProps) =>
    isActive
      ? css`
          background: transparent;
          color: ${(props) => props.theme['--yellow-500']};
          outline: 1px solid ${(props) => props.theme['--yellow-500']};
        `
      : ''};

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;
