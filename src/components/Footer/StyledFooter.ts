import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: rgba(13, 24, 33, 1);
  padding: 73px 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: end;

  .wrapper {
    display: flex;
    justify-content: space-between;
    color: white;
    width: 100%;
    max-width: 1280px;
    align-self: end;

    text-align: left;
    ${(p) => p.theme.fonts.main_content};

    .link {
      display: block;
      text-decoration: none;
      color: ${(p) => p.theme.colors.white};
    }

    .link:visited {
      color: ${(p) => p.theme.colors.white};
    }

    .map-image {
      position: relative;
      width: 413px;
      height: 160px;
    }
  }

  @media (max-width: 1150px) {
    padding: 73px 15px;
    .wrapper {
      :nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .map-image {
        width: 392px;
      }
    }
  }
  
  @media (max-width: 780px) {
    .wrapper {
      justify-content: center;
      flex-wrap: wrap;
      gap: 40px;
    }
  }

  @media (max-width: 480px) {
    .wrapper {
      flex-direction: column;
      .map-image {
        width: 291px;
      }
    }
  }
`;
