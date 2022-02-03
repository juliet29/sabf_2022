import Layout from 'components/navigation/layout';
import React from 'react';

interface TeamPageProps {
    // : string;
}

const TeamPage: React.FC<TeamPageProps> = ({  }) => {
    return (
        <Layout
        pageTitle='Team'
       >
         <h1>Team!</h1>
       </Layout>
    );
};

export default TeamPage;
