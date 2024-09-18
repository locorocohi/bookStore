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

  .delete-button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  `;
