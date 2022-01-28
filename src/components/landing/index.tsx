import React from 'react';
import Title from './title';
import Subtitle from './subtitle';
import Photos from './photos';
import styled from 'styled-components';
import { SectionSeperator } from 'styles/sharedStyles';

const Section = styled.section`
  /* color: ${({ theme }) => theme.palette.white}; */
`;

interface LandingIndexProps {
   scrollWidth: number;
}


const LandingIndex:React.FC<LandingIndexProps> = ({scrollWidth}) => {
    return (
        <Section>
            <Title></Title>
            <Subtitle></Subtitle>
            <Photos scrollWidth={scrollWidth}></Photos>
            <SectionSeperator></SectionSeperator>
        </Section>
        
    );
};

export default LandingIndex;