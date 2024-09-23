import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1030px) {
    flex-wrap: wrap;
  }

  @media (max-width: 570px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;
