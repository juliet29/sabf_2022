import React from 'react';
import styled from 'styled-components';
import { primaryAccentColor, secondaryAccentColor } from 'styles/theme';

const Burger = styled.button`
  margin-right: 1em;
  /* position: absolute;
  top: 5%;
  left: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.15rem;
    background:   ${({ open }) => open ? `${secondaryAccentColor}` : `${primaryAccentColor}`};
    border-radius: 1px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


interface BurgerMenuIconProps {
   open: boolean | undefined
   setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerMenuIcon: React.FC<BurgerMenuIconProps> = ({ open, setOpen }) => {
    return (
        <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
    );
};

export default BurgerMenuIcon;
