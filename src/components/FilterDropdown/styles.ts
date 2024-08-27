import styled from 'styled-components';

export const Wrapper = styled.div`

  .primary {
    background-color: ${(p) => p.theme.colors.light};
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
    ${(p) => p.theme.fonts.filters};
    font-size: 18px;
    color: ${(p) => p.theme.colors.dark_blue};
  }

  .secondary .dropdown-title {
    color: ${(p) => p.theme.colors.dark};
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

    background-color: ${(p) => p.theme.colors.light};
    border-radius: 16px;
  }

  .triangle {
    position: absolute;
    top: -10px;
    pointer-events: none;

    width: 0; 
    height: 0; 
    border-left: 15px solid transparent;
    border-right: 15px solid transparent; 
    border-bottom: 15px solid ${(p) => p.theme.colors.light};
  }

`;
