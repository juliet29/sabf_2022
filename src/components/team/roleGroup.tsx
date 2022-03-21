import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { primaryAccentColor } from 'styles/theme';
import '@fontsource/montserrat/200-italic.css';

interface RoleGroupProps {
  groupTitle: string;
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
const Wrapper = styled.div`
  box-sizing: border-box;
  h3 {
    padding-bottom: 0.5em;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 1em;
  row-gap: 0.5em;
`;

const Card = styled.div`
  /* background-color: ${primaryAccentColor};
  border-radius: 10px; */

  div {
    > p:nth-child(2) {
      font-weight: 200;
      font-style: italic;
      color: ${primaryAccentColor};
    }
  }

  img {
    width: 100%;
    min-width: 30vw;
    height: 170px;
    object-fit: cover;
    /* border-top-right-radius: 10px;
    border-top-left-radius: 10px; */
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

const RoleGroup: React.FC<RoleGroupProps> = ({ groupTitle, nodes }) => {
  return (
    <Wrapper>
      <h3>{groupTitle}</h3>

      <CardGrid>
        {nodes.map((i) => (
          <Card key={i.id}>
            <img
              src={
                i.data?.Attachments?.map(
                  (image) => image?.thumbnails?.large?.url
                )[0]
              }
            />

            <div>
              <p>{i.data?.Name}</p>
              <p>{i.data?.Program}</p>
            </div>
          </Card>
        ))}
      </CardGrid>
    </Wrapper>
  );
};

export default RoleGroup;
