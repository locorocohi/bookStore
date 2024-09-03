import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  
  form {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;

    .button {
    align-self: flex-start;
    }
  
    p {
      ${(p) => p.theme.fonts.form_hint};
      text-align: left;
      color: rgba(52, 73, 102, 1);
      padding-top: 9px;
      cursor: inherit;
    }
  
    h1 {
      ${(p) => p.theme.fonts.title};
      text-align: left;
    }
    }

  .access {
    .input-row {
      outline: 2px solid #00BA88;
      outline-offset:-2px;
    }
    .clear {
      color: #00BA88;
    }
  }

  .access + .hint {
      color: #00966D;
      cursor: inherit
    }

  .denied {
    .input-row {
      outline: 2px solid #ED2E7E;
      outline-offset:-2px;
    }
    .clear {
      color: #ED2E7E;
    }
  }

  .denied + .hint {
      color: #C30052;
      cursor: inherit
    }
`;
