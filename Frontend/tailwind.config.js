/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background1Color: 'var(--background1Color)',
        background2Color: 'var(--background2Color)',
        background3Color: 'var(--background3Color)',
        heading1Color: 'var(--heading1Color)',
        heading2Color: 'var(--heading2Color)',
        heading3Color: 'var(--heading3Color)',
        paragraphColor: 'var(--paragraphColor)',
        hover1Color: 'var(--hover1Color)',
        hover2Color: 'var(--hover2Color)',
        hover3Color: 'var(--hover3Color)',
      },
    },
  },
  plugins: [],
}
