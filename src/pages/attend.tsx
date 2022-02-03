import Layout from 'components/navigation/layout';
import React from 'react';

interface AttendPageProps {
    // : string;
}

const AttendPage: React.FC<AttendPageProps> = ({  }) => {
    return (
        <Layout
        pageTitle='Attend'
       >
         <h1>Attend!</h1>
       </Layout>
    );
};

export default AttendPage;
