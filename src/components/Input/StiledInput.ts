import styled from 'styled-components';

export const Wrapper = styled.div`
input::placeholder{
  color: #B9BAC3;
}

position: relative;

.icon-wrapper {
  position: absolute;
  top: 30%;
  left: 25px;
  pointer-events: none;
}

.input-row {
  width: 100%;
  height: 64px;
  background-color: rgba(240, 244, 239, 1);
  border: none;
  border-radius: 16px;
  padding-left: 70px;
  padding-right: 1rem;
  
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.75px;
}
`;
