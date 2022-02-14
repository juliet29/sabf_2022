import React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"


// styles --------------------
const SectionWrap = styled.div`
    margin: 0 10%;
    /* height: 100vh;
    overflow-y: scroll; */
    /* overflow-x: hidden;
    perspective: 8px;
    perspective-origin: 0%;
    position: relative; */
`;

const ParallaxContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    perspective: 10px;
    perspective-origin: 0%;
    /* display: flex; */
  
`;

const H1 = styled.h1`
    z-index: 20;
    top: 0;
    height: 100%;
    margin: 0 10%;
    display: flex;
    font-size: 7em;
    text-align: center;
    position: absolute;
    transform: translateZ(0px);
`;

const PhotoPlaceholder = styled.div`
  background-color: black;
  height: 45vh;
  width: 30vh;
  `
// const parallaxPerspective = 8
// const parallaxScaleFactor = (zDistance: number) => {
//     let scaleFactor = (parallaxPerspective - zDistance)/parallaxPerspective
//     return scaleFactor
// }

const ImageGrid = styled.div`
    width:  100%;
    z-index: -1;
    transform-origin: 0;
    transform: translate3D(0px, 5px, 0px), scale(0.5);
    display: grid;
    height: 140vh;
    gap: 3em 6em;
    grid-template-columns: [col1-line] 1fr
                                [col2-line]  1fr  
                                [col3-line] ;
    grid-template-rows: [row1-start] 1fr 
                            [row2-start] 1fr 
                            [row3-start] 1fr
                            [row4-start];
    /* grid-auto-flow: row; */
   ${PhotoPlaceholder}:nth-child(1){
        grid-column: col1-line / span 1;
        grid-row: row1-start / span 1;
        justify-self: start;
        transform: translate3D(0px, 5px) scale(0.5);
    }
    ${PhotoPlaceholder}:nth-child(2){
        grid-column: col2-line / span 1;
        grid-row: row2-start / span 1;
        justify-self: end;
    }
    ${PhotoPlaceholder}:nth-child(3){
        grid-column: col1-line / span 1;
        grid-row: row3-start / span 1;
        justify-self: start;

    }

  
`;



// end of styles --------------------

interface ScrollingSectionProps {
    // imageA: any;
    // imageB: any;
    // imageC: any;
    // : string;
}

const ship = "/Users/julietnwagwuume-ezeoke/Desktop/sabf_2022/src/assets/ship.jpg"
const GSB = "/Users/julietnwagwuume-ezeoke/Desktop/sabf_2022/src/assets/GSB.png"
const city ="/Users/julietnwagwuume-ezeoke/Desktop/sabf_2022/src/assets/city.jpg"

const ScrollingSection: React.FC<ScrollingSectionProps> = ({ }) => {
    return (

        <SectionWrap>
           <ParallaxContainer >
            <H1>
                Here will be some prolific text that will explore a major theme of the conference and make people very interested.
            </H1>
            <ImageGrid>
                <PhotoPlaceholder>
                    <StaticImage src={ship} alt="" />
                </PhotoPlaceholder>
                <PhotoPlaceholder>
                    <StaticImage src={GSB} alt="" />
                </PhotoPlaceholder>
                <PhotoPlaceholder>
                    <StaticImage src={city} alt="" />
                </PhotoPlaceholder>
                {/* <PhotoPlaceholder></PhotoPlaceholder> */}

            </ImageGrid>
            </ParallaxContainer>

        </SectionWrap>
    );
};

export default ScrollingSection;
