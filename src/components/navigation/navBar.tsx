import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import { primaryAccentColor } from 'styles/theme';
import { StaticImage } from 'gatsby-plugin-image';
import { useWindowSize } from 'hooks/window-size';
import BurgerMenu from './burgerMenu/burgerMenu';
import BurgerMenuIcon from './burgerMenu/burgerMenuIcon';
import { devices, mobileLBreakpoint } from 'styles/responsiveSizes';
// import sabfLogo from "../../assets/sabfLogo.png"

interface NavBarProps {
  // : string;
}

const NavBarNav = styled.nav`
  /* font-size: clamp(var(--min), var(--val), var(--max)); */
  z-index: 10000000000;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;
  position: sticky;
  top: 0;
  background-color: black;
  @media ${devices.mobileL} {
    /* background-color: transparent; */
    box-sizing: border-box;
    width: 100vw;
    /* padding-left: 0;
            padding-right: 0; */
    padding: 1em;
    /* overflow-x: hidden; */
    /* margin: 0 auto; */
  }
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
  transition: 0.3s all ease-in-out;

  :hover {
    color: white;
    text-decoration: underline;
  }
`;
// Check if window is defined (so if in the browser or in node.js).

const NavBar: React.FC<NavBarProps> = ({}) => {
  const { width } = useWindowSize();
  // console.log(width)
  const [open, setOpen] = useState(false);
  return (
    <NavBarNav>
      <NavBarDiv>
        <NavLink to="/">
          <StaticImage src="../../assets/sabfLogo.png" alt="SABF" width={110} />
        </NavLink>

        {width > mobileLBreakpoint ? (
          <NavMenuDiv>
            <NavLink to="/press">Press + Videos</NavLink>
            <NavLink to="/pitch">Pitch Competition</NavLink>
            <NavLink to="/speakers">Speakers + Panels</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/attend">Attend</NavLink>
          </NavMenuDiv>
        ) : (
          <>
            <BurgerMenu open={open} setOpen={setOpen}></BurgerMenu>
            <BurgerMenuIcon open={open} setOpen={setOpen}></BurgerMenuIcon>
          </>
        )}
      </NavBarDiv>
    </NavBarNav>
  );
};

export default NavBar;
