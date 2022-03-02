import React from 'react';
import styled from 'styled-components';
import { primaryAccentColor } from 'styles/theme';
import { criteria } from './criteria';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "@fontsource/montserrat/600.css" 
import { devices } from 'styles/responsiveSizes';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 15px;
    margin-bottom: 15px;
    justify-items: center;
    align-items: center;

    @media ${devices.laptopMin}{
        grid-template-columns: repeat(3, 1fr);
        /* max-width: 60%; */
        margin: auto;
         margin-top: 1em;
    }
`;



const CriteriaItem = styled.div`
background-color: ${primaryAccentColor};
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-size: x-small;
width: 90px;
height: 100px;
margin: 4px;
border-radius: 10px;

svg {
    margin-bottom: 5px;
}

div:first-of-type {
    font-weight: 600;
    text-transform: uppercase;
}
div:nth-last-of-type(){
    font-size: xx-small;
}

@media ${devices.laptopMin}{
        width: 15vw;
        height: 15vw;
        font-size: inherit;
    }
`;


interface JudgingCriteriaProps {

}

const JudgingCriteria: React.FC<JudgingCriteriaProps> = ({  }) => {
    return (
        <Wrapper>
            {
                criteria.map((item) => (
                    <CriteriaItem>
                        <FontAwesomeIcon icon={item.icon} size="3x"  />
                        <div>{item.name}</div>
                        <p>{item.detail}</p>
                    </CriteriaItem>
                )
                )
            }
            
        </Wrapper>
    );
};

export default JudgingCriteria;
