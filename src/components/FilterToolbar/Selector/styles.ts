import styled from 'styled-components';

export const Wrapper = styled.div`
  .sorting {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .option {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: ${(p) => p.theme.colors.dark_grey};

    cursor: pointer;
  }

  .option.selected {
    color: ${(p) => p.theme.colors.dark_blue};
  }
`;
