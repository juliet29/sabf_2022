import Layout from 'components/navigation/layout';
import GroupHolder from 'components/team/groupHolder';
import { graphql } from 'gatsby';
// import { useAirtableTeamContent } from 'hooks/use-airtable-team-content';
import React from 'react';
import { TeamPageQueryQuery } from '../../graphql-types';


// TODO change to page query 

interface TeamPageProps {
    data: TeamPageQueryQuery
}


export  type AirtableTeamData = {
    edges:  Array<{ node: { id: string, data?: { Name?: string | null, Program?: string | null, Industries?: Array<string | null> | null, Attachments?: Array<{ thumbnails?: { large?: { height?: number | null, url?: string | null, width?: number | null } | null } | null } | null> | null } | null } }>
}

const TeamPage:React.FC<TeamPageProps>  = ({ data }) => {

    return (
        <Layout pageTitle='Team'>

            <GroupHolder data={data}></GroupHolder>   

       </Layout>
    );
};


export const query = graphql`
  query TeamPageQuery {
  allAirtable {
    nodes {
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
  }
}

`

export default TeamPage;
