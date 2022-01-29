import React from 'react';
import styled from 'styled-components';
import { SectionSeperator } from 'styles/sharedStyles';

// styled components 
const Section = styled.section`
  margin: 0 14%;
`;

const GridHolder = styled.div`
    display: flex;
    justify-content: center;

  
`;

const Grid = styled.div`
    display: grid;
    /* margin: ; */
    grid-template-columns: [col1-line] 1fr
                                [col2-line] 1fr
                                [col3-line] 1fr
                                [col4-line] 1fr
                                [col5-line] 1fr
                                [col6-line];
    grid-template-rows: [row1-start] 14vh 
                            [row2-start] 14vh 
                            [row3-start] 14vh 
                            [row4-start] 14vh 
                            [row5-start];
    div:nth-child(1) {
        grid-column: col3-line / span 2;
        grid-row: row1-start / span 1;
        align-self: center;
    }
    div:nth-child(2) {
        grid-column: col1-line / span 2;
        grid-row: row2-start / span 2;
        font-style: italic;
        align-self: center; /* column justification */
        justify-self: center; /* row justification */
    }
    div:nth-child(3) {
        grid-column: col2-line / span 2;
        grid-row: row4-start / span 1;
        justify-self: center; 
    }
    div:nth-child(4) {
        grid-column: col4-line  / span 2 ;
        grid-row: row2-start / span 2;
        justify-self: end; 
        align-self: center;
        h2 {
            text-transform: uppercase;
            margin: 3px;
        }
        
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
            <GridHolder>
            <Grid>
                <div> 
                    <p>14th Anniversary</p>
                    <h1>Stanford</h1>
                </div>

                <div>
                    <h1>
                        Africa <br/>Business
                    </h1>
                </div>

                <div>
                    <h1> Forum</h1>
                </div>
                
                <div>
                    <h2>African Innovation Shaping the Global Future</h2>
                    <p>May XX, 2022</p>
                    <a>Join Us Online + In-Person</a>
                </div>
                

            </Grid>
            </GridHolder>
            
            {/* <Title></Title>
            <Subtitle></Subtitle> */}
            <SectionSeperator></SectionSeperator>
        </Section>
        
    );
};

export default LandingIndex;