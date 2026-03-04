import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#F4F1E8',
        olive: {
          DEFAULT: '#556B2F',
          dark: '#3d4d22',
          light: '#6b8540',
        },
        terracotta: {
          DEFAULT: '#C56A3D',
          dark: '#a05530',
          light: '#d4844f',
        },
        amber: {
          DEFAULT: '#E3A327',
          dark: '#c08d1a',
          light: '#edb73c',
        },
        charcoal: '#2B2B2B',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
      },
      typography: {
        countryside: {
          css: {
            '--tw-prose-body': '#2B2B2B',
            '--tw-prose-headings': '#556B2F',
            '--tw-prose-links': '#C56A3D',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
