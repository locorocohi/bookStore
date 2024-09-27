import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 738px;
  width: 100%;

  .title {
    ${(p) => p.theme.fonts.title}
    color: ${(p) => p.theme.colors.dark};
  }

  @media (max-width: 570px) {
    .title {
      display: none;
    }
  }
`;
