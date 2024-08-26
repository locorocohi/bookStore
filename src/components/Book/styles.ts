import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 305px;

  .book-cover{
    margin-bottom: 30px;
  }

  .book-name {
    color: ${(p) => p.theme.colors.dark_blue}
  }

  .author {
    color: ${(p) => p.theme.colors.dark_grey};
    margin-bottom: 20px;
  }
  
  .book-name,
  .author{
    ${(p) => p.theme.fonts.main_content};
  }
`;
