import styled from 'styled-components';
import star from '@/images/Star.svg';
import emptyStar from '@/images/Star(1).svg';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;

  .rating {
    color: #B9BAC3;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  .star {
    width: 26px;
    height: 26px;
    background-image: url('${emptyStar.src}');
    cursor: pointer;
  }

  .star.selected {
    background-image: url('${star.src}');
  }

  .star:hover {
    background-image: url('${star.src}');
  }
`;
