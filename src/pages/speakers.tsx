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
         <h1>Speakers!</h1>
       </Layout>
    );
};

export default SpeakersPage;
