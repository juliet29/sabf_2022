import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { primaryAccentColor } from 'styles/theme';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 1em;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  background-color: ${primaryAccentColor};
  padding:0;
  @media ${devices.mobileL} {
    width: 100%;
  }
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

`;

const NavLink = styled(Link)`
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    padding: 2rem 1em;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: white;
    }
`;

interface BurgerMenuProps {
    open: boolean
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ open }) => {
    return (
        <Wrapper  open={open}>
               <NavLink to="/press">Press + Videos</NavLink>
                <NavLink to="/pitch">Pitch Competition</NavLink>
                <NavLink to="/speakers">Speakers + Panels</NavLink>
                <NavLink to="/team">Team</NavLink>
                <NavLink to="/attend">Attend</NavLink>
            
        </Wrapper>
    );
};

export default BurgerMenu;
