import Schedule from 'components/attend/schedule';
import Layout from 'components/navigation/layout';
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { StyledA } from 'styles/sharedStyles';

import { AttendPageQueryQuery } from '../../graphql-types';

const Blurb = styled.h3`
@media ${devices.laptopMin} {
    max-width: 80%;
}
  
`;

interface AttendPageProps {
    data: AttendPageQueryQuery
}

const AttendPage: React.FC<AttendPageProps> = ({ data }) => {
    console.log("hi attend", data)
    return (
        <Layout
        pageTitle='Attend'
       >
 
               <Blurb>We look forward to bringing you an exciting host of events. 
                   Registration links for the Forum (online), and Gala and Afterparty (in-person) 
                   are available 
                   <StyledA href="https://sto.stanfordtickets.org/stanford-africa-business-forum/registration"> here</StyledA>. 
                </Blurb>
               <Schedule data={data}></Schedule>

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
