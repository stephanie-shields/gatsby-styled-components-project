import { darken } from 'polished'

export const gray = {
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
}

export const brand = {
  primary: '#007bff'
}

export const color = {
  ...brand,
  ...gray,
  white: '#fff',
  black: '#000',
}

const theme = {
  color,
  spacer: '1rem',
  linkColor: color.primary,
  linkDecoration: 'none',
  linkHoverColor: darken(0.15, color.primary),
  linkHoverDecoration: 'underline',
  paragraphMarginBottom: '1rem',
  gridBreakpoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  gridGutterWidth: '24px',
  fontFamily: {
    sansSerif:
      '"Montserrat", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
    monospace:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSizeBase: '1rem', // Assumes the browser default, typically `16px`
  fontWeight: {
    lighter: 'lighter',
    light: '300',
    normal: '400',
    bold: '700',
    bolder: 'bolder',
  },
  lineHeightBase: 1.5,
  tableCellPadding: '.75rem',
  tableCaptionColor: color.gray600,
  labelMarginBottom: '.5rem'
}

export default theme
