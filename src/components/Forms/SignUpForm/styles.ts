import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  form {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    max-width: 413px;

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
    box-shadow: 0 0 0 2px #00BA88;
  }
  .clear {
    color: #00BA88;
  }
  .hint {
    color: #00BA88;
    cursor: inherit
  }
}

.denied {
  .input-row {
    box-shadow: 0 0 0 2px #ED2E7E;
  }
  .clear {
    color: #ED2E7E;
  }
  .hint {
    color: #ED2E7E;
    cursor: inherit
  }
}
`;
