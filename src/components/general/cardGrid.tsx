import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { primaryAccentColor } from 'styles/theme';

const StyledCardGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1em;
  row-gap: 0.5em;

  @media ${devices.laptopMin} {
    max-width: 70%;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0;
    row-gap: 0.9em;
  }
`;

const Card = styled.div`
  /* background-color: ${primaryAccentColor};
  border-radius: 10px; */
  div {
    a {
      color: white;
      transition: all 0.5s;
      text-decoration: none;
      :hover {
        color: ${primaryAccentColor};
      }
    }
    > p:nth-child(2) {
      font-weight: 200;
      font-style: italic;
      color: ${primaryAccentColor};
    }
  }

  img {
    width: 100%;
    max-width: 30vw;
    object-fit: cover;
    height: 170px;
    /* border-top-right-radius: 10px;
    border-top-left-radius: 10px; */
    background-color: black;
  }

  @media ${devices.laptopMin} {
    transition: transform 0.3s;
    max-width: 12vw;
    :hover {
      transform: translateY(-10px) scale(1.004);
    }

    img {
      max-width: 100%;
      height: 27vh;
    }
  }
`;

interface CardGridProps {
  nodes: Array<{
    id: string;
    data?: {
      Role?: string | null;
      Name?: string | null;
      Program?: string | null;
      linkedInUrl?: string | null;
      Attachments?: Array<{
        thumbnails?: {
          large?: {
            height?: number | null;
            width?: number | null;
            url?: string | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
  }>;
}

const CardGrid: React.FC<CardGridProps> = ({ nodes }) => {
  return (
    <StyledCardGrid>
      {nodes.map((i) => (
        <Card key={i.id}>
          <a href={i.data?.linkedInUrl}>
            <img
              src={
                i.data?.Attachments?.map(
                  (image) => image?.thumbnails?.large?.url
                )[0]
              }
            />
          </a>

          <div>
            <p>
              <a href={i.data?.linkedInUrl}>{i.data?.Name}</a>
            </p>
            <p>{i.data?.Program}</p>
          </div>
        </Card>
      ))}
    </StyledCardGrid>
  );
};

export default CardGrid;
