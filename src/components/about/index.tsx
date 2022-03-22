import React from 'react';
import styled from 'styled-components';
import { SectionSeperator } from 'styles/sharedStyles';
import GenericSection from './genericSection';
import ParallaxImage from './parallaxImage';
import { IndexPageImageQueryQuery } from '../../../graphql-types';
import ScrollingSection from './scrolling/scrolling';

const Section = styled.section`
  /* color: black; */
  /* margin: 0 10%; */
`;

interface AboutIndexProps {
  data: IndexPageImageQueryQuery;
}

const AboutIndex: React.FC<AboutIndexProps> = ({ data }) => {
  return (
    <Section>
      {/* <Link to="/attend">Join Us Online + In-Person</Link> */}
      <GenericSection sectionNumber={'01'}></GenericSection>
      <SectionSeperator></SectionSeperator>

      <ParallaxImage
        imageFluid={data.imageOne?.childImageSharp?.fluid}
      ></ParallaxImage>
      <SectionSeperator></SectionSeperator>
      <GenericSection sectionNumber={'02'}></GenericSection>
      <SectionSeperator></SectionSeperator>
      <ScrollingSection></ScrollingSection>
      <SectionSeperator></SectionSeperator>
      <GenericSection sectionNumber={'03'}></GenericSection>
      <SectionSeperator></SectionSeperator>
      {/* <ParallaxImage imageFluid={data.imageTwo?.childImageSharp?.fluid}></ParallaxImage> */}
    </Section>
  );
};

export default AboutIndex;
