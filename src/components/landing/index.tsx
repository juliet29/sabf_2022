import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import {
  LandingStyledLink,
  SectionSeperator,
  StyledLink
} from 'styles/sharedStyles';
import { GridHolder } from 'styles/sharedStyles';
import { primaryAccentColor } from 'styles/theme';
import { IndexPageImageQueryQuery } from '../../../graphql-types';
import { spin } from './animations';
import './cursor.css';
import { Grid } from './styledGrid';
import { shinyLink } from './animations';
// import {spinThing} from "./spinThing.png"

// interface
// interface RoundMouseProps{
//     x: number | null;
//     y: number | null;
//

// start styled components

const Section = styled.section`
  height: 85vh;
  margin: 0 14%;
  position: relative;
  /* overflow: hidden; */
  margin-bottom: 5em;
  @media ${devices.mobileL} {
    height: initial;
    margin-bottom: 0;
  }
`;

const SpinThing = styled.div`
  /* position: absolute; */
  width: 5vw;
  transform-origin: center;
  height: min-content;
  bottom: 0;
  animation: ${spin} 4s ease 1;
  animation-delay: calc(2 * 0.05s);
  /* transition: transform  3s ease 1; */
  :hover {
    animation: ${spin} 4s ease 1;
    /* display: none; */
  }

  @media ${devices.mobileL} {
    animation: none;
  }
`;

const SpinHolder = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: row;
  height: min-content;
  width: 100%;
  justify-content: space-between;
  @media ${devices.mobileL} {
    margin: 0;
    margin-top: 1em;
    width: 90%;
  }
`;

const OverFlowHiddenDiv = styled.div`
  overflow: hidden;
`;

export const StyledCTA = styled(Link)`
  /* background-color: ${primaryAccentColor}; */
  border: 1px solid ${primaryAccentColor};
  padding: 4px;
  text-decoration: none;
  color: ${primaryAccentColor};
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-top: 0.5em;
  font-size: clamp(1.3em, 1.9em, 2.1em);

  // animation
  :before {
    position: absolute;
    content: '';
    display: inline-block;
    top: -0;
    left: 0;
    /* width: 30px; */
    height: 100%;
    width: 100%;
    background-color: #fff;
    animation: ${shinyLink} 5s ease-in-out infinite;
  }

  :after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${primaryAccentColor};
    transition: all 0.3s ease;
  }

  :hover {
    color: white;
    border: none;
  }
  :hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }

  :hover:before {
    animation: none;
    display: none;
  }
`;

const spinSrc = '../../assets/spinThing.png';
interface LandingIndexProps {
  data: IndexPageImageQueryQuery;
}
const LandingIndex: React.FC<LandingIndexProps> = ({ data }) => {
  return (
    <>
      <Section>
        <div></div>

        <GridHolder>
          <Grid>
            <div>
              <p>14th Annual</p>
              <h1>Stanford</h1>
            </div>

            <div>
              <h1>
                Africa <br />
                Business
              </h1>
            </div>

            <div>
              <h1> Forum</h1>
            </div>

            <div>
              <div>
                <div></div>
              </div>
              <OverFlowHiddenDiv>
                <h2>
                  African Innovation <br />{' '}
                  <span>Shaping the Global Future</span>
                </h2>
                <p>April 16, 2022</p>
                <StyledCTA to="/attend">BUY TICKETS NOW</StyledCTA>
                {/* <LandingStyledLink  to="/attend">Join Us Online + In-Person</LandingStyledLink> */}
              </OverFlowHiddenDiv>
            </div>
          </Grid>
        </GridHolder>
        <SpinHolder>
          <SpinThing>
            <StaticImage src={spinSrc} alt={''} aspectRatio={1} />
          </SpinThing>
          <SpinThing>
            <StaticImage src={spinSrc} alt={''} aspectRatio={1} />
          </SpinThing>
          <SpinThing>
            <StaticImage src={spinSrc} alt={''} aspectRatio={1} />
          </SpinThing>
          <SpinThing>
            <StaticImage src={spinSrc} alt={''} aspectRatio={1} />
          </SpinThing>
        </SpinHolder>

        <SectionSeperator></SectionSeperator>
      </Section>
    </>
  );
};

export default LandingIndex;
