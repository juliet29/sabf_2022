import React, { useState, useEffect } from 'react';
// import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const images = [
    "https://placekitten.com/500/800",
    "https://placekitten.com/600/800",
    "https://placekitten.com/700/800"
]

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 0;
`;

const ImageGrowAnim = keyframes`
    0% {
    transform: scale(0);
    transform-origin: 50% 100%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 100%;
    opacity: 1;
  }
`;

const ImageAnimatorWrapper = styled.div`
    display: inline-block;
    /* border: 10px solid palegoldenrod; */
    width: 400px;
    height: 600px;
    animation-name: ${ImageGrowAnim};
    animation-duration: 0.8s;
    animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955) ;
    animation-fill-mode: forwards;
    overflow: hidden;  
`;

const Image = styled.img`
  height: 600px;
  transform: scale(${props => props.height});
`;


interface PhotosProps {
    scrollWidth: number;
 }
 
 const Photos:React.FC<PhotosProps> = ({scrollWidth}) => {
    const [imageNumber, setImageNumber] = useState(0)

    useEffect(() => {
        const update = () => {
           setImageNumber(imageNumber => imageNumber+1);
        }
        const interval = setInterval(update, 5000);
        return () => clearInterval(interval);
     }, []);

    const currentImage = images[imageNumber % 3]
    // console.log("imageNumber", imageNumber)
    // console.log(currentImage)
    return (
        <Wrapper>
        <ImageAnimatorWrapper>
              <Image src={currentImage} 
              alt="A kitten"
              width={400}
              height={scrollWidth}
              />
      </ImageAnimatorWrapper>
      </Wrapper>
    );
        
};

export default Photos;