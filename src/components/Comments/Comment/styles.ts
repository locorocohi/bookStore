import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 10px;
  background-color: ${(p) => p.theme.colors.light};
  padding: 30px 30px 25px;
  border-radius: 16px;

  display: flex;
  gap: 20px;

  .avatar-wrapper {
  }

  .comment-content {
    display: flex;
    flex-direction: column;
  }

  .name {
    ${(p) => p.theme.fonts.button};
    color: ${(p) => p.theme.colors.dark};
  }

  .creation-time {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.75px;
    color: ${(p) => p.theme.colors.dark_grey};
    margin: 4px 0 9px;
  }

  .comment-text {
    ${(p) => p.theme.fonts.button};
    font-weight: 400;
    color: ${(p) => p.theme.colors.dark_blue};
  }
`;
