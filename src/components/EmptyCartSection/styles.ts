import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 108px;
  gap: 40px;
  flex-wrap: wrap-reverse;
  
  .image-wrapper {
    position: relative;
    width: 433px;
    height: 261px;
  }

  .content {
    max-width: 465px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;

    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: ${(p) => p.theme.colors.dark_blue};
  }

  .title {
    ${(p) => p.theme.fonts.title}
    color: ${(p) => p.theme.colors.dark};
  }

  .redirect-button {
    align-self: flex-start;
    text-decoration:none;
    background-color: #344966;
    color: white;
    border: none;
    border-radius: 16px;
    padding: 10px 50px;
    margin-top: 40px;

    ${(p) => p.theme.fonts.button}
    font-weight: 500;

    cursor: pointer;
  }

  @media (max-width: 1130px) {
    padding: 100px 15px 108px;

    .image-wrapper {
      width: 350px;
      height: 212px;
  }
  }

  @media (max-width: 830px) {
    .image-wrapper {
      width: 290px;
      height: 176px;
  }
  }

  @media (max-width: 770px) {
    padding-top: 30px;

    .redirect-button {
      min-width: 290px;
      text-align: center;
    }
  }

  @media (max-width: 570px) {
    .content {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
    }
  }
`;
