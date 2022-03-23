import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { primaryAccentColor } from 'styles/theme';
import { panels } from './panelsData';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/600-italic.css';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { devices } from 'styles/responsiveSizes';
import CardGrid from 'components/general/cardGrid';
import { SpeakersPageQueryQuery } from '../../../graphql-types';
// import ScrollMenu from './scrollMenu';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

const scrollPanelOffset = 15 + 'em';

const Wrapper = styled.div`
  margin-top: 0.8em;
`;

export const StyledAnchorLink = styled(AnchorLink)`
  color: ${primaryAccentColor};
  text-decoration: none;
  transition: all 0.5s;
  :hover {
    color: white;
  }
  font-weight: 200;
  font-style: normal;
`;

const PanelMenu = styled.div`
  p {
    margin-bottom: 0.4em;
  }
  @media ${devices.laptopMin} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.2em;
    grid-template-rows: repeat(4, 1fr);
    grid-auto-flow: column;
    p {
      margin: 0;
    }
  } ;
`;

const TopDiv = styled.div`
  > p:first-child {
    margin-bottom: 1em;
  }
  @media ${devices.laptopMin} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > p:first-child {
      max-width: 60%;
      font-size: 1em;
      margin-bottom: 0;
    }
  } ;
`;

const BottmDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1em;
  position: relative;
  /* margin-bottom: 2em; */

  @media ${devices.laptopMin} {
    margin-top: 4em;
    position: relative;
  } ;
`;

const PanelHolder = styled.div`
  h3 {
    font-weight: 600;
  }
  @media ${devices.laptopMin} {
    margin-left: ${scrollPanelOffset};
  } ;
`;

const PanelItem = styled.div`
  margin-bottom: 1em;

  > p:first-of-type {
    margin-top: 0.2em;
    margin-bottom: 0.8em;
    color: ${primaryAccentColor};
    font-weight: 600;
    font-style: italic;
  }
  @media ${devices.laptopMin} {
    max-width: 80%;
    h3 {
      font-size: 1.5em;
    }
  } ;
`;

const PanelGroup = styled.div`
  margin-bottom: 2em;
  @media ${devices.laptopMin} {
    margin-bottom: 7em;
  }
`;

const ScrollPanelMenu = styled.div`
  display: none;
  @media ${devices.laptopMin} {
    display: block;
    min-width: ${scrollPanelOffset};
    position: absolute;
    top: 1em;
    p {
      margin-bottom: 0.5em;
    }
  } ;
`;

interface PanelsProps {
  data: SpeakersPageQueryQuery;
}

const Panels: React.FC<PanelsProps> = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  const panelHolderRef = useRef();
  const scrollMenuRef = useRef();
  useLayoutEffect(() => {
    // pin scroll menu
    gsap.to(scrollMenuRef.current, {
      scrollTrigger: {
        trigger: panelHolderRef.current,
        start: 'top 140',
        endTrigger: panelHolderRef.current,
        end: 'bottom',
        // markers: true,
        pin: scrollMenuRef.current,
        scrub: true
      }
    });
    // hide scroll menu after panelHolder
    gsap.fromTo(
      scrollMenuRef.current,
      {
        opacity: 1
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: panelHolderRef.current,
          start: 'bottom',
          scrub: true
          // markers: true
        }
      }
    );

    // .from('.scrollMenu', { opacity: 0 })
    // .to('.scrollMenu', { y: -100 });
  });

  return (
    <Wrapper>
      <TopDiv>
        <p>
          Our panels will feature invited guests from a diverse range of
          industries. These thought-leaders will share their expertise about
          everything from healthcare to cryptocurrency, and the innovations
          taking place on the African continent. Stay tuned for profiles of our
          amazing panelists.
        </p>
        <PanelMenu>
          {panels.map((item) => (
            <StyledAnchorLink to={'/speakers#' + item.link}>
              <p>{'0' + item.number + ' ' + item.link}</p>
            </StyledAnchorLink>
          ))}
        </PanelMenu>
      </TopDiv>

      <BottmDiv id="bottomDiv">
        <ScrollPanelMenu ref={scrollMenuRef} className="scrollMenu">
          {panels.map((item) => (
            <StyledAnchorLink to={'/speakers#' + item.link}>
              <p>{'0' + item.number + ' ' + item.link}</p>
            </StyledAnchorLink>
          ))}
        </ScrollPanelMenu>
        <PanelHolder ref={panelHolderRef}>
          {panels.map((item) => (
            <PanelGroup>
              <PanelItem id={item.link}>
                <h3>{'0' + item.number + ' ' + item.title}</h3>
                <p>{item.name + ' Panel'}</p>
                <p>{item.text}</p>
              </PanelItem>

              <CardGrid
                panelNodes={
                  data[item.link as keyof typeof data]
                    ? data[item.link as keyof typeof data].nodes
                    : undefined
                }
              ></CardGrid>
            </PanelGroup>
          ))}
        </PanelHolder>
      </BottmDiv>
    </Wrapper>
  );
};

export default Panels;
