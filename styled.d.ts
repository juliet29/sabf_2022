// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
          dark: string
          light: string
          white: string
        }
        font: {
          sans: string
        }
      }
}