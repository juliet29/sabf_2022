import { Link } from 'gatsby';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  edgeSpace,
  primaryAccentColor,
  secondaryAccentColor
} from 'styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagramSquare,
  faTwitterSquare,
  faLinkedin,
  faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons';
import { devices, mobileLBreakpoint } from 'styles/responsiveSizes';
import { useWindowSize } from 'hooks/window-size';
import { gsap } from 'gsap';

const StyledFooter = styled.footer`
  > a {
    text-decoration: none;
  }
`;

const FooterContent = styled.div`
  margin-top: 10vh;
  padding: ${edgeSpace + 'em'};
  padding-top: 7em;
  padding-left: 7em;
  @media ${devices.mobileL} {
    padding-top: 2em;
    padding-left: 2em;
    padding-right: 2em;
  }

  display: flex;
  flex-direction: row;
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: ${primaryAccentColor};
`;

const LeftColumn = styled.div`
  /* background-color: orange; */
  flex-grow: 2;
  @media ${devices.mobileL} {
    /* padding-left: 2em; */
    flex-grow: 1;
  }
`;

const RightColumn = styled.div`
  /* background-color: pink; */
  flex-grow: 1;
  @media ${devices.mobileL} {
    /* padding-left: 2em; */
    font-size: 0.5em;
  }
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FooterMenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  flex-grow: 1;
  /* margin-bottom: 1em; */
  transition: 0.1s all ease-in-out;
  display: inline-block;
  width: content;

  h2:hover {
    display: inline-block;
    text-decoration: underline;
    color: ${secondaryAccentColor};
  }
`;

const SocialLinksMenu = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  div {
    display: flex;
    flex-direction: row;
    column-gap: 2em;
    @media ${devices.mobileL} {
      column-gap: 3em;
      row-gap: 2em;
    }
  }
`;

const SocialLinksItem = styled.a`
  color: white;
  transition: 0.3s all ease-in-out;

  :hover {
    color: ${secondaryAccentColor};
  }
`;

const TextInfo = styled.div`
  margin-top: 4em;
  p {
    margin-bottom: 1em;
  }
`;

const ScrollingFooter = styled.div`
  display: none;
  @media ${devices.laptopMin} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* background-color: olivedrab; */
    margin-bottom: 1em;
    height: 10vh;
    font-size: 2em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.1em 0;
    border-top: solid white 3px;
    border-bottom: solid white 3px;
    color: white;

    p {
      margin: 0;
      height: min-content;
      align-self: center;
    }
  } ;
`;

const instagramLink = 'https://www.instagram.com/stanford_abc/?hl=en';
const twitterLink = 'https://twitter.com/stanfordabf';
const youTubeLink = 'https://www.youtube.com/channel/UCwJjlor3HDcRayDtd_NqiBg';
const linkedinLink = 'https://www.linkedin.com/company/stanfordabf/';

interface FooterProps {
  // : string;
}

const Footer: React.FC<FooterProps> = ({}) => {
  const scrollFooterRef = useRef();

  useEffect(() => {
    gsap.to(scrollFooterRef.current, {
      rotation: '+=360'
    });
  });
  // let width = window.innerWidth;
  const { width } = useWindowSize();

  return (
    <StyledFooter>
      <Link to="attend">
        <ScrollingFooter useRef={scrollFooterRef}>
          <p>Forum is April 16, 2022</p>
          <p>Get your tickets now</p>
        </ScrollingFooter>
      </Link>

      <FooterContent>
        <LeftColumn>
          <FooterMenu>
            <FooterMenuItem to="/">
              <h2>01 About</h2>
            </FooterMenuItem>
            <FooterMenuItem to="/attend">
              <h2>02 Events</h2>
            </FooterMenuItem>
            <FooterMenuItem to="/team">
              <h2>03 Team</h2>
            </FooterMenuItem>
            <FooterMenuItem to="/press">
              <h2>04 Press</h2>
            </FooterMenuItem>
          </FooterMenu>
        </LeftColumn>
        <RightColumn>
          <SocialLinksMenu>
            <div>
              <SocialLinksItem href={instagramLink}>
                {' '}
                <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
              </SocialLinksItem>
              <SocialLinksItem href={youTubeLink}>
                {' '}
                <FontAwesomeIcon icon={faYoutubeSquare} size="3x" />
              </SocialLinksItem>
            </div>
            <div>
              <SocialLinksItem href={linkedinLink}>
                {' '}
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </SocialLinksItem>
              <SocialLinksItem href={twitterLink}>
                {' '}
                <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
              </SocialLinksItem>
            </div>
          </SocialLinksMenu>
          <TextInfo>
            {/* <p>Please direct all inquiries to <br/> gsb_africabusinessforumleadership@stanford.edu.</p>  */}
            {width > mobileLBreakpoint ? (
              <p>
                Please direct all inquiries to <br />{' '}
                gsb_africabusinessforumleadership@stanford.edu.
              </p>
            ) : (
              <p>
                Please direct all inquiries to <br /> gsb_africabusinessforum{' '}
                <br /> -leadership@stanford.edu.
              </p>
            )}

            <p>
              Sign up to attend the event{' '}
              <Link to="/attend" style={{ color: 'white' }}>
                here
              </Link>
              .
            </p>
          </TextInfo>
        </RightColumn>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
