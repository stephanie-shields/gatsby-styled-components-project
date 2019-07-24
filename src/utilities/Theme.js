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

// Spacing
export const spacing = {
  spacer: '1rem'
}

// Links
export const links = {
  linkColor: color.primary,
  linkDecoration: 'none',
  linkHoverColor: darken(0.15, color.primary),
  linkHoverDecoration: 'underline'
}

// Paragraphs
export const paragraphs = {
  paragraphMarginBottom: '1rem'
}

// Grid Breakpoints
export const gridBreakpoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1290px',
}

// Grid Containers
export const gridContainers = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1290px' // original: 1200px
}

// Grid Columns
export const gridColumns = {
  gridGutterWidth: '24px'
}

// Typography
export const typography = {
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
  lineHeightBase: 1.5
}

// Tables
export const tables = {
  tableCellPadding: '.75rem',
  tableCaptionColor: color.N600
}

// Forms
export const forms = {
  labelMarginBottom: '.5rem'
}

// Variables
export const variables = {
  color,
  ...spacing,
  ...links,
  ...paragraphs,
  gridBreakpoints,
  gridContainers,
  ...gridColumns,
  ...typography,
  ...tables,
  ...forms
}

// export default theme

// primary: '#ff0198'
// primary: '#6e27c5'

export const T100 = {
  primary: '#E0193D',
  ...variables
}

export const T200 = {
  primary: '#CA1360',
  ...variables
}

export const T300 = {
  primary: '#BC0D75',
  ...variables
}

export const T400 = {
  primary: '#6E24C2',
  ...variables
}

export const T500 = {
  primary: '#5E3BC6',
  ...variables
}

export const T600 = {
  primary: '#4C52C9',
  ...variables
}

export const T700 = {
  primary: '#227FCE',
  ...variables
}

export const T800 = {
  primary: '#0096D1',
  ...variables
}