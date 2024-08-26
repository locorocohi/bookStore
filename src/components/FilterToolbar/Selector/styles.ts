import styled from 'styled-components';

export const Wrapper = styled.div`
  .sorting {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .option {
    ${(p) => p.theme.fonts.filters};
    color: ${(p) => p.theme.colors.dark_grey};

    cursor: pointer;
  }

  .option.selected {
    color: ${(p) => p.theme.colors.dark_blue};
  }
`;
