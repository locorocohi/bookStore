import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(p) => p.theme.colors.dark_blue};
  color: ${(p) => p.theme.colors.white};
  border: none;
  border-radius: 16px;
  padding: 10px 50px;

  ${(p) => p.theme.fonts.button};

  &:hover{
    background-color: ${(p) => p.theme.colors.dark};
  }

  &:active {
    box-shadow: 0px 0px 0px 8px rgba(185, 186, 195, 0.5);
  }
  
  &:disabled {
    background-color: ${(p) => p.theme.colors.dark_grey};
    color: ${(p) => p.theme.colors.light};
    cursor: auto;
  }

  cursor: pointer;
`;
