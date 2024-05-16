/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans"],
      monospace: ["DM Mono", "monospace"],
      
    },
    extend: {
      // colors: {
      //   primary: "#050816",
      //   secondary: "#aaa6c3",
      //   tertiary: "#151030",
      //   "black-100": "#100d25",
      //   "black-200": "#090325",
      //   "white-100": "#f3f3f3",
      //   muted: "#f3f3f3bb"
      // },
      colors: {
        primary: "#03001C",
        secondary: "#b2bbcf",
        tertiary: "#000a1f",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        muted: "#f3f3f3bb",
        "fun-blue": "#00c7ff"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        "lg-text": "1000px",
        lg: "860px",
        sm: "860px",
        md: "600px",
        se: "375px",
        xs: "400px",
        xxs: "200px"
      },
      rotate: {
        '360': '360deg'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fadeInAndBounce': 'fadeIn 3s ease-out',
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg/9.png')",
      },
    },
  },
  plugins: [],
};
