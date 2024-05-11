import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  plugins: [],
};
module.exports = {
  theme: {
    colors: {
      myBackground: 'var(--bg)',
      primary: 'var(--primary)',
      myText: 'var(--text)',
      myTextSoft: 'var(--textSoft)',
    },
  },
};
export default config;
