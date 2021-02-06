module.exports = {
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.jsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // These are the splashes of color that should appear the most in your UI,
        // and are the ones that determine the overall "look" of the site. Use these
        // for things like primary actions, links, navigation items, icons, accent
        // borders, or text you want to emphasize.
        cyan: {
          50: '#E0FCFF',
          100: '#BEF8FD',
          200: '#87EAF2',
          300: '#54D1DB',
          400: '#38BEC9', // current main
          500: '#2CB1BC',
          600: '#14919B',
          700: '#0E7C86',
          800: '#0A6C74',
          900: '#044E54',
        },
        // These are the colors you will use the most and will make up the majority
        // of your UI. Use them for most of your text, backgrounds, and borders,
        // and use the higher contrast shades for your primary actions.
        neutral: {
          50: '#FAF9F7',
          100: '#E8E6E1',
          200: '#D3CEC4',
          300: '#B8B2A7',
          400: '#A39E93',
          500: '#857F72',
          600: '#625D52',
          700: '#504A40',
          800: '#423D33',
          900: '#27241D',
        },
        // These colors should be used fairly conservatively throughout your UI to
        // avoid overpowering your primary colors. Use them when you need an
        // element to stand out, or to reinforce things like error states or positive
        // trends with the appropriate semantic color.
        supportYellow: {
          50: '#FFFAEB',
          100: '#FCEFC7',
          200: '#F8E3A3',
          300: '#F9DA8B',
          400: '#F7D070',
          500: '#E9B949',
          600: '#C99A2E',
          700: '#A27C1A',
          800: '#7C5E10',
          900: '#513C06',
        },
        supportTeal: {
          50: '#EFFCF6',
          100: '#C6F7E2',
          200: '#8EEDC7',
          300: '#65D6AD',
          400: '#3EBD93',
          500: '#27AB83',
          600: '#199473',
          700: '#147D64',
          800: '#0C6B58',
          900: '#014D40',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
