import { DefaultTheme } from 'styled-components';


// hack untill figure out problem with global styles and typescript...
export const darkColor = "#000000" // '#1e1e1e' //"#000000"
export const lightColor = '#00021f'
export const skyBlue = "#7DC9EC"
export const fontFamily = 'Arial, Helvetica, sans-serif'
export const edgeSpace= 2

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