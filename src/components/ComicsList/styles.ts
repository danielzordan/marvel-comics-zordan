import styled from 'styled-components';

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
