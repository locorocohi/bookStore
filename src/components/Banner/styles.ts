import styled from 'styled-components';

export const Wrapper = styled.div`
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

  border-radius: 16px;
  overflow: hidden;
  background-color: #F0F4EF;

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
    color: #344966;
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
    right: 1%;
  }

  .castle-picture {
    align-self: flex-end;
  }
`;
