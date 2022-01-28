import React from 'react';
import styled from 'styled-components';
import { VerticalFlexDiv } from 'styles/sharedStyles';

const H2 = styled.h2`
  text-transform: uppercase;
 
`;

const SubtitleWrapper = styled(VerticalFlexDiv)`
  width: 30vw;
  z-index: -1;
`;

const Subtitle = () => {
    return (
      <SubtitleWrapper >
        <H2>
          African Innovation Shaping the Global Future
        </H2>
        <p>May XX, 2022</p>
        <a>Join Us Online + In-Person</a>

      </SubtitleWrapper >
        
    );
};

export default Subtitle;