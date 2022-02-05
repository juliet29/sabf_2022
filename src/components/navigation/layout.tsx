import React from 'react';
import NavBar from './navBar';
import mainTheme from 'styles/theme'
import styled, { ThemeProvider} from 'styled-components'
import { GlobalStyle } from 'styles/globalStyles'
import {edgeSpace } from 'styles/theme';


// const Body = styled.body`
//   padding-left: ${edgePadding};
//   padding-right: 10em;
// `;
const Header = styled.header`
  /* background-color: rebeccapurple; */
  margin-top: ${edgeSpace + "em"};;
  padding-left: ${edgeSpace + "em"};
  padding-right: ${edgeSpace + "em"};
  /* border-bottom: 1px solid rgba(255,255,255,.25); */

  div {
    height: 1px;
    width: 50%;
    background-color: white;
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
            <html>
                <title>{pageTitle}</title>
                <body>
                    <NavBar></NavBar>
                    <Header>
                        <h1>{pageTitle}</h1>
                        <div></div>
                    </Header>
                    
                    {children}
                </body>
            </html>
        </ThemeProvider>
    );
};

export default Layout;