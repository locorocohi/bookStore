import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .comment-area {
    width: 100%;
    min-height: 128px;
    background-color: ${(p) => p.theme.colors.light};
    border: none;
    border-radius: 16px;
    resize: none;
    padding: 20px 24px;
    ${(p) => p.theme.fonts.filters}
    color: #14142B;
  }

  .comment-area::placeholder {
    color: ${(p) => p.theme.colors.dark_grey};
  }

  .comment-area:active,
  .comment-area:focus  {
    background-color: #FFFFFF;
    outline: 2px solid ${(p) => p.theme.colors.dark};
    outline-offset:-2px;
    color: #14142B;
  }

  .comment-button {
    align-self: flex-start;
  }
`;
