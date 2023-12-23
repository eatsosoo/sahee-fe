/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  css: ['./assets/scss/main.scss'],
  theme: {
    extend: {
      colors: {
        primary: '#ffbe98',
        secondary: '#ffd998',
        extra: '#E8DBD2',
        'extra-1000': '#B38A6A',
        sub: '#97A5B8',
        background: '#F4F6FC',
        field: '#F5EDF1',
        outline: '#F7E0E3',
        error: '#ff3333',
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
    },
  },
  plugins: [],
}
