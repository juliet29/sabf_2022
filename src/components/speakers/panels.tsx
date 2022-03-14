import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { primaryAccentColor } from 'styles/theme';
import { panels } from './panelsData';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/400-italic.css';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { devices } from 'styles/responsiveSizes';
import { faPeriscope } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.div`
  margin-top: 0.8em;
`;

const StyledAnchorLink = styled(AnchorLink)`
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
  @media ${devices.laptopMin} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > p:first-child {
      max-width: 60%;
      font-size: 1em;
    }
  } ;
`;

const BottmDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1em;

  @media ${devices.laptopMin} {
    margin-top: 4em;
    position: relative;
  } ;
`;

interface ScrollPanelMenuProps {
  visibility: boolean;
}
const ScrollPanelMenu = styled.div<ScrollPanelMenuProps>`
  display: none;
  @media ${devices.laptopMin} {
    display: block;
    min-width: 12em;
    position: fixed;
    bottom: 10em;
    p {
      margin-bottom: 0.5em;
    }
    visibility: ${(props) => (props.visibility ? 'visble' : 'hidden')};
    opacity: ${(props) => (props.visibility ? 1 : 0)};
    transition: visibility 0s, opacity 0.5s linear;
  } ;
`;

const PanelHolder = styled.div`
  h3 {
    font-weight: 600;
  }
  @media ${devices.laptopMin} {
    margin-left: 12em;
  } ;
`;

const PanelItem = styled.div`
  margin-bottom: 2em;
  max-width: 80%;
  > p:first-of-type {
    margin-top: 0.2em;
    margin-bottom: 0.5em;
    color: ${primaryAccentColor};
    font-weight: 400;
    font-style: italic;
  }
`;

interface PanelsProps {
  // : string;
}

const Panels: React.FC<PanelsProps> = ({}) => {
  // visibility of panel componennt
  const [isVisible, setIsVisible] = useState(true);
  // height of bottom div that holds the panel component
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  console.log('height', height);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    // determine top height of bottom div
    setHeight(ref.current.scrollTop);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 1000;
    let heightToHideBefore = 260;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(winScroll);

    if (winScroll < heightToHideBefore) {
      //   console.log('hide');
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else if (winScroll > heightToHideFrom) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

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

      <BottmDiv ref={ref}>
        {/* {isVisible && ( */}
        <ScrollPanelMenu visibility={isVisible}>
          {panels.map((item) => (
            <StyledAnchorLink to={'/speakers#' + item.link}>
              <p>{'0' + item.number + ' ' + item.link}</p>
            </StyledAnchorLink>
          ))}
        </ScrollPanelMenu>
        {/* )} */}

        <PanelHolder>
          {panels.map((item) => (
            <PanelItem id={item.link}>
              <h3>{'0' + item.number + ' ' + item.title}</h3>
              <p>{item.name + ' Panel'}</p>
              <p>{item.text}</p>
            </PanelItem>
          ))}
        </PanelHolder>
      </BottmDiv>
    </Wrapper>
  );
};

export default Panels;
