import styled from 'styled-components';

const StyledButton = styled.button`
background-color: #344966;
color: white;
border: none;
border-radius: 16px;
padding: 10px 50px;

font-size: 16px;
font-weight: 500;
line-height: 24px;

cursor: pointer;
`;

export default function Button() {
  return <StyledButton>Value</StyledButton>;
}
