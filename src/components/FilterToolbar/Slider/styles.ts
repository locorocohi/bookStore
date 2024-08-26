import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 25px 0;

  .slider {
    width: 100%;
    height: 12px;
    border-radius: 40px;
    background-color: #D6D8E7;
  }

  .track.track-1 {
    height: 12px;
    background-color: #BFCC94;
    border-radius: 999px;
  }

  .thumb {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px #BFCC94 solid;
    background-color: #F7F7FC;
    top: -9px;

    cursor: pointer;
  }

  .slider:hover .thumb {
    border: 2px #8D9F4F solid;
  }

  .thumb:focus {
    box-shadow: 0px 0px 0px 8px rgba(185, 186, 195, 0.7);
  }

  .slider:hover .track-1 {
    background-color: #8D9F4F;
  }

  .values {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
  }

  .thumb-value {
    color: #344966;

    font-weight: 400;
    font-size: 16px;
    line-height: 34px;
    letter-spacing: 0.75px;
  }
`;
