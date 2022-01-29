import React from 'react';
import AboutSection from './aboutSection';
import styled from 'styled-components';
import { SectionSeperator } from 'styles/sharedStyles';

const Section = styled.section`
    /* color: black; */
    margin: 0 10%;
  
`;




const AboutIndex = () => {
    return (
        <Section>
            <AboutSection></AboutSection>
            <SectionSeperator></SectionSeperator>
        </Section>
    );
};

export default AboutIndex;