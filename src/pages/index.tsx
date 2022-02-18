// Step 1: Import React
import React from 'react';
import LandingIndex from 'components/landing'
import mainTheme from 'styles/theme'
import styled, { ThemeProvider,  } from 'styled-components'
import { GlobalStyle } from 'styles/globalStyles'
import AboutIndex from 'components/about';
import NavBar from 'components/navigation/navBar';
import Footer from 'components/navigation/footer';
import { graphql } from 'gatsby';
import {IndexPageImageQueryQuery } from '../../graphql-types'
import { ParallaxProvider } from 'react-scroll-parallax';
import { devices } from 'styles/responsiveSizes';


// import { fluidImage } from 'hooks/fluid-image';

const HTML = styled.html`
@media ${devices.mobileL} {
  /* overflow-x: hidden; */
  /* height: 150vh; */
}
`;

// styles ------------------
const Body = styled.body`
  height: 100%;
  min-height: 100%;
  perspective: 10px;
  transform-style: preserve-3d; 
  overflow-x:hidden;
  /* overflow-y:auto; */

`;

// end of styles ------------------
interface IndexPageProps {
  data: IndexPageImageQueryQuery;
}

const IndexPage: React.FC<IndexPageProps> = ({data}) => {
  // console.log("Index Page", data.imageOne)
  return (
      <ThemeProvider theme={mainTheme}>
          <GlobalStyle/>
          <ParallaxProvider>
          <HTML>
            
          <NavBar></NavBar>
          <Body>
          <LandingIndex  data={data}></LandingIndex>
          <AboutIndex data={data}></AboutIndex>
          </Body>
          <Footer></Footer>
          </HTML>
          </ParallaxProvider>
      </ThemeProvider>
  
     
  )
}


export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;


export const query = graphql`
  query IndexPageImageQuery {
    imageOne: file(relativePath: { eq: "city.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "meeting.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "ship.jpg" }) {
      ...fluidImage
    }

    imageFour: file(relativePath: { eq: "spinThing.png" }) {
      ...fluidImage
    }

    imageFive: file(relativePath: { eq: "street.jpg" }) {
      ...fluidImage
    }
  }
`


export default IndexPage