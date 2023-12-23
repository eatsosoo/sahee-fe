/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.vue', './pages/**/*.vue'],
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
      },
    },
  },
  plugins: [],
}
