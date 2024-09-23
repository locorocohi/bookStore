import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  padding: 60px 80px;
  justify-content: space-around;
  gap: 20px;

  .avatar {
    position: relative;
    min-width: 305px;
    height: 305px;
    border-radius: 16px;
    overflow: hidden;
  }

  .input-file {
      display: none;
  }

  .upload-button {
    position: absolute;
    width: 48px;
    height: 48px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    top: 85%;
    left: 85%;
    transform: translate(-50%, -50%);
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
    ${(p) => p.theme.fonts.main_content};
  }

  .profile-title-button{
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

  .input-row {
    font-size: 16px;
    line-height: 28px;
    color: rgba(52, 73, 102, 1);
  }

  .clear {
    display: none;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .info-wrapper span {
    color: ${(p) => p.theme.colors.dark_blue};
  }

  @media (max-width: 1130px) {
    padding: 60px 15px 100px;
  }
  
  @media (max-width: 880px) {
    .avatar {
      min-width: 255px;
      height: 255px;
    }
  }

  @media (max-width: 660px) {
    padding: 30px 15px 100px;
    flex-direction: column;
    gap: 30px;

    .avatar {
      width: 290px;
      height: 290px;
    }
  }
`;
