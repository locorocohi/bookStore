import styled from 'styled-components';
import star from '@/images/Star.svg';
import emptyStar from '@/images/Star(1).svg';

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
