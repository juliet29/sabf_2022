import { AirtableTeamData } from 'pages/team';
import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { primaryAccentColor } from 'styles/theme';

const CardHolder = styled.div`
width: 90%;
display: grid;
gap: 20px;
margin: auto;


@media ${devices.mobileLMin} {
        grid-auto-flow: row;
        grid-template-columns: repeat(2, 1fr);
}

@media ${devices.laptopMin} {
        grid-auto-flow: row;
        grid-template-columns: repeat(3, 1fr);
}
  
`;

const Card = styled.div`
background-color: ${primaryAccentColor};
border-radius: 10px;
box-sizing: border-box;



div {
    padding: 10px;
}

img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

@media ${devices.mobileLMin} {
        width: 30vw;
}

@media ${devices.laptopMin} {
        width: 25vw;
        img {
            height: 250px;
        }
        
}
  




  
`;


interface GroupHolderProps  {
    edges: AirtableTeamData
}

const GroupHolder: React.FC<GroupHolderProps> = ({ edges }) => {
    return (
        <CardHolder>
            {
                edges.edges.map(i => (
                    <Card key={i.node.id}>
                        
                            <img src= {i.node.data?.Attachments?.map(image => (image?.thumbnails?.large?.url))[0]} />
                            
                        
                        <div>
                            <h2>{i.node.data?.Name}</h2>
                            <p>{i.node.data?.Program}</p>
                        </div>
                        
                        
                    </Card>
                ))
            }
        </CardHolder>
    );
};

export default GroupHolder;

