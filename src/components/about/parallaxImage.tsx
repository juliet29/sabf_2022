import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby';
import { FluidImageFragment, IndexPageImageQueryQuery, Unnamed_1_Query, Unnamed_1_QueryVariables } from '../../../graphql-types';
// import styled from 'styled-components';


// const StyledFullScreenWrapper = styled.div`
//   width: 100%;
//   height: 80vh;
//   /* display: flex; */
//   overflow: hidden;
// `

// const StyledBgImage = styled(BackgroundImage)`
//     height: 80vh;


  
// `;


interface ParallaxImageProps {
    imageFluid:  any;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ imageFluid}) => {
  // console.log("P Image", data)
    // const { desktop } = useStaticQuery(
    //     graphql`
    //       query {
    //         desktop: file(relativePath: { eq: "city.jpg"}) {
    //           childImageSharp {
    //             fluid(quality: 90, maxWidth: 4160) {
    //               ...GatsbyImageSharpFluid_withWebp_tracedSVG
    //             }
    //           }
    //         }
    //       }
    //     `
    //   )

    // Single Image Data
    // const imageData = desktop.childImageSharp.fluid

    return (
          <BackgroundImage
                  Tag="div"
                  fluid={imageFluid}
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




export default ParallaxImage;
