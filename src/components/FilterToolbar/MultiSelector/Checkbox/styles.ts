import styled from 'styled-components';

export const Wrapper = styled.div`
  
  width: 100%;

  .hidden-checkbox {
    display: none;
  }

  .checkbox {
    width: 24px;
    height: 24px;
  }

  &:hover .checkbox {
    border-radius: 50%;
    box-shadow: 0px 0px 0px 8px rgba(185, 186, 195, 0.5);
  }

  label {
    display: flex;
    gap: 10px;
    align-items: center;

    cursor: pointer;
  }
`;
