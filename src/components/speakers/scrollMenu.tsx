import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { StyledAnchorLink } from './panels';
import { panels } from './panelsData';

const scrollPanelOffset = 15 + 'em';
interface ScrollPanelMenuProps {
  visibility: boolean;
}

const ScrollPanelMenu = styled.div<ScrollPanelMenuProps>`
  display: none;
  @media ${devices.laptopMin} {
    display: block;
    min-width: ${scrollPanelOffset};
    position: fixed;
    bottom: 10em;
    p {
      margin-bottom: 0.5em;
    }
    visibility: ${(props) => (props.visibility ? 'visble' : 'hidden')};
    opacity: ${(props) => (props.visibility ? 1 : 0)};
    transition: visibility 0s, opacity 0.5s linear;
  } ;
`;

interface ScrollMenuProps {
  // : string;
}

const ScrollMenu: React.FC<ScrollMenuProps> = ({}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    let check = getOffset(document.querySelector('#bottomDiv'));
    let check2 = document.querySelector('#bottomDiv')?.clientHeight;
    let check3 = document.querySelector('#bottomDiv')?.getBoundingClientRect();
    console.log('check top of div', check3?.top);
    console.log('check2 bottom', check + check2);
    let heightToHideBefore = 200; //check;
    let heightToHideAfter = heightToHideBefore + 1000;

    const winScroll = document.documentElement.scrollTop; // ||document.body.scrollTop; //
    // console.log(winScroll);
    console.log('win scroll', winScroll);

    if (winScroll < heightToHideBefore) {
      console.log('hide, before top');
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else if (winScroll > heightToHideAfter) {
      console.log('hide, after bottom');
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const getOffset = (element: any) => {
    const rect = element?.getBoundingClientRect(),
      scrollTop = document.documentElement.scrollTop; // window.pageYOffset ||
    return rect!.top + scrollTop;
  };

  return (
    <ScrollPanelMenu visibility={isVisible}>
      {panels.map((item) => (
        <StyledAnchorLink to={'/speakers#' + item.link}>
          <p>{'0' + item.number + ' ' + item.link}</p>
        </StyledAnchorLink>
      ))}
    </ScrollPanelMenu>
  );
};

export default ScrollMenu;
