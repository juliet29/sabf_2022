import React from 'react';
import Title from './title';
import Subtitle from './subtitle';
import Photos from './photos';
import styled from 'styled-components';
import { SectionSeperator } from 'styles/sharedStyles';

// styled components 
const Section = styled.section`
    /* display: flex; */
    /* justify-content: center; */
  /* color: ${({ theme }) => theme.palette.white}; */
`;

const Grid = styled.div`
    display: grid;
    /* margin: auto; */
    grid-template-columns: [col1-line] 14% 
                                [col2-line] 14% 
                                [col3-line] 14% 
                                [col4-line] 14% 
                                [col5-line] ;
    grid-template-rows: [row1-start] 14vh 
                            [row2-start] 14vh 
                            [row3-start] 14vh 
                            [row4-start] 14vh 
                            [row5-start];
    div:nth-child(1) {
        grid-column: col3-line / col5-line;
        grid-row: row1-start / row2-start;
    }
    h1:nth-child(2) {
        grid-column: col1-line / col3-line;
        grid-row: row2-start / row3-start;
        font-style: italic;
    }
    h1:nth-child(3) {
        grid-column: col2-line / span 1;
        grid-row: row4-start / span 1;
    }
  
`;


// end of styled components 



interface LandingIndexProps {
   scrollWidth: number;
}
const LandingIndex:React.FC<LandingIndexProps> = ({scrollWidth}) => {
    return (
        <Section>
            <SectionSeperator></SectionSeperator>
            <Grid>
                <div> 
                <p>14th Anniversary</p>
                <h1>Stanford</h1>
                </div>
                
                <h1>
                    Africa 
                    <br/>
                    Business
                </h1>
                <h1> Forum</h1>

            </Grid>
            {/* <Title></Title>
            <Subtitle></Subtitle> */}
            <SectionSeperator></SectionSeperator>
        </Section>
        
    );
};

export default LandingIndex;