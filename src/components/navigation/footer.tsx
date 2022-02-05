import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {edgeSpace, secondaryAccentColor } from 'styles/theme';

const StyledFooter = styled.footer`
  margin-top: ${edgeSpace + "em"};;
  padding-left: ${edgeSpace + "em"};
  padding-right: ${edgeSpace + "em"};
  background-color: ${secondaryAccentColor};
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: 100%;

  
`;

const LeftColumn = styled.div`
    background-color: orange;
    flex-grow: 1.5;
  
`;

const RightColumn = styled.div`
    background-color: pink;
    flex-grow: 1;
  
`;

const FooterMenu = styled.div`
    display: flex;
    flex-direction: column;
  
`;

const FooterMenuItem = styled(Link)`
    color: white;
    text-decoration: none;
    margin-bottom: 1em;
  
`;

const SocialLinksMenu = styled.div`
  
`;

const SocialLinksItem = styled(Link)`
  
`;

const TextInfo = styled.div`
  
`;


const instagramLink = "https://www.instagram.com/stanford_abc/?hl=en"

interface FooterProps {
    // : string;
}

const Footer: React.FC<FooterProps> = ({  }) => {
    return (

       <StyledFooter>
           <LeftColumn>
            <FooterMenu>
                <FooterMenuItem to="/"><h2>About</h2></FooterMenuItem>
                <FooterMenuItem to="/attend"><h2>Events</h2></FooterMenuItem>
                <FooterMenuItem to="/team"><h2>About</h2></FooterMenuItem>
                <FooterMenuItem to="/press"><h2>About</h2></FooterMenuItem>
            </FooterMenu>
           </LeftColumn>
           <RightColumn>
               <SocialLinksMenu>
                   <SocialLinksItem to={instagramLink} >i</SocialLinksItem>
                   <SocialLinksItem to={instagramLink} >i</SocialLinksItem>
                   <SocialLinksItem to={instagramLink} >i</SocialLinksItem>
                   <SocialLinksItem to={instagramLink} >i</SocialLinksItem>
               </SocialLinksMenu>
               <TextInfo></TextInfo>
           </RightColumn>
           

       </StyledFooter>
    );
};

export default Footer;
