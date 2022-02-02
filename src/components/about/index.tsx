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
            {/* <title>{data.site.siteMetadata.title}</title> */}
            
            {/* <header>{data.site.siteMetadata.title}</header> */}
            <AboutSection></AboutSection>
            <SectionSeperator></SectionSeperator>
        </Section>
    );
};




export default AboutIndex;