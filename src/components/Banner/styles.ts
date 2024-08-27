import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  max-height: 400px;
  height: 100%;

  padding: 0 108px;
  position: relative;
  margin-top: 30px;
  margin-bottom: 110px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 16px;
  background-color: ${(p) => p.theme.colors.light};
`;
