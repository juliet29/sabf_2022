import Schedule from 'components/attend/schedule';
import Layout from 'components/navigation/layout';
import { graphql } from 'gatsby';
import React from 'react';
import { Section } from 'styles/sharedStyles';
import { AttendPageQueryQuery } from '../../graphql-types';

interface AttendPageProps {
    data: AttendPageQueryQuery
}

const AttendPage: React.FC<AttendPageProps> = ({ data }) => {
    console.log("hi attend", data)
    return (
        <Layout
        pageTitle='Attend'
       >
           <Section>
               <Schedule data={data}></Schedule>
           </Section>
       </Layout>
    );
};

export const query = graphql`
  query AttendPageQuery {
  allConfernceScheduleCsv {
    nodes {
      End_time
      Mins
      Schedule_name
      Start_time
      id
    }
  }
}

`

export default AttendPage;
