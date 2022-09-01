import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
  padding: 1rem;

  display: flex;
  align-items: center;

  background: ${(props) => props.theme['--primary']};
`;
