import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import useMousePosition from 'hooks/mouse-position';
import React from 'react';
import styled from 'styled-components';
import { LandingStyledLink, SectionSeperator, StyledLink } from 'styles/sharedStyles';
import { GridHolder } from 'styles/sharedStyles';
import {primaryAccentColor, secondaryAccentColor } from 'styles/theme';
import { IndexPageImageQueryQuery } from '../../../graphql-types';
import { spin } from './animations';
import './cursor.css'
import { Grid } from './styledGrid';


// interfaces 
// interface RoundMouseProps{
//     x: number | null;
//     y: number | null;
// }

// start styled components 

const Section = styled.section`
    height: 85vh;
    margin: 0 14%;
    position: relative;
    /* overflow: hidden; */
    margin-bottom: 5em;
`;


const SpinThing = styled.div`
        /* position: absolute; */
        width: 5vw;
        transform-origin: center;
        height: min-content;
        bottom: 0;
        animation: ${spin} 4s ease 1;
        animation-delay: calc(2 * 0.05s);
        /* transition: transform  3s ease 1; */
        :hover {
            animation: ${spin} 4s ease 1; 
            /* display: none; */
        }
`;

const SpinHolder = styled.div`
    margin: 1em;
    display: flex;
    flex-direction: row;
    height: min-content;
    width: 100%;
    justify-content: space-between;
`;

const OverFlowHiddenDiv = styled.div`
    overflow: hidden;
  
`;


// end of styled components 

// const SpinItem = () => {
//     return (
        
//     );
// };




const spinSrc  = "/Users/julietnwagwuume-ezeoke/Desktop/sabf_2022/src/assets/spinThing.png"
interface LandingIndexProps {
    data: IndexPageImageQueryQuery;
}
const LandingIndex:React.FC<LandingIndexProps> = ({data}) => {
    const { x, y } = useMousePosition();
   
    console.log(x,y)
    // const hasMovedCursor = typeof x === "number" && typeof y === "number";

    return (
        <>
        {/* <BackgroundImage>
            <HidingLayer x={x} y={y}></HidingLayer>
        </BackgroundImage>  */}
                <Section >
                    {/* <SectionSeperator></SectionSeperator> */}
                    <div></div>

                    <GridHolder>
                    <Grid>
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
                            <div>
                                <div></div>
                            </div>
                            <OverFlowHiddenDiv>
                                <h2>African Innovation <br/> <span>Shaping the Global Future</span></h2>
                                <p>April 16, 2022</p>
                                <LandingStyledLink  to="/attend">Join Us Online + In-Person</LandingStyledLink>
                            </OverFlowHiddenDiv>
                        </div>
                    </Grid>
                    </GridHolder>
                    <SpinHolder>
                        <SpinThing>
                            <StaticImage
                                src={spinSrc} alt={''} aspectRatio={1}/>
                                
                        </SpinThing>
                        <SpinThing>
                            <StaticImage
                                src={spinSrc} alt={''} aspectRatio={1}/>
                        </SpinThing>
                        <SpinThing>
                            <StaticImage
                                src={spinSrc} alt={''} aspectRatio={1}/>
                        </SpinThing>
                        <SpinThing>
                            <StaticImage
                                src={spinSrc} alt={''} aspectRatio={1}/>
                        </SpinThing>
     
                    </SpinHolder>

                    <SectionSeperator></SectionSeperator>
                </Section>
                </>
        
    );
};

export default LandingIndex;