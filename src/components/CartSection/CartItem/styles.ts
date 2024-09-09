import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  .book-info {
    display: flex;
    flex-direction: column;
    gap: 50px;
    color: ${(p) => p.theme.colors.dark};
  }

  .title {
    ${(p) => p.theme.fonts.title}
  }

  .author {
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
  }

  .price {
    font-size: 36px;
    font-weight: 400;
    line-height: 54px;
  }

  .toolbar {
    display: flex;
    gap: 58px;
    align-items: center;
  }

  .counter {
    display: flex;
    gap: 17px;
    align-items: center;
  }

  .counter-button {
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: none;
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.light};
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0.75px;
  }
  .count {
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0.75px;
  }

  .delete-button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;
