import styled from 'styled-components';

export const PaginationFormContainer = styled.div`
  width: 100%;
  height: 3.5rem;

  margin-top: 2rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  font-size: 1.125rem;
  font-weight: bold;

  span {
    margin: 0 1rem;
  }
`;

export const ParginationButton = styled.button`
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.theme['--secondary']};
  color: ${(props) => props.theme['--secondary-900']};
  border: 0;
  border-radius: 4px;

  cursor: pointer;

  &:disabled {
    border: 1px solid ${(props) => props.theme['--secondary']};
    background: transparent;
    font-weight: bold;
    color: ${(props) => props.theme['--secondary']};
    cursor: default;
  }

  transition: 0.1s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['--secondary-700']};
  }

  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

export const ListButtons = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin-left: 0.5rem;
  }
`;
