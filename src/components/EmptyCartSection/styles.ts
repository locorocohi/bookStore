import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 108px;
  height: calc(100vh - 98px - 344px);

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
`;
