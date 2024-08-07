const typographyPlugin = require('@tailwindcss/typography')


const typographyStyles = require('./typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  plugins: [typographyPlugin, require('@tailwindcss/forms')],
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
    extend: {
      backgroundImage: {
        'boostButton': 'url(\'../images/containers/boostButton.svg\')',
        'howItWorks': 'url(\'../images/containers/leftTitle.svg\')',
        'skillsMaster': 'url(\'../images/containers/rightTitle.svg\')',
      },
      colors: {
        DutchWhite: '#EADCB3', 
        Xanthous: '#E9B329',
        Plum: '#3a064d',
        CardPlum: 'rgba(49, 0, 70, 0.85)',
        Gold: '#C28D04',
        CardGold: 'rgba(194, 141, 4, 0.85)',
        RussianViolet: '#16001C',
        MediumSlateBlue: '#8762DA',
        PalatinateBlue: '#4E32C7',
      },
      fontFamily: {
        title: ['var(--font-akronim)'],
    },
  },
  },
}