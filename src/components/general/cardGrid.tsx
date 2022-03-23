import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { primaryAccentColor } from 'styles/theme';
import { CardGridProps } from './cardGridInterface';

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
    row-gap: 1.2em;
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
      font-size: clamp(0.7em, 1vw, 1.4em);
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

const CardGrid: React.FC<CardGridProps> = ({ nodes, panelNodes }) => {
  return (
    <StyledCardGrid>
      {nodes ? (
        nodes?.map((i) => (
          <Card key={i.id}>
            <a href={i.data?.linkedInUrl as string}>
              <img
                src={
                  i.data?.Attachments?.map(
                    (image) => image?.thumbnails?.large?.url as string
                  )[0]
                }
              />
            </a>

            <div>
              <p>
                <a href={i.data?.linkedInUrl as string}>{i.data?.Name}</a>
              </p>
              <p>{i.data?.Program}</p>
            </div>
          </Card>
        ))
      ) : panelNodes ? (
        panelNodes?.map((i) => (
          <Card key={i.id}>
            <a href={i.data?.LinkedIn_Url as string}>
              <img
                src={
                  i.data?.Attachments?.map(
                    (image) => image?.thumbnails?.large?.url as string
                  )[0]
                }
              />
            </a>

            <div>
              <p>
                <a href={i.data?.LinkedIn_Url as string}>{i.data?.Name}</a>
              </p>
              <p>
                {i.data?.Title}, {i.data?.Organization}
              </p>
            </div>
          </Card>
        ))
      ) : (
        <div></div>
      )}
    </StyledCardGrid>
  );
};

export default CardGrid;
