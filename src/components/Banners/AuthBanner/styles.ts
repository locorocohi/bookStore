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

  .fairy-picture {
    position: absolute;
    top: -200px;
    right: 0;
    width: 478px;
    height: 759px;
  }
  
  .castle-picture {
    position: relative;
    align-self: flex-end;
    width: 521px;
    height: 462px;
  }

  .image-wrapper {
    overflow: hidden;
    position: absolute;
    inset: 0;
  }

  @media (max-width: 1030px) {
    padding: 0;
    margin-bottom: 60px;
    max-width: 803px;
    max-height: 400px;

    .content {
      margin-left: 40px;
    }

    .castle-picture {
      width: 389px;
      height: 345px;
    }

    .next-castle-picture {
      top: 20px;
    }

    .fairy-picture {
      position: absolute;
      top: -160px;
      right: 0;
      width: 377px;
      height: 599px;
    }
  }
`;
