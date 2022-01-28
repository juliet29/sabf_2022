import React from 'react';
import styled from 'styled-components';

const HorizontalFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const P = styled.p`
  text-transform: uppercase;
  /* TODO: fix the solid number */
  margin: 0.3em 0; 
`;

const ItalicP = styled(P)`
  font-style: italic;
`;

const Subtitle = () => {
    return (
        <HorizontalFlexDiv>
            <div>
                <P>Based in Moscow</P>
                <ItalicP> *Available Worldwide</ItalicP>
            </div>
            <P>Brands & People Photographer</P>
            <P>(2021), All Rights Reserved</P>
        </HorizontalFlexDiv>
        
    );
};

export default Subtitle;