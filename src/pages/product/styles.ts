import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  padding-top: 50px;

  gap: 110px;

  @media (max-width: 1130px) {
    padding: 0 15px;
    padding-top: 80px;
  }

  @media (max-width: 770px) {
    padding-top: 30px;
  }

  @media (max-width: 570px) {

  }
`;
