import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors"


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'title': ['Alegreya Sans', 'sans-serif'],
        'styleGenre': ['Biryani', 'sans-serif']
      },
      colors: {
        vault: {
          text: colors.gray[100],
          background: colors.slate[700],
          menubar: colors.slate[800],
          title: colors.yellow[500],
          link: colors.lime[500],
          border: colors.sky[400],
          live: colors.red[600],
          genre: colors.orange[500],
          genreBackground: colors.orange[100]
        }
      }
    },
  },
  plugins: [],
}
export default config
