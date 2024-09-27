import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 110px;

  .recomendations-title {
    ${(p) => p.theme.fonts.title}
    color: ${(p) => p.theme.colors.dark};
  }

  .sample {
    display: flex;
    gap: 20px;
  }

  @media (max-width: 1130px) {
    margin-top: -100px;
  }

  @media (max-width: 1070px) {
    .sample div:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 570px) {
    margin-top: -50px;
  }

  @media (max-width: 450px) {
    .sample div:nth-child(3) {
      display: none;
    }
  }
`;
