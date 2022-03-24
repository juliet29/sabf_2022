import Layout from 'components/navigation/layout';
import JudgingCriteria from 'components/pitch/judgingCriteria';
import React from 'react';
import styled from 'styled-components';
import { StyledA } from 'styles/sharedStyles';
import '@fontsource/montserrat/600.css';
import { primaryAccentColor } from 'styles/theme';
import { devices } from 'styles/responsiveSizes';
import Judges from 'components/pitch/judges';
import { graphql } from 'gatsby';
import { PitchPageQueryQuery } from '../../graphql-types';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/600.css';

const updatesLink =
  'https://6ww8oh8cbxw.typeform.com/to/dKxn1NQ5?typeform-source=www.canva.com';
const competitionLink = 'https://nfbdu2087fo.typeform.com/to/mTqXspI7';

const LayoutPitch = styled(Layout)`
  /* color: orange; */
  @media ${devices.laptopMin} {
    margin: auto;
    max-width: 80%;
    text-align: center;
    margin-top: 3em;

    ol {
      list-style-type: none;
    }
  }
`;

const StyledBreak = styled.div`
  height: 10vh;
  width: 100%;
`;

const WrapTest = styled.div`
  > p:first-of-type {
    font-style: italic;
    font-weight: 400;
  }

  @media ${devices.laptopMin} {
    margin: auto;
    max-width: 80%;
    text-align: center;
    margin-top: 3em;
    margin-bottom: 5em;
    h2 {
      font-size: clamp(1.5em, 2.1em, 2.3em) !important;
    }

    ol {
      list-style-type: none;
    }
  }
`;

const ThinP = styled.p`
  font-size: clamp(0.8em, 1.4em, 1.5em);

  @media ${devices.laptopMin} {
    margin-top: 2em;
    span {
      color: ${primaryAccentColor};
      font-weight: bold;
    }
  }
`;

const StyledOrderedList = styled.ol``;

const Span = styled.span`
  font-weight: 600;
`;

const StandOutDiv = styled.div`
  background-color: ${primaryAccentColor};
  padding: 18px;
  border-radius: 10px;
  /* border: solid; */

  ul {
    padding-inline-start: 20px;
  }

  li {
    padding-bottom: 10px;
  }

  @media ${devices.laptopMin} {
    width: 60%;
    margin: auto;
    text-align: center;

    ul {
      list-style-type: none;
      width: 80%;
      margin: auto;
      margin-top: 20px;
    }
  }
`;

const CenteredH2 = styled.h2`
  text-align: center;
`;

interface PitchPageProps {
  data: PitchPageQueryQuery;
}

const PitchPage: React.FC<PitchPageProps> = ({ data }) => {
  return (
    <LayoutPitch pageTitle="SABF Venture Competition">
      <WrapTest>
        <p>
          <StyledA href={updatesLink}>
            **SIGN UP HERE FOR UPDATES ABOUT THE COMPETITION**
          </StyledA>
        </p>

        {/* <StyledBreak></StyledBreak> */}
        <ThinP>
          The <span>Stanford Africa Business Forum Venture Competition</span>{' '}
          (April 16th, 2022) is an opportunity for founders to pitch to
          early-stage investors from across the globe. Judges and audience
          members include VC/angel investors from Silicon Valley and emerging
          markets alike. Competition winners will have the chance to enroll in a{' '}
          <span>curated set of Stanford entrepreneurship courses</span>,
          including access to the <span>LEAD incubator</span> and{' '}
          <span>startup accelerator</span>, well <span>worth over $15,000</span>
          .
        </ThinP>
        <StyledBreak></StyledBreak>
        <h2>Judges</h2>
        <Judges data={data}></Judges>
        <StyledBreak></StyledBreak>

        <h2>Application Process</h2>
        <StyledOrderedList>
          <li>
            {' '}
            <p>
              {' '}
              Sign up <StyledA href={competitionLink}>here</StyledA> by March
              9th, 2022{' '}
            </p>
          </li>
          <li>
            {' '}
            <p>Interviews March 14 - March 16th, 2022 </p>{' '}
          </li>
          <li>
            {' '}
            <p>Top 10 finalists notified by March 19th, 2022 </p>
          </li>
        </StyledOrderedList>
        <StyledBreak></StyledBreak>

        <CenteredH2>Judging Criteria</CenteredH2>
        <JudgingCriteria></JudgingCriteria>
        <StyledBreak></StyledBreak>

        <h2>FAQs</h2>
        <p>Please direct any questions to stanfordafricapitch@gmail.com</p>
        <StyledBreak></StyledBreak>

        <StandOutDiv>
          <h2>Eligibility</h2>
          <ul>
            <li>
              <Span>Africa-focused: </Span>
              <p>
                Majority of operations or customer base must be in Africa,
                strong preference for startups with at least one founder from
                Africa
              </p>
            </li>
            <li>
              <Span>Early-stage: </Span>
              <p>
                Less than 5 years old, raised less than USD 500,000 in funding
              </p>
            </li>
            <li>
              <Span>Initial traction: </Span>
              <p>Early MVP build, or evidence of initial customer base</p>
            </li>
          </ul>
        </StandOutDiv>
        <StyledBreak></StyledBreak>
      </WrapTest>
    </LayoutPitch>
  );
};

export const query = graphql`
  fragment SpeakerData on Airtable {
    id
    data {
      Name
      Organization
      Title
      Panel
      LinkedIn_Url
      Attachments {
        thumbnails {
          large {
            height
            width
            url
          }
        }
      }
    }
  }

  query PitchPageQuery {
    pitch: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Pitch)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
  }
`;

export default PitchPage;
