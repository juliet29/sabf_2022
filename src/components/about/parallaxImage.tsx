import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import { ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';


interface ParallaxImageProps {
    imageFluid:  any;
}

const ParallaxMediaQuery = styled.div`
        @media ${devices.mobileL} {
            display: none;
        }
  
`;



const ParallaxImage: React.FC<ParallaxImageProps> = ({ imageFluid}) => {
    return (
        // <ParallaxBanner
        //     layers={[{ image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png', speed: -15 }]}
        // />
        <ParallaxMediaQuery>
          <BackgroundImage
                  Tag="div"
                  fluid={imageFluid}
                  role="img"
                  style ={{
                    height: "90vh"
                  }}
              >
                  {/* bg image should be here! */}
          </BackgroundImage>
          </ParallaxMediaQuery>
    );
};




export default ParallaxImage;
