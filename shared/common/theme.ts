import localFont from 'next/font/local';
import {
  DEFAULT_THEME,
  MantineColorsTuple,
  colorsTuple,
  createTheme,
} from '@mantine/core';

export const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretandard',
  weight: '45 920',
});

const blue: MantineColorsTuple = [
  '#eaeaff',
  '#d0d0ff',
  '#9c9cfd',
  '#6665fc',
  '#3b37fb',
  '#221bfb',
  '#160dfc',
  '#0902e1',
  '#0000cd',
  '#0000b1',
];

export const THEME = createTheme({
  fontFamily: `${pretendard.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  colors: {
    black: colorsTuple('#141414'),
    white: colorsTuple('#FAFAFA'),
    blue,
  },
});
