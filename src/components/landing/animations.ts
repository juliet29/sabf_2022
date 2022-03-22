import { keyframes } from 'styled-components';

// animations
export const slideUp = keyframes`
  0% {
    transform: translateY(100px)
  }
  100% {
    transform: translateY(0)
  }
`;

export const slideDown = keyframes`
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  `;

export const lineOut = keyframes`
        0% {
            left: -100%;
        }

        100% {
            left: 0;
        }
`;

export const spin = keyframes`
    0% {
        transform:rotate(0deg);
        opacity: 0 ;
        }
    100% { 
        transform:rotate(360deg); 
        opacity: 1;
    } 
`;

export const rainbow = keyframes`
    0% {
        background-size: 650%;
    }
    40% {
        background-size: 650%;
    }
    100% {
        background-size: 100%;
    }`;

export const shinyLink = keyframes`
0% { transform: scale(0) rotate(45deg); opacity: 0; }
    80% {transform: scale(0) rotate(45deg); opacity: 0.5; }
    81% { transform: scale(4) rotate(45deg); opacity: 1; }
    100% { transform: scale(5) rotate(45deg); opacity: 0; }
`;

export const clipGradual = keyframes`
    20% {
      clip-path: polygon(
        0 0,
        /* Shape 1 */ 0 5%,
        20% 5%,
        20% 95%,
        0 95%,
        0 0,
        /* Shape 2 */ 32% 0,
        32% 50%,
        21% 50%,
        21% 50%,
        32% 50%,
        32% 0,
        33% 0,
        /* Shape 3 */ 33% 50%,
        53% 50%,
        53% 50%,
        33% 50%,
        33% 5%,
        33% 0,
        54% 0,
        /* Shape 4 */ 54% 50%,
        71% 50%,
        71% 50%,
        54% 50%,
        54% 0,
        100% 0,
        /* Shape 5 */ 100% 50%,
        72% 50%,
        72% 50%,
        100% 50%,
        100% 0
      );
    }
    40% {
      clip-path: polygon(
        0 0,
        /* Shape 1 */ 0 5%,
        20% 5%,
        20% 95%,
        0 95%,
        0 0,
        /* Shape 2 */ 32% 0,
        32% 100%,
        21% 100%,
        21% 0,
        32% 0,
        32% 0,
        33% 0,
        /* Shape 3 */ 33% 50%,
        53% 50%,
        53% 50%,
        33% 50%,
        33% 5%,
        33% 0,
        54% 0,
        /* Shape 4 */ 54% 50%,
        71% 50%,
        71% 50%,
        54% 50%,
        54% 0,
        100% 0,
        /* Shape 5 */ 100% 50%,
        72% 50%,
        72% 50%,
        100% 50%,
        100% 0
      );
    }
    60% {
      clip-path: polygon(
        0 0,
        /* Shape 1 */ 0 5%,
        20% 5%,
        20% 95%,
        0 95%,
        0 0,
        /* Shape 2 */ 32% 0,
        32% 100%,
        21% 100%,
        21% 0,
        32% 0,
        32% 0,
        33% 0,
        /* Shape 3 */ 33% 5%,
        53% 5%,
        53% 95%,
        33% 95%,
        33% 5%,
        33% 0,
        54% 0,
        /* Shape 4 */ 54% 50%,
        71% 50%,
        71% 50%,
        54% 50%,
        54% 0,
        100% 0,
        /* Shape 5 */ 100% 50%,
        72% 50%,
        72% 50%,
        100% 50%,
        100% 0
      );
    }
    80% {
      clip-path: polygon(
        0 0,
        /* Shape 1 */ 0 5%,
        20% 5%,
        20% 95%,
        0 95%,
        0 0,
        /* Shape 2 */ 32% 0,
        32% 100%,
        21% 100%,
        21% 0,
        32% 0,
        32% 0,
        33% 0,
        /* Shape 3 */ 33% 5%,
        53% 5%,
        53% 95%,
        33% 95%,
        33% 5%,
        33% 0,
        54% 0,
        /* Shape 4 */ 54% 15%,
        71% 15%,
        71% 97%,
        54% 97%,
        54% 0,
        100% 0,
        /* Shape 5 */ 100% 50%,
        72% 50%,
        72% 50%,
        100% 50%,
        100% 0
      );
    }
    100% {
      clip-path: polygon(
        0 0,
        /* Shape 1 */ 0 5%,
        20% 5%,
        20% 95%,
        0 95%,
        0 0,
        /* Shape 2 */ 32% 0,
        32% 100%,
        21% 100%,
        21% 0,
        32% 0,
        32% 0,
        33% 0,
        /* Shape 3 */ 33% 5%,
        53% 5%,
        53% 95%,
        33% 95%,
        33% 5%,
        33% 0,
        54% 0,
        /* Shape 4 */ 54% 15%,
        71% 15%,
        71% 97%,
        54% 97%,
        54% 0,
        100% 0,
        /* Shape 5 */ 100% 3.5%,
        72% 3.5%,
        72% 100%,
        100% 100%,
        100% 0
      );
    }

`;
