import styled from 'styled-components';
import star from '@/images/Star.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .info {
    display: flex;
    flex-direction: column;
    max-width: 630px;
    gap: 30px;
  }

  .title {
    ${(p) => p.theme.fonts.title}
    color: ${(p) => p.theme.colors.dark};
  }

  .rating-container {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .star-pic {
    width: 26px;
    height: 26px;
    background-image: url('${star.src}');
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  .star-wrapper {
    display: flex;
    gap: 13px;
    align-items: center;
    cursor: auto;
    pointer-events: none;
  }

  .hint {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .description {
    color: ${(p) => p.theme.colors.dark};
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
  }

  .description-content {
    ${(p) => p.theme.fonts.button}
    font-weight: 400;
    color: ${(p) => p.theme.colors.dark_blue};
    margin-top: 10px;
  }

  .buttons-container{
    margin-top: 44px;
    display: flex;
    gap: 82px
  }

  .button-label {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .rating {
    color: ${(p) => p.theme.colors.dark_grey};
    ${(p) => p.theme.fonts.button};
    font-weight: 400;
  }
`;
