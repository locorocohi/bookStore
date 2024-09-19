import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  max-width: 1280px;
  max-height: 400px;
  height: 100%;

  padding: 0 108px;
  position: relative;
  margin-top: 30px;
  margin-bottom: 110px;

  display: flex;
  align-items: center;
  justify-content: space-between;

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
    width: 406px;
    height: 400px;
    align-self: flex-end;
  }

  .fairy-picture {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .castle-picture {
    align-self: flex-end;
    width: 521px;
    height: 462px;
  }

  .image-wrapper {
    overflow: hidden;
    position: absolute;
    inset: 0;
  }
`;
