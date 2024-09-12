import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px 80px 110px;

  .total {
    font-size: 36px;
    line-height: 54px;
    font-weight: 600;
    margin-top: 10px;
  }

  .total-price {
    font-weight: 700;
  }

  .separator {
    height: 2px;
    border: 0;
    background-color: ${(p) => p.theme.colors.light_grey};
  }

  .buttons-container {
    display: flex;
    gap: 20px;
    margin-top: -10px;
  }

  .secondary-button {
    background-color: transparent;
    text-decoration: none;
    color: ${(p) => p.theme.colors.dark};
    border: none;
    border-radius: 16px;

    outline: 1px solid ${(p) => p.theme.colors.dark};
    outline-offset:-1px;

    padding: 10px 50px;
    text-align: center;
    ${(p) => p.theme.fonts.button};
  }

  .secondary-button:hover {
    outline: 3px solid ${(p) => p.theme.colors.dark};
    outline-offset:-3px;
  }
`;
