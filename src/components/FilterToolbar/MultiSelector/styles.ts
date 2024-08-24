import styled from 'styled-components';

export const Wrapper = styled.div`
  cursor: pointer;

  .element {
    display: flex;
    gap: 10px;
    cursor: auto;

    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #344966;
  }

  .hidden-checkbox {
    display: none;
  }

  .element > label {
    display: flex;
    gap: 10px;
    align-items: center;

    cursor: pointer;
  }

  .checkbox {
    width: 24px;
    height: 24px;
  }
`;
