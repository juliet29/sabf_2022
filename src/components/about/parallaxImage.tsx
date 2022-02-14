import React from 'react';
import BackgroundImage from 'gatsby-background-image'


interface ParallaxImageProps {
    imageFluid:  any;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ imageFluid}) => {
    return (
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
