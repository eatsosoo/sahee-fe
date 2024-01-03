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
        primary: {
          DEFAULT: '#ffbe98',
          700: '#ffae80',
          800: '#ff9e66',
          900: '#ff8e4d',
        },
        secondary: '#ffd998',
        extra: {
          DEFAULT: '#e8dbd2',
          1000: '#b38a6a',
        },
        sub: '#97a5b8',
        background: '#f4f6fc',
        field: '#f5edf1',
        outline: '#f7e0e3',
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
