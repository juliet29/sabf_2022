import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { primaryAccentColor } from 'styles/theme';
import { PitchPageQueryQuery } from '../../../graphql-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StaticImage } from 'gatsby-plugin-image';

const Wrapper = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;

  @media ${devices.laptopMin} {
    /* display: flex; */
    flex-direction: row;
    justify-content: space-around;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const KeynoteItem = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 2em;

  img {
    width: 100%;
    max-width: 30vw;
    object-fit: cover;
    height: 170px;
    border-radius: 50%;
    margin-bottom: 1em;
    margin: auto;
  }
  a {
    color: white;
    transition: all 0.5s;
    text-decoration: none;
    :hover {
      color: ${primaryAccentColor};
    }
  }

  div {
    max-width: 80%;
    margin: auto;
    > p:nth-of-type(2) {
      color: ${primaryAccentColor};
      font-weight: 200;
      font-style: italic;
      color: ${primaryAccentColor};
      font-size: clamp(0.7em, 1vw, 1.4em);
    }
  }

  @media ${devices.laptopMin} {
    padding-left: 3em;
    padding-right: 3em;
    img {
      width: 22vw;
      height: 40vh;
      margin-bottom: 1.5em;
    }
    div {
      max-width: 80%;
    }
  }
`;

interface KeynotesProps {
  data: PitchPageQueryQuery;
}

const Judges: React.FC<KeynotesProps> = ({ data }) => {
  const photoRef = useRef();
  const photoSelector = gsap.utils.selector(photoRef);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let revealContainers = photoSelector('.photoPlace');
    revealContainers.forEach((container) => {
      let image = container.querySelector('.gatsbyImg');
      console.log('hi', image);
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: 'restart none none reset'
        }
      });
      tl.from(image, {
        scale: 1.1,
        duration: 2,
        ease: 'power2.easeOut'
      });
    });
  });

  return (
    <Wrapper ref={photoRef}>
      {data.pitch.nodes.map((i) => (
        <KeynoteItem>
          <a href={i.data?.LinkedIn_Url as string} className="photoPlace">
            <img
              className="gatsbyImg"
              src={
                i.data?.Attachments?.map(
                  (image) => image?.thumbnails?.large?.url as string
                )[0]
              }
            />
          </a>

          <div>
            <p>
              <a href={i.data?.LinkedIn_Url as string}>{i.data?.Name}</a>
            </p>
            <p>
              {i.data?.Title}, {i.data?.Organization}
            </p>
          </div>
        </KeynoteItem>
      ))}
    </Wrapper>
  );
};

export default Judges;
