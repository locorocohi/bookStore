import styled from 'styled-components';

export const Wrapper = styled.div<{$pageType: string}>`
  position: absolute;
  opacity: 50%;
  transform: translate(45%, 45%);


  .button {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    pointer-events: auto;

    ${(p) => (p.$pageType === 'catalog'
    ? `width: 48px;
       height: 48px;`
    : `width: 59px;
       height: 59px;`)};

    background-color: ${(p) => p.theme.colors.dark_blue};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heart-wrapper {
    position: relative;
    ${(p) => (p.$pageType === 'catalog'
    ? `width: 26px;
       height: 26px;`
    : `width: 32px;
       height: 32px;`)};
  }

  &:hover {
    opacity: 100%;
  }

  @media (max-width: 1030px) {
    .button {
      ${(p) => (p.$pageType === 'catalog'
    ? `width: 38px;
       height: 38px;`
    : `width: 49px;
       height: 49px;`)};
    }

    .heart-wrapper {
      ${(p) => (p.$pageType === 'catalog'
    ? `width: 21px;
       height: 21px;`
    : `width: 30px;
       height: 30px;`)};
    }
  }

  @media (max-width: 570px) {
    .button{ 
      width: 25px;
      height: 25px;
    }

    .heart-wrapper {
      width: 13.5px;
      height: 13.5px;
    }
  }
`;
