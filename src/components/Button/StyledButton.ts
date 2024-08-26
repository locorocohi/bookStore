import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(p) => p.theme.colors.dark_blue};
  color: ${(p) => p.theme.colors.white};
  border: none;
  border-radius: 16px;
  padding: 10px 50px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  &:hover{
    background-color: ${(p) => p.theme.colors.dark};
  }

  &:focus {
    box-shadow: 0px 0px 0px 8px rgba(185, 186, 195, 0.5);
  }
  
  cursor: pointer;
`;
