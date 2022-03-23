import Layout from 'components/navigation/layout';
import Video from 'press/video';
import React from 'react';
import styled from 'styled-components';

interface PressPageProps {
  // : string;
}

const StyledLayout = styled(Layout)`
  h2 {
    margin-bottom: 3em;
  }
`;

const PressPage: React.FC<PressPageProps> = ({}) => {
  return (
    <StyledLayout pageTitle="Press + Videos">
      {/* <h2>Check out highlights from our previous conferences!</h2> */}
      <Video
        videoSrcURL="//player.vimeo.com/video/356353115"
        videoTitle="2019 Forum"
      ></Video>

      <Video
        videoSrcURL="//player.vimeo.com/video/289034555 "
        videoTitle="2018 Forum"
      ></Video>
    </StyledLayout>
  );
};

export default PressPage;
