import { createGlobalStyle } from 'styled-components'
import { darkColor, fontFamily } from './theme'

export const GlobalStyle = createGlobalStyle`

html {
  /* background-color: ${darkColor}; */
  font-family: ${fontFamily};
  color: white;
  /* margin: 20px; */

}

body {
  margin: 0;
  /* padding: 20px; */
}

/* Declare text styles */
h1, h2, p, a {
  /* Font minimum, preferred and maximum value */
  font-size: clamp(var(--min), var(--val), var(--max));
  margin: 0;
  font-weight: normal;
}

a {
  text-decoration: underline;
}

/* Font size variables */
h1 {
  --min: 2em; /* minimum value */
  --val: 5vw; /* preferred value = 5% viewport width */
  --max: 3em; /* maximum value */
}
h2 {
  --min: 1.5em;   /* minimum value */
  --val: 2vw;     /* preferred value = 4% viewport width */
  --max: 2.25em;  /* maximum value */
}
p, a {
  --min: 0.8em;   /* minimum value */
  --val: 1.2vw; /* preferred value = 2.5% viewport width */
  --max: 1.5em; /* maximum value */
}



`