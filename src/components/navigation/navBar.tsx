import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { SectionSeperator } from 'styles/sharedStyles';
import {lightColor} from 'styles/theme'

interface NavBarProps {
    // : string;
}

const NavBarNav = styled.nav`
  /* background-color: orange; */
  z-index: 100;
  padding-top: 2em;
  padding-bottom: 2em;
  padding-left: 1em;
  padding-right: 1em;
  position: sticky;
  top: 0;
  /* position: absolute;
  display: flex;
 flex-direction: column; */
`;

const NavBarDiv = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
  
`;

const NavMenuDiv = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
  
`;

export const NavLink = styled(Link)`
  color: lightblue;
  margin-left: 1em;
  margin-right: 1em;
  text-decoration: none;

`;


const NavBar: React.FC<NavBarProps> = ({  }) => {
    return (
        <NavBarNav>
            <NavBarDiv>
            <div>
            <NavLink to="/">Logo</NavLink>
            </div>
            <NavMenuDiv>
                <NavLink to="/press">Press + Videos</NavLink>
                <NavLink to="/pitch">Pitch Competition</NavLink>
                <NavLink to="/speakers">Speakers + Panels</NavLink>
                <NavLink to="/attend">Attend</NavLink>
            </NavMenuDiv>
        </NavBarDiv>
        {/* <SectionSeperator></SectionSeperator> */}
        </NavBarNav>
        
    );
};

export default NavBar;
