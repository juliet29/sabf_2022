import React from 'react';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"
// import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { devices } from 'styles/responsiveSizes';
import { primaryAccentColor } from 'styles/theme';
// import {GSB} from "../../../assets/GSB.png"


// styles --------------------
const SectionWrap = styled.div`
    margin: 0 10%;
    position: relative;
`;



const H1 = styled.h1`
    z-index: 20;
    top: 0;
    height: 100%;
    margin: 0 10%;
    display: flex;
    flex-direction: column;
    font-size: 6em;
    @media ${devices.mobileL} {
            font-size: 2.5em;
            margin: 0 auto;
     }
    text-align: center;
    position: absolute;
    transform: translateZ(0px);

    span {
        color: ${primaryAccentColor};
        display: inline-block;
    }
`;

const PhotoPlaceholder = styled.div`
  background-color: black;
  height: 45vh;
  width: 30vw;

  div {
    filter: hue-rotate(180deg);
    opacity: 0.8;
  }
  `

// const parallaxPerspective = 8
// const parallaxScaleFactor = (zDistance: number) => {
//     let scaleFactor = (parallaxPerspective - zDistance)/parallaxPerspective
//     return scaleFactor
// }

const ImageGrid = styled.div`
    width:  100%;
    z-index: -1;
    /* transform-origin: 0;
    transform: translate3D(0px, 5px, 0px), scale(0.5); */
    display: grid;
    height: 150vh;
    @media ${devices.mobileL} {
    height: initial;
}
    gap: 3em 6em;
    @media ${devices.mobileL} {
            font-size: 0em;
     }
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
    // const { ref } = useParallax({ speed: 40 });
    
    return (

        <SectionWrap>
            
            <H1 >
               Industries are <span>transforming rapidly</span> across the African continent. 
               <span>Innovation is key</span> to unlocking their <span>potential</span>  across the global economy.
            </H1>
                
            <ImageGrid>
                <PhotoPlaceholder>
                    <Parallax speed={-5}>
                    <StaticImage  src={ship} alt="" />
                    </Parallax>
                </PhotoPlaceholder>
                <PhotoPlaceholder>
                    <Parallax speed={-8}>
                    <StaticImage src={GSB} alt="" />
                    </Parallax>
                </PhotoPlaceholder>
                <PhotoPlaceholder >
                    <Parallax speed={-3}>
                    <StaticImage src={city} alt="" />
                    </Parallax>
                </PhotoPlaceholder>
                {/* <PhotoPlaceholder></PhotoPlaceholder> */}

            </ImageGrid>


        </SectionWrap>
    );
};

export default ScrollingSection;
