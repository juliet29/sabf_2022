import React from 'react';
import NavBar from './navBar';
import mainTheme from 'styles/theme'
import styled, { ThemeProvider} from 'styled-components'
import { GlobalStyle } from 'styles/globalStyles'
import {edgeSpace } from 'styles/theme';
import Footer from './footer';
import { devices } from 'styles/responsiveSizes';


// const Body = styled.body`
//   padding-left: ${edgePadding};
//   padding-right: 10em;
// `;
const Header = styled.header`
  /* background-color: rebeccapurple; */
  margin-top: ${edgeSpace + "em"};;
  padding-left: ${edgeSpace*2 + "em"};
  padding-right: ${edgeSpace*2 + "em"};
  /* border-bottom: 1px solid rgba(255,255,255,.25); */
  @media ${devices.mobileL} {
    padding: 0;
    margin: auto;
    width: 70%;
  }

  div {
    height: 1px;
    width: 50%;
    background-color: white;
    @media ${devices.mobileL} {
        width: 80%;
  }
}
`

export const Section = styled.section`
  margin-top: ${edgeSpace + "em"};
  padding-left: ${edgeSpace*2 + "em"};
  padding-right: ${edgeSpace*2 + "em"};
  @media ${devices.mobileL} {
    padding: 0;
    margin: auto;
    width: 70%;
    margin-top: 20px;
  }
`;



interface LayoutProps {
    pageTitle:string;
    children: React.ReactNode
    // : string;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
    return (
        <ThemeProvider theme={mainTheme}>
            <GlobalStyle/>
                <title>SABF - {pageTitle}</title>
                <div style={{
                        height: "100%",
                        minHeight: "90vh"
                    }}>
                    <NavBar></NavBar>
                    <Header>
                        <h1>{pageTitle}</h1>
                        <div></div>
                    </Header>
                    <Section>{children}</Section>
                    
                </div>
                <Footer></Footer>
            
        </ThemeProvider>
    );
};

export default Layout;
