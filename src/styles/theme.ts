import { DefaultTheme } from 'styled-components';


// hack untill figure out problem with global styles and typescript...

// const skyBlue = "#7DC9EC" //primary accent color 
// const electricBlue = "#2558FE"
const navy = "#24477F"
const mainBlue = "#00A0EA"


export const darkColor = "#000000" // '#1e1e1e' //"#000000"
export const lightColor = '#00021f'
export const primaryAccentColor = mainBlue
export const secondaryAccentColor = navy
export const fontFamily = 'Tahoma, sans-serif'
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