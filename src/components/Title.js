import styled from 'styled-components';

export const DefaultTitle = styled.div`
  h1 {
    color: var(--bg);
    font-size: 35px;
    text-transform: uppercase;
  }
  @media (max-width: 415px) {
    h1 {
      font-size: 25px;
    }
  }
`;
