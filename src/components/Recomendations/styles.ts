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
`;
