import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;

  .title {
    ${(p) => p.theme.fonts.title}
    color: ${(p) => p.theme.colors.dark};
  }
`;
