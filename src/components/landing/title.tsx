import React from 'react';
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    align-content: center;
`;


const CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: min-content;
    /* justify-content: center; */
`;



const H1 = styled.h1`
  /* display: inline-block; */
  width: min-content;
  /*text-align: center; */
  /* margin: 0; */
  /* font-size: 17vw; */
  /* @media (max-width: 768px) {
    font-size: 15vw;
  } */
`;

const FancyH1 = styled(H1)`
    font-style: italic;
    position: relative;
    right: 15vw;
`

const P = styled.p`
  /* margin: 0; */
`;

const Space = styled.div`
  height: 7vh;
`;

const Title = () => {
    return (
        <Wrapper>
            <CenterDiv>
            <P>14th Anniversary</P>
            <H1>Stanford</H1>
            <Space></Space>
            <FancyH1>Africa </FancyH1>
            <FancyH1>Business </FancyH1>
            <Space></Space>
            <H1>Forum</H1>
        
            </CenterDiv>
        </Wrapper> 
    );       
};

export default Title;