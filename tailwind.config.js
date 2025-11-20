/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '540px',
      md: '740px',
      lg: '960px',
      xl: '1140px',
    },
    container:{
      center: true,
      padding: '24px'
    },
    
    extend: {
       fontFamily:{
        'DancingScripts': 'var(--DancingScripts)',
        'Lato': 'var(--Lato)',
        'Poppins': 'var(--Poppins)',
        'default_font': "var(--default-font)",
        'heading-font': "var(--heading-font)"
      },

      height:{
        0.75: '3px'
      },
      colors: {
        'nav_color': "var(--nav-color)",
        'nav_hover_color': "var(--nav-hover-color)",
        'nav_mobile_background_color': "var(--nav-mobile-background-color)",
        'dropdown_background_color': "var(--nav-dropdown-background-color)",
        'dropdown_color': "var(--nav-dropdown-color)",
        'dropdown_hover_color': "var(--nav-dropdown-hover-color)",
        'accent_color': 'var(--accent-color)',
        'background_color': "var(--background-color)",
        'default_color': "var(--default-color)",
        'heading_color': "var(--heading-color)",
        'surface_color': "var(--surface-color)",
        'contrast_color': "var(--contrast-color)"
      },

       height:{
        second_nav_bar: 'calc(100vh - 68px)' 
      },
      minHeight:{
        maincontent: 'calc(100vh - 68px)' 
      }
    },
  },
  plugins: [],
}

