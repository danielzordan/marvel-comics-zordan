import styled from 'styled-components';

export const CitationsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 8rem;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['--primary']};

  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  border-bottom: 2px solid ${(props) => props.theme['--primary']};
  margin-bottom: 0.5rem;
`;

export const CitationItem = styled.div`
  margin-top: 1rem;
  ul {
    margin-left: 1rem;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin-bottom: 1rem;

  min-height: 8rem;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['--primary']};
  * + h3 {
    margin-top: 1rem;
  }
`;

export const FormatInfoBox = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['--primary']};
`;
