import Schedule from 'components/attend/schedule';
import { StyledCTA } from 'components/landing';
import Layout from 'components/navigation/layout';
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';

import { AttendPageQueryQuery } from '../../graphql-types';

const TopDiv = styled.div`
  @media ${devices.laptopMin} {
    display: flex;
    flex-direction: row;

    a {
      align-self: center;
      display: flex;
      text-decoration: none;
      position: relative;
      top: -5px;
    }
  } ;
`;

const Blurb = styled.h2`
  margin-bottom: 1em;
  @media ${devices.laptopMin} {
    max-width: 60%;
  }
`;

const AttendCTA = styled(StyledCTA)`
  /* margin: auto; */
  margin-bottom: 1em;
  font-size: clamp(1.3em, 1.9em, 2.1em);
  text-align: center;
  @media ${devices.laptopMin} {
    padding: 7px;
  }
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

interface AttendPageProps {
  data: AttendPageQueryQuery;
}

const AttendPage: React.FC<AttendPageProps> = ({ data }) => {
  console.log('hi attend', data);
  return (
    <Layout pageTitle="Attend" hideTitle={true}>
      <TopDiv>
        <Blurb>
          We look forward to bringing you an exciting host of events.
          Registration links for the Forum (online), and Gala and Afterparty
          (in-person) are available online.
          {/* <StyledA href="https://sto.stanfordtickets.org/stanford-africa-business-forum/registration">
          {' '}
          here
        </StyledA> */}
        </Blurb>
        <a href="https://sto.stanfordtickets.org/stanford-africa-business-forum/registration">
          {' '}
          <AttendCTA>BUY TICKETS NOW</AttendCTA>
        </a>
      </TopDiv>

      <Schedule data={data}></Schedule>
      <BottomDiv>
        <a href="https://sto.stanfordtickets.org/stanford-africa-business-forum/registration">
          {' '}
          <AttendCTA>BUY TICKETS NOW</AttendCTA>
        </a>
      </BottomDiv>
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
`;

export default AttendPage;
