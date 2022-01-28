import React from 'react';
import styled from 'styled-components';
import { VerticalFlexDiv } from 'styles/sharedStyles';

// const VerticalFlexDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   /* text-transform: uppercase; */
// `;

const P = styled.p`
  text-transform: uppercase;
  /* TODO: fix the solid number + make global */
  margin: 0.3em 0; 
`;
const SmallText = () => {
    return (
        <VerticalFlexDiv
    >
            <P>Hi, I am Daria Izbash</P>
            <P>Brands & People Photographer</P>
            <P>Based in Moscow</P>
        </VerticalFlexDiv
    >
    );
};

export default SmallText;