import React from 'react';
import styled from 'styled-components';
import {GridHolder } from 'styles/sharedStyles';
import {useContent} from 'hooks/use-content'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'



// ******* start styled components 
const SectionWrap = styled.div`
    margin: 0 10%;
    z-index: 10;
`;



const PhotoPlaceholder = styled.div`
    /* background-color: darkblue; */
    /* height: 40vh; */
    /* width: 30vw; */
`;

const TextBlock = styled.div`
    display: flex;
    flex-direction: row;
    /* margin-bottom: 10px; */
    div:nth-child(1) {
        margin-right: 3em;
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
    height: 140vh;
    gap: 3em 6em;
    grid-template-columns: [col1-line] 1fr
                                [col2-line] 1fr
                                [col3-line] 1fr
                                [col4-line] 1fr
                                [col5-line];
    grid-template-rows: [row1-start] 1fr 
                            [row2-start] 1fr 
                            [row3-start] 1fr
                            [row4-start] 1fr
                            [row5-start] 1fr
                            [row6-start] 1fr
                            [row7-start] 1fr;
    ${PhotoPlaceholder}:nth-child(1){
        grid-column: col1-line / span 2;
        grid-row: row1-start / span 4;
    }

    ${TextBlock}:nth-child(2){
        grid-column: col3-line / span 2;
        grid-row: row1-start / span 3;
    }

    ${PhotoPlaceholder}:nth-child(3){
        grid-column: col3-line / span 2;
        grid-row: row4-start / span 4;
        position: relative;
        top: 3em;
        /* justify-self: end;  */
        /* align-self: center; */
    }
    
  
`;



// ******** end styled components {number, title, body}

 
const GenericSection = ({sectionNumber}) => {
    const nodes = useContent()
    // get the current node for the relevant section 
    const currentNode = nodes.find(node => node.frontmatter?.number === sectionNumber);

    // get the image from that node
    const image_01 = getImage(currentNode.frontmatter.image_01)
    const image_02 = getImage(currentNode.frontmatter.image_02)
    // console.log(currentNode)
    return (
        <SectionWrap>
        <GridHolder>
            
            <Grid>
                <PhotoPlaceholder>
                    <GatsbyImage image={image_01}/>
                </PhotoPlaceholder>
                <TextBlock>
                    <div><h2>{currentNode?.frontmatter?.number}</h2></div>
                    <div>
                        <h2>
                        {currentNode?.frontmatter?.title}
                        </h2>
                        <MDXRenderer>
                        {currentNode?.body}
                        </MDXRenderer>
                        <p></p>
                        
                    </div>
                </TextBlock>
                <PhotoPlaceholder>
                    <GatsbyImage image={image_02}/>
                </PhotoPlaceholder>
            </Grid>
            </GridHolder>
            </SectionWrap>
            
   
    );
};

export default GenericSection;