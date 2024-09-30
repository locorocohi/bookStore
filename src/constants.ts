import type { DefaultTheme } from 'styled-components';
import { css } from 'styled-components';

export const genres = [
  'Fiction',
  'Non-fiction',
  'Science',
  'Fasion',
  'History',
  'Horror',
];

export const sortOptions = [
  'Price',
  'Name',
  'Author name',
  'Rating',
];

type ColorsKeysType =
  | 'light'
  | 'dark_blue'
  | 'dark'
  | 'dark_grey'
  | 'light_grey'
  | 'white'
  | 'green'
  | 'dark_green';

export type ColorsType = Record<ColorsKeysType, string>;

const colors: ColorsType = {
  light: '#F0F4EF',
  dark_blue: '#344966',
  dark: '#0D1821',
  dark_grey: '#B9BAC3',
  light_grey: '#D6D8E7',
  white: '#F7F7FC',
  green: '#BFCC94',
  dark_green: '#8D9F4F',
};

const fonts: Record<string, ReturnType<typeof css>> = {
  title: css`
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;

    @media (max-width: 1030px) {
      font-size: 32px;
      line-height: 48px;
    }

    @media (max-width: 570px) {
      font-size: 18px;
      line-height: 27px;
    }
  `,

  main_content: css`
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;

    @media (max-width: 1030px) {
      font-size: 16px;
      line-height: 24px;
    }

    @media (max-width: 570px) {
      font-size: 14px;
      line-height: 21px;
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

    @media (max-width: 930px) {
      font-size: 14px;
      line-height: 21px;
      font-weight: 500;
    }

    @media (max-width: 770px) {
      font-size: 12px;
      line-height: 18px;
      font-weight: 500;
    }
  `,

  form_hint: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.75px;

    @media (max-width: 700px) {
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
    }
  `,
};

export const theme: DefaultTheme = {
  colors,
  fonts,
};

export const itemsPerPage = 12;
export const ITEMS_PER_PAGE = 12;
