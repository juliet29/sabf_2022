import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby';
// import styled from 'styled-components';



interface ParallaxImage2Props {
    // imageName: string;
}

const ParallaxImage2: React.FC<ParallaxImage2Props> = ({ }) => {
    const { desktop } = useStaticQuery(
        graphql`
          query {
            desktop: file(relativePath: { eq: "meeting.jpg"}) {
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
          <BackgroundImage
                  Tag="div"
                  fluid={imageData}
                  alt="city"
                  role="img"
                  style ={{
                    height: "80vh"
                  }}
                  // backgroundColor={`#040e18`}
                  // title="Fullscreen Background"
                  // id="fullscreenbg"
                  // aria-label="Fullscreen Background"
                  // preserveStackingContext={true}
              >
                  {/* bg image should be here! */}
          </BackgroundImage>
    );
};




export default ParallaxImage2;
