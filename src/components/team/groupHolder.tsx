import { AirtableTeamData } from 'pages/team';
import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { primaryAccentColor } from 'styles/theme';
import { TeamPageQueryQuery } from '../../../graphql-types';

const CardHolder = styled.div`
  width: 90%;
  display: grid;
  gap: 20px;
  margin: auto;

  @media ${devices.mobileLMin} {
    grid-auto-flow: row;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
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
  /* box-shadow: 0 0 20px #00000070; */

  div {
    padding: 10px;
  }

  img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: black;
  }

  @media ${devices.mobileLMin} {
    width: 30vw;
    transition: transform 0.3s;

    :hover {
      transform: translateY(-0.5rem) scale(1.03);
    }
  }

  @media ${devices.laptopMin} {
    width: 25vw;
    img {
      height: 250px;
    }
  }
`;

interface GroupHolderProps {
  data: TeamPageQueryQuery;
}

const GroupHolder: React.FC<GroupHolderProps> = ({ data }) => {
  return (
    <CardHolder>
      {data.allAirtable.nodes.map((i) => (
        <Card key={i.id}>
          <img
            src={
              i.data?.Attachments?.map(
                (image) => image?.thumbnails?.large?.url
              )[0]
            }
          />

          <div>
            <h2>{i.data?.Name}</h2>
            <p>{i.data?.Program}</p>
          </div>
        </Card>
      ))}
    </CardHolder>
  );
};

export default GroupHolder;
