/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],

  theme: {
    extend: {
      colors: {
        'timer-green-dark': '#015F43',
        'timer-green': '#00875F',
        'timer-green-light': '#00B37E',

        'timer-red-dark': '#7A1921',
        'timer-red': '#F03847',

        'timer-gray-900': '#121214',
        'timer-gray-800': '#202024',
        'timer-gray-700': '#29292E',
        'timer-gray-600': '#323238',
        'timer-gray-500': '#7C7C8A',
        'timer-gray-400': '#8D8D99',
        'timer-gray-300': '#C4C4CC',
        'timer-gray-100': '#E1E1E6',

        'timer-yellow': '#FBA94C',
      },

      fontFamily: {
        roboto: "'Roboto', sans-serif",
        'roboto-mono': "'Roboto Mono', monospace",
      },
    },
  },
  plugins: [],
}
