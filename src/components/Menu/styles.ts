import styled from 'styled-components';

export const Wrapper = styled.menu`
display: flex;
gap: 27px;

.button {
  background: transparent;
  padding: 0;
  margin: 0;
  pointer-events: auto;
  width: 48px;
  height: 48px;
  background-color: ${(p) => p.theme.colors.dark_blue};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
