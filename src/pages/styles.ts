import styled from 'styled-components';

export const Catalog = styled.section`
  padding: 0 80px;
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    z-index: 100;
  }

  .title {
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
    text-align: left;
    padding-bottom: 10px;
  }

  .text {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
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

  .main.title {
    color: ${(p) => p.theme.colors.dark};
  }

  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
`;
