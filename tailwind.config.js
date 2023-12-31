/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        innerDark: 'inset 0 0 5em 6em #1b1b1b, inset 0 0 30em 7em #1b1b1b',
        innerLight: 'inset 0 0 10em 5em #F5F5F5, inset 0px 22px 30px 0px #F5F5F5'

      },

      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite'
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",

        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",

        homePageCover:
          "url('../../public/images/backgrounds/homepageIMG.jpg')",
        'aurora-purple': 'linear-gradient(to right, #AB47BC, #4A148C, #311B92)',
        'aurora-blue': 'linear-gradient(to right,  #0D47A1, #0277BD, #26C6DA)',
        'aurora-green': 'linear-gradient(to right, #00FF00, #32CD32,  #008080 )',
        'aurora-gradient': 'linear-gradient(to right, rgba(171, 71, 188, 1), rgba(74, 20, 140, 1), rgba(49, 27, 146, 1), rgba(13, 71, 161, 1))',



      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }

      'sml': '640px',
      // => @media (min-width: 640px) { ... }

      'mdl': '768px',
      // => @media (min-width: 768px) { ... }

      'lgl': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xll': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xll': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}