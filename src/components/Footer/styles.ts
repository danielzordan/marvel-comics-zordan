import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 5rem;
  padding: 2rem;
  display: flex;
  justify-content: center;

  background: ${(props) => props.theme['--primary']};
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 80rem;
`;
