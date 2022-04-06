import React from 'react';
import styled from 'styled-components';
import { SectionSeperator } from 'styles/sharedStyles';
import GenericSection from './genericSection';
import { IndexPageImageQueryQuery } from '../../../graphql-types';
import ScrollingSection from './scrolling/scrolling';
import Countdown from './countdown';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const kem = '../../assets/kem.jpeg';

const Section = styled.section`
  /* color: black; */
  /* margin: 0 10%; */
`;

const ImageHolder = styled.div`
  width: 80%;
  max-height: 50vh;
  margin: auto;
  display: block;
  display: flex;
  justify-content: center;

  img {
    object-fit: contain;
    height: 50vh;
  }
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
      <Countdown></Countdown>
      <Link to="/attend">
        <ImageHolder>
          <StaticImage src={kem} alt="" />
        </ImageHolder>
      </Link>

      {/* <ParallaxImage
        imageFluid={data.imageOne?.childImageSharp?.fluid}
      ></ParallaxImage> */}
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
