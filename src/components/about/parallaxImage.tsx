import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import { ParallaxBanner } from 'react-scroll-parallax';


interface ParallaxImageProps {
    imageFluid:  any;
}



const ParallaxImage: React.FC<ParallaxImageProps> = ({ imageFluid}) => {
    return (
        // <ParallaxBanner
        //     layers={[{ image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png', speed: -15 }]}
        // />
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
    );
};




export default ParallaxImage;
