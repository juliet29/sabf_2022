import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import { primaryAccentColor} from 'styles/theme';
import { StaticImage } from "gatsby-plugin-image"
import { useWindowSize } from 'hooks/window-size';
import BurgerMenu from './burgerMenu/burgerMenu';
import BurgerMenuIcon from './burgerMenu/burgerMenuIcon';
// import sabfLogo from "../../assets/sabfLogo.png"

interface NavBarProps {
    // : string;
}

const NavBarNav = styled.nav`
  z-index: 10000000000;
  padding-top: 1em;
  padding-bottom: 2em;
  padding-left: 1em;
  padding-right: 1em;
  position: sticky;
  top: 0;
`;

const NavBarDiv = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;

const NavMenuDiv = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
  
`;

export const NavLink = styled(Link)`
  color: ${primaryAccentColor};
  margin-left: 1em;
  margin-right: 1em;
  text-decoration: none;
  text-transform: uppercase;
  transition:  0.3s all ease-in-out;

  :hover {
        color: white;
        text-decoration: underline;
    }

`;
// Check if window is defined (so if in the browser or in node.js).



const NavBar: React.FC<NavBarProps> = ({  }) => {
    const {width } = useWindowSize()  
    const mobileLBreakpoint = 425
    const [open, setOpen] = useState(false);
    return (
        <NavBarNav>
            <NavBarDiv>
            <NavLink to="/">
                <StaticImage src="../../assets/sabfLogo.png" 
                            alt="SABF" 
                            width={110}/>
            </NavLink>

            {
                width > mobileLBreakpoint ?
                <NavMenuDiv>
                    <NavLink to="/press">Press + Videos</NavLink>
                    <NavLink to="/pitch">Pitch Competition</NavLink>
                    <NavLink to="/speakers">Speakers + Panels</NavLink>
                    <NavLink to="/team">Team</NavLink>
                    <NavLink to="/attend">Attend</NavLink>
                </NavMenuDiv> :
                <>
                    <BurgerMenu open={open} setOpen={setOpen}></BurgerMenu>
                    <BurgerMenuIcon open={open} setOpen={setOpen}></BurgerMenuIcon>
                </>
            }
        </NavBarDiv>

        </NavBarNav>
        
    );
};

export default NavBar;
