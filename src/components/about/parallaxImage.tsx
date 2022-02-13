import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';


export const StyledFullScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* display: flex; */
  overflow: hidden;
`
const StyledBackgroundImage = styled(BackgroundImage)`
    height: 100vh;

  
`;

interface ParallaxImageProps {
    // : string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({  }) => {
    const { desktop } = useStaticQuery(
        graphql`
          query {
            desktop: file(relativePath: { eq: "city.jpg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        `
      )

    // Single Image Data
    const imageData = desktop.childImageSharp.fluid

    return (
        <StyledFullScreenWrapper>
        <StyledBackgroundImage
                Tag="div"
                fluid={imageData}
                alt="city"
                // backgroundColor={`#040e18`}
                // title="Fullscreen Background"
                // id="fullscreenbg"
                role="img"
                // aria-label="Fullscreen Background"
                // preserveStackingContext={true}
            >
                bg image should be here!
        </StyledBackgroundImage>
        </StyledFullScreenWrapper>
    );
};

export default ParallaxImage;
