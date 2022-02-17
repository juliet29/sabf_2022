import Layout from 'components/navigation/layout';
import React from 'react';
import { Section } from 'styles/sharedStyles';

interface SpeakersPageProps {
    // : string;
}

const SpeakersPage: React.FC<SpeakersPageProps> = ({  }) => {
    return (
        <Layout
        pageTitle='Speakers + Panels'
       >
                    <Section>
               Stay tuned for more information!
           </Section>
       </Layout>
    );
};

export default SpeakersPage;
