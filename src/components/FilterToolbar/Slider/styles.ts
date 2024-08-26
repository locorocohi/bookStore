import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 25px 0;

  .slider {
    width: 100%;
    height: 12px;
    border-radius: 40px;
    background-color: ${(p) => p.theme.colors.light_grey};
  }

  .track.track-1 {
    height: 12px;
    background-color: ${(p) => p.theme.colors.green};
    border-radius: 999px;
  }

  .thumb {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px ${(p) => p.theme.colors.green} solid;
    background-color: ${(p) => p.theme.colors.white};
    top: -9px;

    cursor: pointer;
  }

  .slider:hover .thumb {
    border: 2px ${(p) => p.theme.colors.dark_green} solid;
  }

  .thumb:focus {
    box-shadow: 0px 0px 0px 8px rgba(185, 186, 195, 0.7);
  }

  .slider:hover .track-1 {
    background-color: ${(p) => p.theme.colors.dark_green};
  }

  .values {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
  }

  .thumb-value {
    color: ${(p) => p.theme.colors.dark_blue};

    font-weight: 400;
    font-size: 16px;
    line-height: 34px;
    letter-spacing: 0.75px;
  }
`;
