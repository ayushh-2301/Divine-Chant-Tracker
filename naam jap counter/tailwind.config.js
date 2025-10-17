/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'saffron': '#FF9933',
        'white': '#FFFFFF',
        'gold': '#FFD700',
        'blue': '#000080',
      },
    },
  },
  plugins: [],
}