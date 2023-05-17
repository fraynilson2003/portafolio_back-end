/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'sans-serif',
      secondary: 'Montserrat',
      tertiary: 'Noto Serif',
      cuarto: "Roboto Mono"
    },
    screens: {
      aa: "320px",
      ss: '480px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        font_primary: "#DDDDDD",
        font_second: "#2963E2",
        font_trans: "#6B7280",
        font_green: "#1c6e0f",
        primary: '#1E1E1E',
        top_barra: '#3C3C3C',
        bottom_barra: "#007ACC",
        left_barra: "#333333",
        amarillo: "rgb(255,255,0)",
        oscuro: "rgb(0,0,0)",
        green: "rgb(10,150,70)",
        fondo_blanco: "rgb(190, 190, 190)",
        red: "rgb(226, 30, 56)",
        fondo_json: "#2B2B2B",
        trans: "rgb(4,4,4, 0)"

      }
    }
 
    //   // backgroundImage: {
    //   //   site: "url('./assets/site-bg.jpg')",
    //   //   about: "url('./assets/about.png')",
    //   //   services: "url('./assets/services.png')",
    //   // },
    // },
  },

  plugins: [],
};

