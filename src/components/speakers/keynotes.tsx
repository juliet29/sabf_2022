import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { primaryAccentColor } from 'styles/theme';
import { SpeakersPageQueryQuery } from '../../../graphql-types';

const Wrapper = styled.div`
  margin-top: 1em;

  @media ${devices.mobileLMin} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const KeynoteItem = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 2em;

  img {
    width: 100%;
    max-width: 50vw;
    object-fit: cover;
    height: 170px;
    border-radius: 50%;
    margin-bottom: 1em;
    margin: auto;
  }
  a {
    color: white;
    transition: all 0.5s;
    text-decoration: none;
    :hover {
      color: ${primaryAccentColor};
    }
  }

  div {
    max-width: 80%;
    margin: auto;
    > p:nth-of-type(2) {
      color: ${primaryAccentColor};
      font-weight: 200;
      font-style: italic;
      color: ${primaryAccentColor};
      font-size: clamp(0.7em, 1vw, 1.4em);
    }
  }

  @media ${devices.mobileLMin} {
    padding-left: 3em;
    padding-right: 3em;
    img {
      width: inherit;
      height: 50vh;
      margin-bottom: 1.5em;
    }
    div {
      max-width: 50%;
    }
  }
`;

interface KeynotesProps {
  data: SpeakersPageQueryQuery;
}

const Keynotes: React.FC<KeynotesProps> = ({ data }) => {
  return (
    <Wrapper>
      {data.keynote.nodes.map((i) => (
        <KeynoteItem>
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
        </KeynoteItem>
      ))}
    </Wrapper>
  );
};

export default Keynotes;
