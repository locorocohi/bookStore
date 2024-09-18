import styled from 'styled-components';

export const Wrapper = styled.div<{pageType: string}>`
  position: absolute;
  opacity: 50%;
  ${(p) => (p.pageType === 'catalog'
    ? `top: 20px;
       left: 20px;`
    : `top: 30px;
       right: 30px;`)};

  .button {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    pointer-events: auto;

    ${(p) => (p.pageType === 'catalog'
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


  &:hover {
    opacity: 100%;
  }
`;
