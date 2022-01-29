import React from 'react';
import styled from 'styled-components';
import {GridHolder } from 'styles/sharedStyles';




// ******* start styled components 
const PhotoPlaceholder = styled.div`
    background-color: blue;
    height: 40vh;
    width: 30vw;
`;

const TextBlock = styled.div`
    display: flex;
    flex-direction: row;
    div:nth-child(1) {
        margin-right: 20px;
    }
    div:nth-child(2) {
        h2 {
            margin-bottom: 20px;
        }
        p {
            margin-bottom: 10px;
        }
    }

  
`;


const Grid = styled.div`
    display: grid;
    height: 100vh;
    gap: 30px;
    grid-template-columns: [col1-line] 1fr
                                [col2-line] 1fr
                                [col3-line] 1fr
                                [col4-line] 1fr
                                [col5-line];
    grid-template-rows: [row1-start] 1fr 
                            [row2-start] 1fr 
                            [row3-start] 1fr
                            [row4-start];
    ${PhotoPlaceholder}:nth-child(1){
        grid-column: col1-line / span 2;
        grid-row: row1-start / span 2;
    }

    ${TextBlock}:nth-child(2){
        grid-column: col3-line / span 2;
        grid-row: row1-start / span 2;
    }

    ${PhotoPlaceholder}:nth-child(3){
        grid-column: col3-line / span 2;
        grid-row: row2-start / span 2;
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
                            Innovation in Africa is shaping the 
                            world's future.
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