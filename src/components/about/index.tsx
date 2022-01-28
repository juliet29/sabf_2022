import React from 'react';
import LargeText from './largeText';
import SmallText from './smallText';
import styled from 'styled-components';
import { SectionSeperator } from 'styles/sharedStyles';

const Wrapper = styled.section`
    color: black;
  
`;




const AboutIndex = () => {
    return (
        <Wrapper>
            {/* <SmallText></SmallText>
            <LargeText></LargeText> */}
            <SectionSeperator></SectionSeperator>
        </Wrapper>
    );
};

export default AboutIndex;