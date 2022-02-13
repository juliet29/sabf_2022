import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { SectionSeperator } from 'styles/sharedStyles';
import GenericSection from './genericSection';
import ParallaxImage from './parallaxImage';


const Section = styled.section`
    /* color: black; */
    margin: 0 10%;
  
`;




const AboutIndex = () => {

    return (
        <Section>
            {/* <Link to="/attend">Join Us Online + In-Person</Link> */}
          <GenericSection sectionNumber={"01"}></GenericSection>
          <SectionSeperator></SectionSeperator>
          <ParallaxImage></ParallaxImage>
          <GenericSection sectionNumber={"02"}></GenericSection>
          <SectionSeperator></SectionSeperator>
          <GenericSection sectionNumber={"03"}></GenericSection>
            <SectionSeperator></SectionSeperator>
        </Section>
    );
};




export default AboutIndex;