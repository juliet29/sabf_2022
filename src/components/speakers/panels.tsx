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
import { useWindowSize } from 'hooks/window-size';

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
    position: fixed;
    top: 20%;
    p {
      margin-bottom: 0.5em;
    }
  } ;
`;

interface PanelsProps {
  data: SpeakersPageQueryQuery;
}

const Panels: React.FC<PanelsProps> = ({ data }) => {
  const panelHolderRef = useRef();
  // const width = useWindowSize()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const groupSelector = gsap.utils.selector(panelHolderRef);
    let revealContainers = groupSelector('.group');
    console.log(revealContainers);
    revealContainers.forEach((container) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: 'restart none none reset'
        }
      });
      tl.from(container, {
        opacity: 0,
        yPercent: -10,
        duration: 1,
        ease: 'power2.easeOut'
      });
    });
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
        <div ref={panelHolderRef}>
          <PanelHolder>
            {panels.map((item) => (
              <div className="group">
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
              </div>
            ))}
          </PanelHolder>
        </div>
      </BottmDiv>
    </Wrapper>
  );
};

export default Panels;
