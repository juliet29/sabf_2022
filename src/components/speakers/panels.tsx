import React from 'react';
import styled from 'styled-components';
import { primaryAccentColor } from 'styles/theme';
import { panels } from './panelsData';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/400-italic.css';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Wrapper = styled.div`
  /* background-color: blueviolet; */
  margin-top: 0.8em;

  h3 {
    margin-top: 1.3em;
    font-weight: 600;
  }

  /* p:nth-of-type(1) {
    margin-bottom: 0.5em;
    color: ${primaryAccentColor};
    font-weight: 100;
    font-style: italic;
  } */
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

const PanelItem = styled.div``;

const PanelMenu = styled.div`
  p {
    margin-bottom: 0.4em;
  }
`;

const PanelName = styled.p`
  margin-bottom: 0.5em;
  color: ${primaryAccentColor};
  font-weight: 400;
  font-style: italic;
`;

interface PanelsProps {
  // : string;
}

const Panels: React.FC<PanelsProps> = ({}) => {
  return (
    <Wrapper>
      <PanelMenu>
        {panels.map((item) => (
          <StyledAnchorLink to={'/speakers#' + item.link}>
            <p>{'0' + item.number + ' ' + item.link}</p>
          </StyledAnchorLink>
        ))}
      </PanelMenu>

      {panels.map((item) => (
        <PanelItem id={item.link}>
          <h3>{'0' + item.number + ' ' + item.title}</h3>
          <PanelName>{item.name + ' Panel'}</PanelName>
          <p>{item.text}</p>
        </PanelItem>
      ))}
    </Wrapper>
  );
};

export default Panels;
