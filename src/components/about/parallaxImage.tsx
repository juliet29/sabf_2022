import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import { ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { StaticImage } from 'gatsby-plugin-image';
// import c from "../../assets/city.jpg"


interface ParallaxImageProps {
    imageFluid:  any;
}

const ParallaxMediaQuery = styled.div`
        @media ${devices.mobileL} {
            display: none;
        }
  
`;


const city = "../../assets/city.jpg"
const ParallaxImage: React.FC<ParallaxImageProps> = ({ imageFluid}) => {
    return (
        // <ParallaxBanner
        //     layers={[{ image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png', speed: -15 }]}
        // />
        <ParallaxMediaQuery>
                <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
                <StaticImage
                    style={{
                    gridArea: "1/1",
                    // You can set a maximum height for the image, if you wish.
                    maxHeight: "100vh",
                    }}
                    layout="fullWidth"
                    // You can optionally force an aspect ratio for the generated image
                    // aspectRatio={3 / 1}
                    // This is a presentational image, so the alt should be an empty string
                    alt=""
                    // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                    src={
                    city
                    }
                    formats={["auto", "webp", "avif"]}
                />
                </div>

          </ParallaxMediaQuery>
    );
};




export default ParallaxImage;


