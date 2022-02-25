import Layout from 'components/navigation/layout';
import GroupHolder from 'components/team/groupHolder';
import { useAirtableTeamContent } from 'hooks/use-airtable-team-content';
import React from 'react';


// TODO change to page query 


export  type AirtableTeamData = {
    edges:  Array<{ node: { id: string, data?: { Name?: string | null, Program?: string | null, Industries?: Array<string | null> | null, Attachments?: Array<{ thumbnails?: { large?: { height?: number | null, url?: string | null, width?: number | null } | null } | null } | null> | null } | null } }>
}

const TeamPage = ({  }) => {
    const values: AirtableTeamData = useAirtableTeamContent()
    return (
        <Layout pageTitle='Team'>

                       <GroupHolder edges={values}></GroupHolder>   

       </Layout>
    );
};

export default TeamPage;
