import React from 'react';
import { VerticalFlexDiv } from 'styles/sharedStyles';
import styled, { keyframes } from 'styled-components';

// TODO -> based on scroll position 
// TODO -> underline children 3, 4, 5 
// TODO -> fix line heights..

const NoOverflowDiv = styled.div`
  overflow: hidden;
`;
const textRotateUp = keyframes`
0% { 
    transform: rotate(4deg) translateY(10px);
    /* transform-origin: 0% 100%; */
    transform-origin: bottom left; 
    opacity: 0;
    /* display: none; */
  }
  100% {
    transform: rotate(0) translateY(0);
    /* transform-origin: 0% 100%; */
    transform-origin: bottom left; 
    /* opacity: 1; */
  }
`
const H1 = styled.h1`
  margin: 0;
  font-weight: 900;
  /* line-height: 0.9em; */
  font-size: 9vw;
  @media (max-width: 768px) {
    font-size: 7vw;
  }
  animation-name: ${textRotateUp};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const text = "focusing on fashion, commercial, personal, projects"
var wordElements = text.split(" ").map(c => c);
 
const LargeText = () => {
    return (
        <VerticalFlexDiv>
            {wordElements.map((e, ix) => <NoOverflowDiv><H1>{e}</H1></NoOverflowDiv> )}
        </VerticalFlexDiv>
    );
};

export default LargeText;