import Layout from 'components/navigation/layout';

import RoleGroup from 'components/team/roleGroup';
import { graphql } from 'gatsby';
import React from 'react';
import { TeamPageQueryQuery } from '../../graphql-types';

// TODO change to page query

interface TeamPageProps {
  data: TeamPageQueryQuery;
}

const TeamPage: React.FC<TeamPageProps> = ({ data }) => {
  return (
    <Layout pageTitle="Team">
      <RoleGroup
        groupTitle="Co-Presidents"
        nodes={data.leadership.nodes}
      ></RoleGroup>
      <RoleGroup
        groupTitle="Finance & Sponsorships Team"
        nodes={data.finance.nodes}
      ></RoleGroup>
      <RoleGroup
        groupTitle="Pitch Competition Team"
        nodes={data.pitch.nodes}
      ></RoleGroup>
      <RoleGroup
        groupTitle="Marketing Team"
        nodes={data.marketing.nodes}
      ></RoleGroup>
      <RoleGroup
        groupTitle="Content Team"
        nodes={data.speakers.nodes}
      ></RoleGroup>
      <RoleGroup
        groupTitle="Gala and After-Party Team"
        nodes={data.gala.nodes}
      ></RoleGroup>
      <RoleGroup
        groupTitle="Website and Platform Team"
        nodes={data.website.nodes}
      ></RoleGroup>
      {/* <GroupHolder data={data}></GroupHolder> */}
    </Layout>
  );
};

export const query = graphql`
  fragment MemberData on Airtable {
    data {
      Role
      Name
      Program
      linkedInUrl
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
    id
  }

  query TeamPageQuery {
    leadership: allAirtable(
      filter: { data: { Role: { regex: "/(President)/" } } }
      sort: { fields: [data___Name], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    marketing: allAirtable(
      filter: { data: { Role: { regex: "/(Marketing)/g" } } }
      sort: { fields: [data___Name], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    website: allAirtable(
      filter: { data: { Role: { regex: "/(Website)/g" } } }
      sort: { fields: [data___Name], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    finance: allAirtable(
      filter: { data: { Role: { regex: "/(Finance & Sponsorship)/g" } } }
      sort: { fields: [data___Name], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    gala: allAirtable(
      filter: { data: { Role: { regex: "/Gala/g" } } }
      sort: { fields: [data___Name], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    speakers: allAirtable(
      filter: { data: { Role: { regex: "/(Keynotes|Panel)/" } } }
      sort: { fields: [data___Name], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    pitch: allAirtable(
      filter: { data: { Role: { regex: "/(Pitch)/" } } }
      sort: { fields: [data___Name], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
  }
`;

export default TeamPage;
