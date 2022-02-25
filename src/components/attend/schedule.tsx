import React from 'react';
import styled from 'styled-components';
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
`;

const EventItem = styled.div`
    padding: 10px;
    border-bottom: 1px dashed #ccc;
    line-height: 22px;
    transition: ease .4s all;

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
            /* margin-right: 5px; */
        }
        div:nth-of-type(1) {
            /* flex-grow: 2; */
            span:nth-of-type(2){
                color: ${primaryAccentColor};
                font-size: smaller;
            }
        }
    }
    
`

interface ScheduleProps {
    data: AttendPageQueryQuery
}

const Duration = "Duration: "

const dateTrimmer = (time:string) => {
    let shortTime = ""
    if (time[0] == "0") {
        shortTime = time.slice(2, 4)

        if (shortTime[0] == "0") {
            shortTime = shortTime.slice(1)
        }

        shortTime = shortTime.concat(" mins")
    }
    else {
        let time01 = time[0].concat(" hrs")
        if (time[2] != "0") {
            let mid = ", "
            time01 = time01 + mid.concat(time.slice(2,4).concat(" mins"))
        }
        shortTime = time01

    }

    return shortTime


}

const Schedule: React.FC<ScheduleProps> = ({ data }) => {
    return (
        <ScheduleHolder>
            <div> 
                <h2>April XX, 2022</h2>
                <p>Schedule of Events</p> 
            </div>
            <ul>
            {
                data.allConfernceScheduleCsv.nodes.map((item) => (
                    <EventItem  key={item.id}>
                        <a href="/">
                            <span>{item.Start_time}</span>
                            <div>
                                <span>{item.Schedule_name}</span>
                                <br/>
                                <span>{Duration.concat(dateTrimmer(item.Mins))}</span>
                            </div>
                        </a>
                    </EventItem >
                    
                ))
            }
            </ul>
        </ScheduleHolder>
    );
};

export default Schedule;
