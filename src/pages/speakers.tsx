import Layout from 'components/navigation/layout';
import Panels from 'components/speakers/panels';
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { SpeakersPageQueryQuery } from '../../graphql-types';

interface SpeakersPageProps {
  data: SpeakersPageQueryQuery;
}

const Section = styled.section`
  margin-bottom: 2em;
  h1 {
    display: inline;
  }
`;

const SpeakersPage: React.FC<SpeakersPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="Speakers + Panels">
      <Section>
        <h1> Speakers </h1>
        <p>Updates coming soon! </p>
      </Section>

      <Section>
        <h1>Panels</h1>

        <Panels></Panels>
      </Section>
    </Layout>
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

  query SpeakersPageQuery {
    blockchain: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Blockchain)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
    energy: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Clean Energy)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
    ebusiness: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Entrepreneurship)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
    fintech: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Fintech)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
    healthcare: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Healthcare)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
    investing: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Investing)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
    keynote: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Keynote)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
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

export default SpeakersPage;
