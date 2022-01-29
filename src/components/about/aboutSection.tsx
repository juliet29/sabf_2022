import React from 'react';
import styled from 'styled-components';
import {GridHolder } from 'styles/sharedStyles';




// ******* start styled components 
const PhotoPlaceholder = styled.div`
    background-color: darkblue;
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



// ******** end styled components 

 
const AboutSection = () => {
    return (
        <GridHolder>
            <Grid>
                <PhotoPlaceholder>
                    photo 1
                </PhotoPlaceholder>
                <TextBlock>
                    <div><h2>01</h2></div>
                    <div>
                        <h2>
                            Innovation in Africa is <br/> 
                            shaping the world's  <br/> 
                            future.
                        </h2>
                        <p>
                        This year’s conference will explore how innovations across various 
                        sectors in Africa can influence the global economy. 
                        What role does African 
                        innovation play in shaping the global future? 
                        How do current ventures on the continent position
                        Africa to become a leader in the global economy? 
                        </p>
                        
                        <p>
                         At this conference we would like to challenge the narrative 
                         that “Africa is the future” and explore whether 
                         “Africa is now”.  We will welcome diverse perspectives
                          on Africa’s unique opportunities and challenges as our speakers 
                          discuss what they see as Africa’s role in today’s economy. 
                        </p>

                        <a>Join Us Online + In-Person</a>
                    </div>
                </TextBlock>
                <PhotoPlaceholder>
                    photo 2
                </PhotoPlaceholder>
            </Grid>
            </GridHolder>
            
   
    );
};

export default AboutSection;