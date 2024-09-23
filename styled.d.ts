import type { css } from 'styled-components';
import type { ColorsType } from './src/constants';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    colors: ColorsType;
    fonts: Record<string, ReturnType<typeof css>>;
  }
}
