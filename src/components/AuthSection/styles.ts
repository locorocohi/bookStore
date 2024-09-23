import styled from 'styled-components';

export const StyledSection = styled.section`
display: flex;
padding: 80px;
align-items: center;
gap: 20px;
justify-content: space-between;

img {
  pointer-events: none;
}

.error-message {
  color: red
}

.man-picture {
  position: relative;
  width: 100%;
  max-width: 612px;
  min-width: 612px;
  height: 522px;
}

@media (max-width: 1130px) {
  padding: 80px 15px 104px;
  .man-picture {
    max-width: 390px;
    min-width: 390px;
    height: 333px;
  }
}

@media (max-width: 700px) {
   flex-direction: column;
   gap: 60px;
   padding: 10px 15px 70px;
}

@media (max-width: 450px) {
  .man-picture {
    max-width: 290px;
    min-width: 290px;
    height: 247px;
  }
}
`;
