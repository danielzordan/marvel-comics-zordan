import styled from 'styled-components';

export const ComicsContainer = styled.main`
  flex: 1;
  min-height: 80vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ComicsListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    row-gap: 1rem;
    column-gap: 1rem;
    flex-direction: row;
    justify-items: center;
  }
`;

export const SearchFormContainer = styled.form`
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
  height: 3rem;
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

export const SearchFormButton = styled.button`
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

  background: ${(props) => props.theme['--secondary']};
  color: ${(props) => props.theme['--secondary-900']};

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

export const PaginationFormContainer = styled.div`
  width: 100%;
  height: 2.5rem;

  margin-top: 2rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  font-size: 1.125rem;
  font-weight: bold;

  button {
    width: 2rem;
    height: 1.5rem;
    background: ${(props) => props.theme['--secondary']};
    color: ${(props) => props.theme['--secondary-900']};
    border: 0;
    border-radius: 4px;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    transition: 0.1s;

    &:not(:disabled):hover {
      background: ${(props) => props.theme['--secondary-700']};
    }
  }

  span {
    margin: 0 1rem;
  }
`;
