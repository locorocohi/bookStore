import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: rgba(13, 24, 33, 1);
  padding: 73px 80px;
  width: 100%;
  display: flex;
  justify-content: center;

  .wrapper {
    display: flex;
    justify-content: space-between;
    color: white;
    width: 100%;
    max-width: 1280px;
    align-self: end;
  
    text-align: left;
    ${(p) => p.theme.fonts.main_content};
}
`;
