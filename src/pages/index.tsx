// Step 1: Import React
import React, {useEffect, useState} from 'react';
import LandingIndex from 'components/landing'
import mainTheme, { darkColor, lightColor } from 'styles/theme'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import { GlobalStyle } from 'styles/globalStyles'
import AboutIndex from 'components/about';
import NavBar from 'components/navigation/navBar';
import Footer from 'components/navigation/footer';

const ColorChange = keyframes`
  0% {
    background-color: ${darkColor};
  }
  100% {
    background-color: ${lightColor};
  }
`;

const NoColorChange = keyframes`
  0% {
    background-color: ${lightColor};
  }
  100% {
    background-color: ${darkColor};
  }
`;


interface BackgroundColorProps{
  lightBg: boolean;
}
const BackgroundColor = styled.html.attrs(props =>
  ({
    lightBg: props.lightBg 
  }))<BackgroundColorProps>`
    /* background-color: ${props => props.lightBg ? props.theme.palette.light : props.theme.palette.dark}; */
    animation-name: ${props => props.lightBg ? ColorChange : NoColorChange};
    animation-duration: 0.8s;
    animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955) ;
    animation-fill-mode: both;
    padding: 20px;
`;




const IndexPage = () => {
  // keep track of scroll pos 
  // for changing background color + image zoom
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lightBg, setLightBg] = useState(false)
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        // console.log(position)
        setLightBg(position > 150 ? true : false)
        
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const defaultWidth = 700
    let scrollWidth =  1 + (defaultWidth + scrollPosition)/1000
    

  return (
      <ThemeProvider theme={mainTheme}>
        <BackgroundColor lightBg={lightBg}>
          <GlobalStyle/>
          <NavBar></NavBar>
          <body style={{
            height: "100%",
            minHeight: "100%"
          }}>
          <LandingIndex scrollWidth={scrollWidth}></LandingIndex>
          <AboutIndex></AboutIndex>
          </body>
          <Footer></Footer>
        </BackgroundColor>
      </ThemeProvider>
  
     
  )
}


export default IndexPage