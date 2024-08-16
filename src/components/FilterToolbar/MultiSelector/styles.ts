import styled from 'styled-components';

export const Div = styled.div`
  cursor: pointer;

  .selected-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 196px;
    height: 48px;
    padding: 10px 8px 10px 15px;

    background-color: #F0F4EF;
    border-radius: 16px;
    margin-bottom: 16px;
  }

  .selected-row > span {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #344966;
  }
  
  .selected-row > .arrow {
    transform: rotate(-90deg)
  }

  .list {
    /* display: none;  */
    position: absolute; 
    background: white; 
    list-style-type: none; 
    width: 305px;
    max-width: 100%;
    padding: 15px;
    cursor: auto;

    background-color: #F0F4EF;
    border-radius: 16px;
  }

  .triangle {
    position: absolute;
    top: -10px;
    pointer-events: none;
  }

  .list.active { 
    display: block; 
  }

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

  .element > input {
    /* display: none; */
  }
  
  input:checked {

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
