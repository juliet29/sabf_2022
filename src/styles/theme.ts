import { DefaultTheme } from 'styled-components';
import "@fontsource/montserrat"


// hack untill figure out problem with global styles and typescript...

// const skyBlue = "#7DC9EC" //primary accent color 
// const electricBlue = "#2558FE"
const navy = "#24477F"
const mainBlue = "#00A0EA"
const lightGradient: "linear-gradient(180deg, rgba(36,71,127,1) 0%, rgba(37,88,254,1) 51%, rgba(54,101,255,1) 100%)"


export const darkColor = "#000000" // '#1e1e1e' //"#000000"
export const lightColor = '#00021f'
export const primaryAccentColor = mainBlue
export const secondaryAccentColor = navy
export const fontFamily =  "montserrat, sans-serif"//'Tahoma, sans-serif'
// font-family: "montserrat";
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