import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['retro'],
  },
};

export default config;
