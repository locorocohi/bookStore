import styled from 'styled-components';
import star from '@/images/Star.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  .cover-container {
    position: relative;
    min-width: 522px;
    height: 779px;
  }

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
    flex-wrap: wrap;
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

  .rating-controller {
    display: flex;
    gap: 40px;
  }

  @media (max-width: 1130px) {
    .cover-container {
      min-width: 391px;
      height: 584px;
    }

    .star-pic {
      width: 20px;
      height: 20px;
      background-size: 20px 20px;
    }
  }

  @media (max-width: 930px) {
    .info {
      gap: 20px;
    }
    .rating-container {
      row-gap: 15px;
    }
    .rating-controller {
      flex-wrap: wrap;
      row-gap: 15px;
    }

    .description {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }

    .description-content {
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      margin-top: 10px;
    }

    .buttons-container{
      margin-top: 30px;
    }
  }

  @media (max-width: 830px) {
    .arrow {
      display: none;
    }
  }

  @media (max-width: 570px) {
    .cover-container {
      min-width: 135px;
      height: 202px;
    }
  }
`;
