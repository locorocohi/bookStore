import styled from 'styled-components';

export const Wrapper = styled.div`

  .primary {
    background-color: #F0F4EF;
    border-radius: 16px;
  }

  .secondary {
    background-color: transparent;
  }

  .selected-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;

    width: 196px;
    height: 48px;
    padding: 10px 8px 10px 15px;

    cursor: pointer;
  }

  .dropdown-title {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #344966;
  }

  .secondary .dropdown-title {
    color: #0D1821;
  }
  
  .arrow {
    transform: rotate(0deg);
    transition: transform 200ms ease;
  }
  
  .arrow.rotate {
    transform: rotate(-90deg);
  }

  .list {
    display: block;
    position: absolute; 
    background: white; 
    list-style-type: none; 
    max-width: 305px;
    width: 100%;
    padding: 15px;
    margin-top: 16px;
    cursor: auto;

    background-color: #F0F4EF;
    border-radius: 16px;
  }

  .triangle {
    position: absolute;
    top: -10px;
    pointer-events: none;
  }

`;
