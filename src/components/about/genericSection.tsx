import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { GridHolder, StyledLink } from 'styles/sharedStyles';
import { useContent } from 'hooks/use-content';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { devices } from 'styles/responsiveSizes';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// interfaces
interface PhotoPlaceholderProps {
  //   inView: boolean;
}

// ******* start styled components
const SectionWrap = styled.div`
  margin: 0 10%;
  z-index: 10;
  margin-bottom: 10%;
`;

const PhotoPlaceholder = styled.div<PhotoPlaceholderProps>`
  margin: 1em;
  transform: none;
  visibility: visible;
  /* transform: ${(prop) => (prop.inView ? 'rotate(2deg)' : 'rotate(0)')};
  transition: transform 2s ease; */

  @media ${devices.laptopMin} {
    visibility: hidden;
    overflow: hidden;
  } ;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-bottom: 10px; */
  div:nth-child(1) {
    margin-right: 3em;
    @media ${devices.mobileL} {
      margin-right: 1em;
    }
  }
  div:nth-child(2) {
    h2 {
      margin-bottom: 1em;
    }
    p {
      margin-bottom: 1em;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  height: max-content;
  gap: 3em 6em;
  @media ${devices.mobileL} {
    grid-auto-flow: column;
    gap: 0;
    height: min-content;
  }
  grid-template-columns:
    [col1-line] 1fr
    [col2-line] 1fr
    [col3-line] 1fr
    [col4-line] 1fr
    [col5-line];
  grid-template-rows:
    [row1-start] 1fr
    [row2-start] 1fr
    [row3-start] 1fr
    [row4-start] 1fr
    [row5-start] 1fr
    [row6-start] 1fr
    [row7-start] 1fr;
  @media ${devices.mobileL} {
    grid-template-rows: min-content auto;
  }

  ${PhotoPlaceholder}:nth-child(1) {
    grid-column: col1-line / span 2;
    grid-row: row1-start / span 4;
    @media ${devices.mobileL} {
      grid-column: col1-line / -1;
      grid-row: 1 / span 2;
      /* align-self: start; */
      padding-top: 2.5em;
      align-self: end;
    }
  }

  ${TextBlock}:nth-child(2) {
    grid-column: col3-line / span 2;
    grid-row: row1-start / span 3;
    margin-bottom: 0.5em;
    @media ${devices.mobileL} {
      grid-column: col1-line / -1;
      grid-row: 3 / span 3;
    }
  }

  ${PhotoPlaceholder}:nth-child(3) {
    grid-column: col3-line / span 2;
    grid-row: row4-start / span 4;
    position: relative;
    top: 3em;
    @media ${devices.mobileL} {
      display: none;
    }
    /* justify-self: end;  */
    /* align-self: center; */
  }
`;

interface GenericSectionProps {
  sectionNumber: number;
}

// ******** end styled components {number, title, body}

const GenericSection: React.FC<GenericSectionProps> = ({ sectionNumber }) => {
  //   const [ref, inView] = useInView({
  //     threshold: 0.5,
  //     initialInView: true
  //   });

  const nodes = useContent();
  // get the current node for the relevant section
  const currentNode = nodes.find(
    (node) => node.frontmatter?.number === sectionNumber
  );

  // get the image from that node
  const image_01 = getImage(currentNode.frontmatter.image_01);
  const image_02 = getImage(currentNode.frontmatter.image_02);
  // console.log(currentNode)

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

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: -100,
        ease: 'power2.easeOut'
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: 'power2.easeOut'
      });
    });
  });
  return (
    <SectionWrap>
      <GridHolder>
        <Grid ref={photoRef}>
          <PhotoPlaceholder className="photoPlace">
            <GatsbyImage image={image_01} className="gatsbyImg" />
          </PhotoPlaceholder>
          <TextBlock>
            <div>
              <h2>{currentNode?.frontmatter?.number}</h2>
            </div>
            <div>
              <h2>{currentNode?.frontmatter?.title}</h2>
              <MDXRenderer>{currentNode?.body}</MDXRenderer>
              <p></p>
            </div>
          </TextBlock>
          <PhotoPlaceholder className="photoPlace">
            <GatsbyImage image={image_02} className="gatsbyImg" />
          </PhotoPlaceholder>
        </Grid>
      </GridHolder>
    </SectionWrap>
  );
};

export default GenericSection;
