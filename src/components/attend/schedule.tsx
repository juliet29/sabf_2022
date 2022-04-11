import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { primaryAccentColor, secondaryAccentColor } from 'styles/theme';
import { AttendPageQueryQuery } from '../../../graphql-types';

const ScheduleHolder = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    display: block;
  }

  @media ${devices.laptopMin} {
    max-width: 90%;
    /* margin: auto; */
    display: flex;
    flex-direction: row;
    ul {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(11, 1fr);
      column-gap: 2em;
    }
  }
`;

const ScheduleTitle = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 3px;
  font-size: large;
  @media ${devices.laptopMin} {
    max-width: 14vw;
    padding-top: 5px;
    padding-right: 10px;
    border-right: 1px solid #ccc;
    margin-right: 1em;
    border-bottom: 0;
  }
`;

const EventItem = styled.div`
  padding: 10px;
  border-bottom: 1px dashed #ccc;
  line-height: 22px;
  transition: ease 0.4s all;

  :hover {
    background: ${secondaryAccentColor};
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    span:nth-of-type(1) {
      /* flex-grow: 1; */
      min-width: 42px;
      font-weight: bold;

      @media ${devices.mobileLMin} {
        min-width: 3em;
      }
      /* margin-right: 5px; */
    }
    div:nth-of-type(1) {
      /* flex-grow: 2; */
      span:nth-of-type(2) {
        color: ${primaryAccentColor};
        font-size: smaller;
      }
    }
  }
`;

interface ScheduleProps {
  data: AttendPageQueryQuery;
}

const Duration = 'Duration: ';

const Schedule: React.FC<ScheduleProps> = ({ data }) => {
  return (
    <ScheduleHolder>
      <ScheduleTitle>
        <h2>April 16, 2022</h2>
        <p>Schedule of Events</p>
      </ScheduleTitle>
      <ul>
        {data.allConfernceScheduleCsv.nodes.map((item) => (
          <EventItem key={item.id}>
            <a href="/">
              <span>{item.Start_time}</span>
              <div>
                <span>{item.Schedule_name}</span>
                <br />
                <span>{Duration.concat(dateTrimmer(item.Mins))}</span>
              </div>
            </a>
          </EventItem>
        ))}
      </ul>
    </ScheduleHolder>
  );
};

export default Schedule;

const dateTrimmer = (time: string) => {
  console.log(time);
  let shortTime = '';
  if (time[0] == '0') {
    shortTime = time.slice(2, 4);

    if (shortTime[0] == '0') {
      shortTime = shortTime.slice(1);
    }

    shortTime = shortTime.concat(' mins');
  } else {
    let time01 = time[0].concat(' hrs');
    if (time[2] != '0') {
      let mid = ', ';
      time01 = time01 + mid.concat(time.slice(2, 4).concat(' mins'));
    }
    shortTime = time01;
  }

  return shortTime;
};
