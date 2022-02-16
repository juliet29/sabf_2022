import { Link } from 'gatsby';
import useMousePosition from 'hooks/mouse-position';
import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { SectionSeperator } from 'styles/sharedStyles';
import { GridHolder } from 'styles/sharedStyles';
import {secondaryAccentColor } from 'styles/theme';
import './cursor.css'


// start styled components 

const Section = styled.section`
  margin: 0 14%;
  position: absolute;
  top: 0;

  
`;

interface RoundMouseProps{
    x: number | null;
    y: number | null;
}

const BackgroundImage = styled.div`
    background-color: black;
    width: 100%;
    height: 100vh;
    @media ${devices.mobileL} {
        height: 70vh;
        
    }

    
`;


const HidingLayer = styled.div<RoundMouseProps>`
    position: absolute;
    height: 100vh;
    width: 100%;
    top:0;
    left:0;
    clip-path: circle(100px at ${props => props.x}px ${props => props.y}px);
    /* transform: translate(-50%, -50%); */
    background: url("https://www.themillsbuilding.com/userfiles/cms/building/images/1/building.jpg");
    background-size: cover;
    height: 100vh;
    transition: clip-path .10s;
    /* transition-timing-function: ease; */

    @media ${devices.mobileL} {
        display: none;
        
    }


    :hover{
        clip-path:circle(50px at ${props => props.x}px ${props => props.y}px);

    }

   
`;


const Grid = styled.div<RoundMouseProps>`
    width: 100%;
    z-index: 10;
    display: grid;
    grid-gap: 0.5em 0.5em;
    
    h1 {
        color: ${secondaryAccentColor};
        font-size: clamp(0.5em, 6.5em, 7em);
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
    /* margin: ; */
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
        color: ${secondaryAccentColor};
        grid-column: col3-line / span 2;
        grid-row: row1-start / span 1;
        align-self: center;  /* column justification */
        justify-self: center; /* row justification */
        h1 {
            margin-top: -0.25em;
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
        font-style: italic;
        align-self: center;
        justify-self: end;
       @media ${devices.mobileL}{
            grid-area: auto;
        }
    }
    div:nth-child(3) {
        /*Forum */
        grid-column: col3-line / span 2;
        grid-row: row4-start / span 1;
        justify-self: center; 
        @media ${devices.mobileL}{
            grid-area: auto;
        }
    }
    div:nth-child(4) {
        /* Af Inn. Shaping Global Future */
        padding-left: 3em;
        grid-column: col4-line  / span 2 ;
        grid-row: row2-start / span 2;
        justify-self: start; 
        align-self: center;
        h2 {
            text-transform: uppercase;
            margin: 3px;
        }
        span {
            font-style: italic;
        }
        @media ${devices.mobileL}{
            grid-area: auto;
            padding-left: 0;
        }
    }
  
`;

const StyledLink = styled(Link)`
 color: white;
 text-decoration: none;
 transition: all 0.5s;
  :hover {
        color: ${secondaryAccentColor};
    }

`;







// end of styled components 



interface LandingIndexProps {
//    scrollWidth: number;
}
const LandingIndex:React.FC<LandingIndexProps> = ({}) => {
    const { x, y } = useMousePosition();
    console.log(x,y)
    // const hasMovedCursor = typeof x === "number" && typeof y === "number";

    return (
        <>
          {/* <RoundMouse x={x} y={y}></RoundMouse> */}
        <BackgroundImage>
            <HidingLayer x={x} y={y}></HidingLayer>
        </BackgroundImage> 
                <Section  >
                    <SectionSeperator></SectionSeperator>
                    <GridHolder>
                    <Grid x={x} y={y}>
                        <div> 
                            <p>14th Anniversary</p>
                            <h1>Stanford</h1>
                        </div>

                        <div>
                            <h1>
                                Africa <br/>Business
                            </h1>
                        </div>

                        <div>
                            <h1> Forum</h1>
                        </div>
                        
                        <div>
                            <h2>African Innovation <br/> <span>Shaping the Global Future</span></h2>
                            <p>April 16, 2022</p>
                            <StyledLink  to="/attend">Join Us Online + In-Person</StyledLink>
                        </div>
                    </Grid>
                    </GridHolder>
                    <SectionSeperator></SectionSeperator>
                </Section>
                </>
        
    );
};

export default LandingIndex;