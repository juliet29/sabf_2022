import Layout from 'components/navigation/layout';

import RoleGroup from 'components/team/roleGroup';
import { graphql } from 'gatsby';
import React, { useLayoutEffect, useRef } from 'react';
import { TeamPageQueryQuery } from '../../graphql-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// TODO change to page query

interface TeamPageProps {
  data: TeamPageQueryQuery;
}

const TeamPage: React.FC<TeamPageProps> = ({ data }) => {
  const indivRef = useRef();
  const groupRef = useRef();
  // const groupSelector = gsap.utils.selector(groupRef);
  // console.log(groupSelector);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const groupSelector = gsap.utils.selector(groupRef);

    let revealContainers = groupSelector('.group');

    console.log(revealContainers);
    revealContainers.forEach((container) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: 'restart none none reset'
        }
      });

      // tl.set(container, { autoAlpha: 1 });
      tl.from(container, {
        opacity: 0,
        yPercent: -10,
        duration: 1,
        ease: 'power2.easeOut'
      });
    });
  });
  return (
    <Layout pageTitle="Team">
      <div ref={groupRef}>
        <div className="group">
          <RoleGroup
            groupTitle="Co-Presidents"
            nodes={data.leadership.nodes}
          ></RoleGroup>
        </div>
        <div className="group">
          <RoleGroup
            groupTitle="Finance & Sponsorships Team"
            nodes={data.finance.nodes}
          ></RoleGroup>{' '}
        </div>
        <div className="group">
          <RoleGroup
            groupTitle="Pitch Competition Team"
            nodes={data.pitch.nodes}
          ></RoleGroup>
        </div>{' '}
        <div className="group">
          <RoleGroup
            groupTitle="Marketing Team"
            nodes={data.marketing.nodes}
          ></RoleGroup>{' '}
        </div>{' '}
        <div className="group">
          <RoleGroup
            groupTitle="Content Team"
            nodes={data.speakers.nodes}
          ></RoleGroup>{' '}
        </div>{' '}
        <div className="group">
          <RoleGroup
            groupTitle="Gala and After-Party Team"
            nodes={data.gala.nodes}
          ></RoleGroup>{' '}
        </div>{' '}
        <div className="group">
          <RoleGroup
            groupTitle="Platform Team"
            nodes={data.platform.nodes}
          ></RoleGroup>{' '}
        </div>{' '}
        <div className="group">
          <RoleGroup
            groupTitle="Website Team"
            nodes={data.website.nodes}
          ></RoleGroup>{' '}
        </div>
      </div>
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
      sort: { fields: [data___Lead], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    marketing: allAirtable(
      filter: { data: { Role: { regex: "/(Marketing)/g" } } }
      sort: { fields: [data___Lead], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    platform: allAirtable(
      filter: { data: { Role: { regex: "/(Platform|Website)/g" } } }
      sort: { fields: [data___Lead], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    website: allAirtable(
      filter: { data: { Role: { regex: "/(Website)/g" } } }
      sort: { fields: [data___Lead], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    finance: allAirtable(
      filter: { data: { Role: { regex: "/(Finance)/g" } } }
      sort: { fields: [data___Lead], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    gala: allAirtable(
      filter: { data: { Role: { regex: "/(Gala)/g" } } }
      sort: { fields: [data___Lead], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    speakers: allAirtable(
      filter: { data: { Role: { regex: "/(Keynotes|Panel)/" } } }
      sort: { fields: [data___Lead], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
    pitch: allAirtable(
      filter: { data: { Role: { regex: "/(Pitch)/" } } }
      sort: { fields: [data___Lead], order: ASC }
    ) {
      nodes {
        ...MemberData
      }
    }
  }
`;

export default TeamPage;
