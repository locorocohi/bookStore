import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 413px;

  form {
    display: flex;
    flex-direction: column;
    gap: 50px;

    .button {
    align-self: flex-start;
    }
  
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.75px;
      text-align: left;
      color: rgba(52, 73, 102, 1);
      padding-top: 9px;
    }
  
    h1 {
      font-size: 40px;
      font-weight: 700;
      line-height: 60px;
      text-align: left;
    }
    }
`;
