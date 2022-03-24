import React from 'react';
import styled from 'styled-components';

type VideoProps = {
  videoSrcURL: string;
  videoTitle: string;
};

const Wrapper = styled.div`
  h3 {
    margin-bottom: 1em;
    text-align: center;
  }
`;

const FrameHolder = styled.div`
  width: 80%;
  height: 60vh;
  margin: auto;
  margin-bottom: 5em;
  position: relative;
`;

const StyledFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const Video: React.FC<VideoProps> = ({ videoSrcURL, videoTitle }) => {
  return (
    <Wrapper>
      <h3>{videoTitle}</h3>
      <FrameHolder>
        <StyledFrame
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          //   webkitallowfullscreen="true"
          //   mozallowfullscreen="true"
          allowFullScreen
        />
      </FrameHolder>
    </Wrapper>
  );
};

export default Video;
