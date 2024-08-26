import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #344966;
  color: white;
  border: none;
  border-radius: 16px;
  padding: 10px 50px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  :hover{
    background-color: #0D1821;
  }

  :focus {
    box-shadow: 0px 0px 0px 8px rgba(185, 186, 195, 0.5);
  }
  
  cursor: pointer;
`;
