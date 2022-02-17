import styled from "styled-components";
import { devices } from "styles/responsiveSizes";
import { primaryAccentColor, secondaryAccentColor } from "styles/theme";
import { slideUp, lineOut, slideDown } from "./animations";

export const Grid = styled.div`
width: 100%;
z-index: 10;
display: grid;
grid-gap: 0.5em 0.5em;
h1 {
    color: white;
    font-size: clamp(0.5em, 6.5em, 7em);
    animation: ${slideUp} 0.9s cubic-bezier(0.65, 0, 0.35, 1) both
}
@media ${devices.mobileL}{
    grid-auto-flow: column;
    h1 {
        font-size: 3em;
    }
    h2 {
        font-size: 1.25em;
    } 
}
grid-template-columns: [col1-line] 1fr
                            [col2-line] 0.5fr
                            [col3-line] 0.5fr
                            [col4-line] 1fr
                            [col5-line]  1fr
                            [col6-line];
grid-template-rows: [row1-start] 14vh 
                        [row2-start] 14vh 
                        [row3-start] 14vh 
                        [row4-start] 14vh 
                        [row5-start];

@media ${devices.mobileL}{
        display: flex;
        flex-direction: column;
        div {
            width: 100%;
        }
    }
div:nth-child(1) {
    /* Stanford */
    height: max-content;
    color: white;
    grid-column: col3-line / span 2;
    grid-row: row1-start / span 1;
    align-self: center;  /* column justification */
    justify-self: center; /* row justification */
    overflow: hidden;
    h1 {
        margin-top: -0.25em;
        animation-delay: 2 * 0.025s;
    }
    @media ${devices.mobileL}{
        grid-area: auto;
        align-self: flex-end;
    }

}
div:nth-child(2) {
    /*Africa Business */
    grid-column: span 3 / col4-line;
    grid-row: row2-start / span 2;
    align-self: center;
    justify-self: end;
    overflow-y: hidden;
    width: max-content;
    padding: 10px;
    @media ${devices.mobileL}{
        grid-area: auto;
    }
    h1 {
        animation-delay: calc(2 * 0.05s);
        font-style: italic;
    }
    
}
div:nth-child(3) {
    /*Forum */
    grid-column: col3-line / span 2;
    grid-row: row4-start / span 1;
    justify-self: center; 
    overflow: hidden;
    @media ${devices.mobileL}{
        grid-area: auto;
    }
    h1 {
        animation-delay: calc(3 * 0.05s);
    }
    
}
div:nth-child(4) {
    /* Af Inn. Shaping Global Future */
    padding-left: 2em;
    grid-column: col4-line  / span 2 ;
    grid-row: row2-start / span 2;
    justify-self: start; 
    align-self: center;
    div {
        overflow: hidden;
            div {
            /* overline */
            position: relative;
            height: 1px;
            width: 100%;
            background-color: white;
            animation: ${lineOut} 0.9s cubic-bezier(0.65, 0, 0.35, 1) both;
            animation-delay: calc(4 * 0.05s);
        }
    }
    h2 {
        text-transform: uppercase;
        margin: 3px;
        color: ${primaryAccentColor};
    }
    /* span {
        font-style: italic;
    } */
    @media ${devices.mobileL}{
        grid-area: auto;
        padding-left: 0;
    }
    h2, p {
        animation: ${slideDown} 0.9s cubic-bezier(0.65, 0, 0.35, 1) both;
        animation-delay: calc(5 * 0.05s);
    }
}
`;

