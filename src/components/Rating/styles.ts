import styled from 'styled-components';
import star from '@/images/Star.svg';
import emptyStar from '@/images/Star(1).svg';
// import smallStar from '@/images/smallStar.svg';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;

  .star {
    width: 26px;
    height: 26px;
    background-image: url('${emptyStar.src}');
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  @media (max-width: 1150px) {
    .star {
      width: 20px;
      height: 20px;
      background-size: 20px 20px;
    }

    .star.selected {
    }
    gap: 24px;
  }
  
  .star.selected {
    background-image: url('${star.src}');
  }

  .star:hover {
    background-image: url('${star.src}');
  }

&.disabled {
  cursor: auto;
  pointer-events: none;
}
`;
