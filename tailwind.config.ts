import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      screens: {
        'small': {"max":'640px'},
        'medium': {'min': '641px',"max":'1196px'},
        'large': {'min': '1197px'},
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors:{
        "buttom-primary-color":"#2c9cf0",
        "main-bg-color":"#f7f7f9",
        "cards-bg-color":"#FFFFFF",
        "black-button-color":"#1D1D1F"

      },

     
    },
  },
plugins:[
  plugin(function({ addVariant }) {
    addVariant('child', '&>*')
    addVariant('child-hover', '&>*:hover');
  }),
]
};
export default config;
