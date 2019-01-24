import { darken } from 'polished'

// Color System - Neutrals
export const neutral = {
  N100: '#f8f9fa',
  N200: '#e9ecef',
  N300: '#dee2e6',
  N400: '#ced4da',
  N500: '#adb5bd',
  N600: '#6c757d',
  N700: '#495057',
  N800: '#343a40',
  N900: '#212529',
}

// Color System - Brands
export const brand = {
  primary: '#007bff'
}

// Color System
export const color = {
  ...brand,
  ...neutral,
  white: '#fff',
  black: '#000',
}

// Grid Breakpoints
export const gridBreakpoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

// Grid Containers
export const gridContainers = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px'
}


const theme = {
  color,
  gridBreakpoints,
  gridContainers,
  spacer: '1rem',
  linkColor: color.primary,
  linkDecoration: 'none',
  linkHoverColor: darken(0.15, color.primary),
  linkHoverDecoration: 'underline',
  paragraphMarginBottom: '1rem',
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
    bold: '600',
    bolder: 'bolder',
  },
  lineHeightBase: 1.5,
  tableCellPadding: '.75rem',
  tableCaptionColor: color.N600,
  labelMarginBottom: '.5rem'
}

export default theme
