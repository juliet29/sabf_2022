import useMousePosition from 'hooks/mouse-position';
import React from 'react';
import styled from 'styled-components';
import { SectionSeperator } from 'styles/sharedStyles';
import { GridHolder } from 'styles/sharedStyles';
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


    :hover{
        clip-path:circle(50px at ${props => props.x}px ${props => props.y}px);

    }

   
`;


const Grid = styled.div<RoundMouseProps>`
    
    z-index: 10;
    display: grid;
    /* margin: ; */
    grid-template-columns: [col1-line] 1fr
                                [col2-line] 1fr
                                [col3-line] 1fr
                                [col4-line] 1fr
                                [col5-line] 1fr
                                [col6-line];
    grid-template-rows: [row1-start] 14vh 
                            [row2-start] 14vh 
                            [row3-start] 14vh 
                            [row4-start] 14vh 
                            [row5-start];
    div:nth-child(1) {
        grid-column: col3-line / span 2;
        grid-row: row1-start / span 1;
        align-self: center;
    }
    div:nth-child(2) {
        grid-column: col1-line / span 2;
        grid-row: row2-start / span 2;
        font-style: italic;
        align-self: center; /* column justification */
        justify-self: center; /* row justification */
    }
    div:nth-child(3) {
        grid-column: col2-line / span 2;
        grid-row: row4-start / span 1;
        justify-self: center; 
    }
    div:nth-child(4) {
        grid-column: col4-line  / span 2 ;
        grid-row: row2-start / span 2;
        justify-self: end; 
        align-self: center;
        h2 {
            text-transform: uppercase;
            margin: 3px;
        }
        
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
                            <h2>African Innovation Shaping the Global Future</h2>
                            <p>May XX, 2022</p>
                            <a>Join Us Online + In-Person</a>
                        </div>
                    </Grid>
                    </GridHolder>
                    <SectionSeperator></SectionSeperator>
                </Section>
                </>
        
    );
};

export default LandingIndex;