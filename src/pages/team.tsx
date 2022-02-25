import Layout from 'components/navigation/layout';
import GroupHolder from 'components/team/groupHolder';
import { useAirtableTeamContent } from 'hooks/use-airtable-team-content';
import React from 'react';
import { Section } from 'styles/sharedStyles';
// import { AirtableTeamContentQuery } from '../../graphql-types';

interface TeamPageProps {
    // : string;
}

export  type AirtableTeamData = {
    // data: Array<{ node: { data?: { Name?: string | null, Program?: string | null, Industries?: Array<string | null> | null, Attachments?: Array<{ thumbnails?: { large?: { height?: number | null, url?: string | null, width?: number | null } | null } | null } | null> | null } | null } }>
    edges:  Array<{ node: { id: string, data?: { Name?: string | null, Program?: string | null, Industries?: Array<string | null> | null, Attachments?: Array<{ thumbnails?: { large?: { height?: number | null, url?: string | null, width?: number | null } | null } | null } | null> | null } | null } }>
}

const TeamPage: React.FC<TeamPageProps> = ({  }) => {
    const values: AirtableTeamData = useAirtableTeamContent()
    console.log("hi team", values)
    // console.log("hi team", values.edges.map(i => i.node.data?.Name))
    return (
        <Layout pageTitle='Team'>
                    <Section>
                    
                       <GroupHolder edges={values}></GroupHolder>   
           </Section>
       </Layout>
    );
};

export default TeamPage;
