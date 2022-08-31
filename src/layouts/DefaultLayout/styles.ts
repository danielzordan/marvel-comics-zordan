import styled from 'styled-components';

export const LayoutContainer = styled.div``;

export const Content = styled.main`
  margin: 0 auto;
  padding: 0.5rem;

  max-width: 80rem;

  background: ${(props) => props.theme['--grey-800']};
`;
