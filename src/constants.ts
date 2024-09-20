import { css } from 'styled-components';

export const genres = ['Fiction', 'Non-fiction', 'Science', 'Fasion', 'History', 'Horror'];

export const sortOptions = ['Price', 'Name', 'Author name', 'Rating', 'Date of issue'];

const colors = {
  light: '#F0F4EF',
  dark_blue: '#344966',
  dark: '#0D1821',
  dark_grey: '#B9BAC3',
  light_grey: '#D6D8E7',
  white: '#F7F7FC',
  green: '#BFCC94',
  dark_green: '#8D9F4F',
};

const fonts = {

  title: css`
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
  `,

  main_content: css`
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    @media (max-width: 1150px) {
      font-size: 16px;
      line-height: 24px;
    }
  `,

  filters: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.75px;
  `,

  button: css`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.75px;
  `,

  form_hint: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.75px;`,
};

export const theme = {
  colors,
  fonts,
};

export const itemsPerPage = 12;
