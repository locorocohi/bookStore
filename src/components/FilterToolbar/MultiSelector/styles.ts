import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;

  .filters {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .element {
    display: flex;
    gap: 10px;
    cursor: auto;

    ${(p) => p.theme.fonts.filters};
    color: ${(p) => p.theme.colors.dark_blue};
  }

`;
