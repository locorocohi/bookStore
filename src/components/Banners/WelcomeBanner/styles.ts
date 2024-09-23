import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  max-width: 1280px;
  max-height: 400px;
  height: 100%;

  position: relative;
  margin-top: 30px;
  margin-bottom: 110px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  align-self: center;

  border-radius: 16px;
  background-color: ${(p) => p.theme.colors.light};

  
  .content {
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    z-index: 100;
  }

  .title {
    ${(p) => p.theme.fonts.title};
    text-align: left;
    padding-bottom: 10px;
  }

  .text {
    ${(p) => p.theme.fonts.main_content};
    color: ${(p) => p.theme.colors.dark_blue};
  }

  .content .button {
    align-self: flex-start;
    margin-top: 50px;
  }

  .books-picture {
    position: absolute;

    width: 542px;
    height: 327px;

    left: 0;
    top: 25%;
    z-index: 0;
  }
  
  .girl-picture {
    position: relative;
    align-self: flex-end;
    width: 406px;
    height: 400px;
    z-index: 1000;
  }

  .image-wrapper {
    overflow: hidden;
    position: absolute;
    inset: 0;
  }

  @media (max-width: 1030px) {
    margin-bottom: 60px;
    max-width: 804px;
    max-height: 289px;

    .content {
      margin-left: 40px;
    }

    .girl-picture {
      width: 328px;
      height: 364px;
    }
  }

  @media (max-width: 570px) {
    padding-right: 20px;
    max-width: 290px;
    max-height: 505px;
    flex-direction: column;
    justify-content: space-between;

    .content {
      margin-top: 20px;
      margin-left: 20px;
      gap: 20px;
    }

    .girl-picture {
      width: 253px;
      height: 282px;
    }

    .title {
      padding: 0;
    }

    .content .button {
      margin-top: 0;
      margin-bottom: 55px;
      min-width: 200px;
    }
  }
`;
