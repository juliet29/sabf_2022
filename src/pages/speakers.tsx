import Layout from 'components/navigation/layout';
import React from 'react';

interface SpeakersPageProps {
    // : string;
}

const SpeakersPage: React.FC<SpeakersPageProps> = ({  }) => {
    return (
        <Layout
        pageTitle='Speakers + Panels'
       >

               Stay tuned for more information!
       </Layout>
    );
};

export default SpeakersPage;
