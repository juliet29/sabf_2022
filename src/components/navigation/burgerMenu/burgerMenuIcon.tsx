import React from 'react';
import styled from 'styled-components';
import { primaryAccentColor } from 'styles/theme';

const Burger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
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
    height: 0.25rem;
    background: ${primaryAccentColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;


interface BurgerMenuIconProps {
    // : string;
}

const BurgerMenuIcon: React.FC<BurgerMenuIconProps> = ({  }) => {
    return (
        <Burger>
        <div />
        <div />
        <div />
      </Burger>
    );
};

export default BurgerMenuIcon;
