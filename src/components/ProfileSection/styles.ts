import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  padding: 60px 80px;
  grid-template-columns: 1.5fr 2fr 1fr;

  .avatar {
    position: relative;
    width: 305px;
    height: 305px;
    border-radius: 16px;
  }

  .button {
    position: absolute;
    width: 48px;
    height: 48px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    top: 405px;
    left: 325px;
    }

  .profile-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 522px;
    gap: 40px;
  }

  .profile-title{
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }

  .profile-title h3{
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }

  .profile-title button{
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-decoration: underline;
    text-align: center;
    color: rgba(141, 159, 79, 1);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .profile-personal, .profile-password{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
