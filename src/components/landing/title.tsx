import React from 'react';
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
`;

const Line = styled.div`
    background-color: ${props => props.theme.palette.white};
    height: 0.05em;
    /* margin: 1em 0; */
`;

const CenterDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const textAppearTopRightAnim = keyframes`
0% {
    transform: scale(0);
    transform-origin: 0% 100%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 100%;
    opacity: 1;
  }
    /* 0% {
         transform: translateY(1em) ;
        transform-origin: 50% 50%;
    }
    100% {
        color: darkblue;
        transform: translateY(0) translateX(0);
        transform-origin: 50% 50%;
    } */
`
interface H1Props{
    animationDelay: number;
}
const H1 = styled.h1<H1Props>`
  /* display: contents; */
  /*text-align: center; */
  margin: 0;
  letter-spacing: -0.5vw;
  line-height: 0.9em;
  font-size: 17vw;
  @media (max-width: 768px) {
    font-size: 15vw;
  }
  animation-name: ${textAppearTopRightAnim};
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: ${props => props.animationDelay}s; 
  /* animation-iteration-count: infinite;*/
`;




const text = 'Daria' + "   " + 'Izbash';
var textElements = text.split("").map(c => c);


const Title = () => {
    return (
        <Wrapper>
            <Line></Line>
            <CenterDiv>
            {textElements.map((e, ix) => <H1 animationDelay={ix/30}>{e}</H1>)}
            </CenterDiv>
            <Line></Line>
        </Wrapper> 
    );       
};

export default Title;