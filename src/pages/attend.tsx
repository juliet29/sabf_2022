import Layout from 'components/navigation/layout';
import React from 'react';
import { Section } from 'styles/sharedStyles';

interface AttendPageProps {
    // : string;
}

const AttendPage: React.FC<AttendPageProps> = ({  }) => {
    return (
        <Layout
        pageTitle='Attend'
       >
           <Section>
               Stay tuned for more information!
           </Section>
       </Layout>
    );
};

export default AttendPage;
