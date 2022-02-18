import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {edgeSpace, primaryAccentColor, secondaryAccentColor } from 'styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagramSquare, faTwitterSquare, faLinkedin, faYoutubeSquare} from '@fortawesome/free-brands-svg-icons'
import { devices, mobileLBreakpoint } from 'styles/responsiveSizes';
import { useWindowSize } from 'hooks/window-size';

const StyledFooter = styled.footer`
  margin-top: 20vh;
  padding: ${edgeSpace + "em"};
  padding-top: 7em;
  padding-left: 7em;
  @media ${devices.mobileL} {
    padding-top: 2em;
   padding-left: 2em;
   padding-right: 2em;
 }
  /* padding-top: ; */
  /* padding-right: ${edgeSpace + "em"}; */
  /* background-color: ${secondaryAccentColor}; */
  display: flex;
  flex-direction: row;
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: ${primaryAccentColor};
  /* background: rgb(36,71,127);
  background: linear-gradient(180deg, rgba(36,71,127,1) 0%, rgba(37,88,254,1) 51%, rgba(54,101,255,1) 100%); */

  
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
    transition:  0.1s all ease-in-out;
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
    transition:  0.3s all ease-in-out;

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


const instagramLink = "https://www.instagram.com/stanford_abc/?hl=en"
const twitterLink = "https://twitter.com/stanfordabf"
const youTubeLink = "https://www.youtube.com/channel/UCwJjlor3HDcRayDtd_NqiBg"
const linkedinLink = "https://www.linkedin.com/company/stanfordabf/"

interface FooterProps {
    // : string;
}

const Footer: React.FC<FooterProps> = ({  }) => {
    // let width = window.innerWidth;
    const { width } = useWindowSize()  
   
    return (
        
       <StyledFooter>
           <LeftColumn>
            <FooterMenu>
                <FooterMenuItem to="/"><h2>01 About</h2></FooterMenuItem>
                <FooterMenuItem to="/attend"><h2>02 Events</h2></FooterMenuItem>
                <FooterMenuItem to="/team"><h2>03 History</h2></FooterMenuItem>
                <FooterMenuItem to="/press"><h2>04 Sponsors</h2></FooterMenuItem>
            </FooterMenu>
           </LeftColumn>
           <RightColumn>
               <SocialLinksMenu>
                   <div>
                   <SocialLinksItem href={instagramLink}> <FontAwesomeIcon icon={faInstagramSquare} size="3x" /></SocialLinksItem>
                   <SocialLinksItem href={youTubeLink}> <FontAwesomeIcon icon={faYoutubeSquare} size="3x" /></SocialLinksItem>
                   </div>
                   <div>
                   <SocialLinksItem href={linkedinLink}> <FontAwesomeIcon icon={faLinkedin} size="3x" /></SocialLinksItem>
                   <SocialLinksItem href={twitterLink}> <FontAwesomeIcon icon={faTwitterSquare} size="3x" /></SocialLinksItem>
                   </div>
               </SocialLinksMenu>
               <TextInfo>
               {/* <p>Please direct all inquiries to <br/> gsb_africabusinessforumleadership@stanford.edu.</p>  */}
                   {
                       width > mobileLBreakpoint ?  <p>Please direct all inquiries to <br/> gsb_africabusinessforumleadership@stanford.edu.</p> :
                       <p>Please direct all inquiries to <br/> gsb_africabusinessforum <br/> -leadership@stanford.edu.</p>
                   }
                   
                   <p>Sign up to attend the event <Link to="/attend" style={{color: 'white'}}>here</Link>.</p>
               </TextInfo>
           </RightColumn>
           

       </StyledFooter>
    );
};

export default Footer;
