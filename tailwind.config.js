let colors = {
  transparent: 'transparent',
  black: '#22292f',
  white: '#ffffff',

  // Primary
  'yellow-vivid-050': '#FFFBEA',
  'yellow-vivid-100': '#FFF3C4',
  'yellow-vivid-200': '#FCE588',
  'yellow-vivid-300': '#FADB5F',
  'yellow-vivid-400': '#F7C948',
  'yellow-vivid-500': '#F0B429',
  'yellow-vivid-600': '#DE911D',
  'yellow-vivid-700': '#CB6E17',
  'yellow-vivid-800': '#B44D12',
  'yellow-vivid-900': '#8D2B0B',

  'light-blue-vivid-050': '#E3F8FF',
  'light-blue-vivid-100': '#B3ECFF',
  'light-blue-vivid-200': '#81DEFD',
  'light-blue-vivid-300': '#5ED0FA',
  'light-blue-vivid-400': '#40C3F7',
  'light-blue-vivid-500': '#2BB0ED',
  'light-blue-vivid-600': '#1992D4',
  'light-blue-vivid-700': '#127FBF',
  'light-blue-vivid-800': '#0B69A3',
  'light-blue-vivid-900': '#035388',

  // Neutrals
  'grey-050': '#F7F7F7',
  'grey-100': '#E1E1E1',
  'grey-200': '#CFCFCF',
  'grey-300': '#B1B1B1',
  'grey-400': '#9E9E9E',
  'grey-500': '#7E7E7E',
  'grey-600': '#626262',
  'grey-700': '#515151',
  'grey-800': '#3B3B3B',
  'grey-900': '#222222',

  // Supporting
  'red-vivid-050': '#FFE3E3',
  'red-vivid-100': '#FFBDBD',
  'red-vivid-200': '#FF9B9B',
  'red-vivid-300': '#F86A6A',
  'red-vivid-400': '#EF4E4E',
  'red-vivid-500': '#E12D39',
  'red-vivid-600': '#CF1124',
  'red-vivid-700': '#AB091E',
  'red-vivid-800': '#8A041A',
  'red-vivid-900': '#610316',

  'teal-050': '#EFFCF6',
  'teal-100': '#C6F7E2',
  'teal-200': '#8EEDC7',
  'teal-300': '#65D6AD',
  'teal-400': '#3EBD93',
  'teal-500': '#27AB83',
  'teal-600': '#199473',
  'teal-700': '#147D64',
  'teal-800': '#0C6B58',
  'teal-900': '#014D40'
}

module.exports = {
  theme: {
    colors: colors,

    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },

    fontFamily: {
      sans: [
        'Open Sans',
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ],
      serif: [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif'
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    },

    fontSize: {
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem' // 48px
    },

    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },

    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      loose: 2
    },

    letterSpacing: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em'
    },

    textColor: colors,

    backgroundColor: colors,

    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    },

    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    },

    borderColor: global.Object.assign(
      { default: colors['grey-light'] },
      colors
    ),

    borderRadius: {
      none: '0',
      sm: '.125rem',
      default: '.25rem',
      lg: '.5rem',
      full: '9999px'
    },

    width: {
      auto: 'auto',
      px: '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      full: '100%',
      screen: '100vw'
    },

    height: {
      auto: 'auto',
      px: '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      full: '100%',
      screen: '100vh'
    },

    minWidth: {
      '0': '0',
      full: '100%'
    },

    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh'
    },

    maxWidth: {
      xs: '20rem',
      sm: '30rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      full: '100%'
    },

    maxHeight: {
      full: '100%',
      screen: '100vh'
    },

    padding: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem'
    },

    margin: {
      auto: 'auto',
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem'
    },

    negativeMargin: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem'
    },

    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(52,144,220,0.5)',
      none: 'none'
    },

    zIndex: {
      auto: 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50
    },

    fill: {
      current: 'currentColor'
    },

    stroke: {
      current: 'currentColor'
    }
  },
  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: [],
    stroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    fontStyle: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransfor: ['responsive', 'hover', 'focus'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive']
  },
  plugins: []
}
