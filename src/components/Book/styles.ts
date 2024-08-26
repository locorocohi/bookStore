import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 305px;

  .book-cover{
    margin-bottom: 30px;
  }

  .book-name {
    color: #344966
  }

  .author {
    color: #B9BAC3;
    margin-bottom: 20px;
  }
  
  .book-name,
  .author{
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
  }
`;
