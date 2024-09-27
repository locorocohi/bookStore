import styled from 'styled-components';
import pageCircle from '@/images/pageCircle.svg';
import filledPageCircle from '@/images/filledPageCircle.svg';
import arrowPic from '@/images/blackForward.svg';

export const Wrapper = styled.div<{$isVisible: boolean}>`

  display: flex;
  flex-direction: column;
  
  .books {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 20px;
    row-gap: 80px;

    ${(p) => (!p.$isVisible ? 'margin-bottom: 92px;' : '')}
  }

  @media (max-width: 1150px) {
    .books {
      row-gap: 30px;
      column-gap: 12px;
    }
  }

  .pages-container {
    margin-top: 78px;
    margin-bottom: 92px;
    align-self: center;
    list-style: none;

    display: flex;
    align-items: center;
    gap: 30px;

    min-width: 268px;
    height: 24px;

    ${(p) => (!p.$isVisible ? 'display: none;' : '')}
  }

  .page {
    background-image: url('${pageCircle.src}');
    background-position: center;
    width: 20px;
    height: 20px;
  }

  .selected .page {
    background-image: url('${filledPageCircle.src}');
  }

  .previous-link, .next-link {
    display: block;
    background-image: url('${arrowPic.src}');
    width: 24px;
    height: 24px;
  }

  .previous-link{
    transform: rotate(180deg);
    margin-right: 20px;
  }
  .next-link {
    margin-left: 20px;
  }
  
  @media (max-width: 570px) {
    .pages-container {
      margin-top: 40px;
      margin-bottom: 70px;
      max-width: 268px;
      width: 100%;
      gap: 0;
      justify-content: space-between;
    }
  }
`;
