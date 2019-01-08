const theme = {
  colors: {
    white: '#fff',
    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray300: '#dee2e6',
    gray400: '#ced4da',
    gray500: '#adb5bd',
    gray600: '#6c757d',
    gray700: '#495057',
    gray800: '#343a40',
    gray900: '#212529',
    black: '#000',
    primary: '#007bff',
  },
  spacer: '1rem',
  linkColor: '',
  linkDecoration: 'none',
  linkHoverColor: '',
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
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
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
  tableCaptionColor: '',
  labelMarginBottom: '.5rem'
}

export default theme
