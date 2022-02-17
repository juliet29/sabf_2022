import { keyframes } from "styled-components"

// animations 
export const slideUp = keyframes`
  0% {
    transform: translateY(100px)
  }
  100% {
    transform: translateY(0)
  }
`

export const slideDown = keyframes`
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  `

export const lineOut = keyframes`
        0% {
            left: -100%;
        }

        100% {
            left: 0;
        }
`

export const spin = keyframes`
    0% {
        transform:rotate(0deg);
        opacity: 0 ;
        }
    100% { 
        transform:rotate(360deg); 
        opacity: 1;
    } 
`

