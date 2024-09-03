import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .info {
    display: flex;
    flex-direction: column;
  }

  .description {
    color: ${(p) => p.theme.colors.dark};
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
  }

  .description-content {
    ${(p) => p.theme.fonts.button}
    font-weight: 400;
    color: ${(p) => p.theme.colors.dark_blue};
  }

  .buttons-container{

  }
`;
