import { DefaultTheme } from 'styled-components';


// hack untill figure out problem with global styles and typescript...
export const darkColor = '#1e1e1e'
export const lightColor = 'rgb(217, 217, 217)'
export const fontFamily = 'Arial, Helvetica, sans-serif'

const mainTheme: DefaultTheme = {
    palette: {
      dark: darkColor,
      light: lightColor,
      white: "#fff"
    },
    font: {
        sans: fontFamily
    }
  }




 
 export default mainTheme