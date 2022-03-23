import Layout from 'components/navigation/layout';
import Keynotes from 'components/speakers/keynotes';
import Panels from 'components/speakers/panels';
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
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
        <h1> Keynote Speakers </h1>
        <Keynotes data={data}></Keynotes>
      </Section>

      <Section>
        <h1>Panels</h1>

        <Panels data={data}></Panels>
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
    Blockchain: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Blockchain)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
    Energy: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Clean Energy)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
    Entrepreneurship: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Entrepreneurship)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
    FinTech: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Fintech)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
    Health: allAirtable(
      filter: {
        queryName: { eq: "Speakers" }
        data: { Panel: { regex: "/(Healthcare)/g" } }
      }
    ) {
      nodes {
        ...SpeakerData
      }
    }
    Investing: allAirtable(
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
      sort: { fields: [data___Name], order: DESC }
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
