import Layout from 'components/navigation/layout';
import React from 'react';
import { Section } from 'styles/sharedStyles';

interface PressPageProps {
    // : string;
}

const PressPage: React.FC<PressPageProps> = ({  }) => {
    return (
        <Layout
        pageTitle='Press + Videos'
       >
                <Section>
               Stay tuned for more information!
           </Section>
       </Layout>
        
    );
};

export default PressPage;
