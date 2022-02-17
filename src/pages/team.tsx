import Layout from 'components/navigation/layout';
import React from 'react';
import { Section } from 'styles/sharedStyles';

interface TeamPageProps {
    // : string;
}

const TeamPage: React.FC<TeamPageProps> = ({  }) => {
    return (
        <Layout
        pageTitle='Team'
       >
                    <Section>
               Stay tuned for more information!
           </Section>
       </Layout>
    );
};

export default TeamPage;
