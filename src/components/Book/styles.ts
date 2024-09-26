import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 305px;
  
  .cover-container {
    position: relative;
    height: 448px; 
    width: 305px;
    margin-bottom: 30px;
  }

  
  .rating-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .rating {
    color: ${(p) => p.theme.colors.dark_grey};
    ${(p) => p.theme.fonts.button};
    font-weight: 400;
    cursor: auto;
    pointer-events: none;
  }
  
  .book-cover{
    margin-bottom: 30px;
  }

  .book-name {
    color: ${(p) => p.theme.colors.dark_blue};
  }

  .author {
    color: ${(p) => p.theme.colors.dark_grey};
    margin-bottom: 20px;
  }
  
  .product-link {
    text-decoration: none;
  }

  .book-name,
  .author{
    ${(p) => p.theme.fonts.main_content};
    white-space: nowrap;
    overflow: hidden;
  }

  .margin-top {
    margin-top: 30px;
  }

  .selected-item {
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
  
  .selected-item:hover {
    outline: 3px solid ${(p) => p.theme.colors.dark};
    outline-offset:-3px;
  }

  @media (max-width: 1130px) {
    max-width: 254px;

    .cover-container {
      height: 372px;
      width: 254px;
    }

    .margin-top {
      margin-top: 20px;
    }
  }
  
  @media (max-width: 570px) {
    max-width: 135px;

    .cover-container {
      width: 135px;
      height: 192px;
      margin-bottom: 15px;
    }
    .rating-container {
      margin-top: -10px;
    }
    .margin-top {
      margin-top: 15px;
    }
  }
`;
