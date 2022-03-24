import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { primaryAccentColor } from 'styles/theme';

const Wrapper = styled.div`
  /* box-sizing: border-box; */
  height: 100vh;
  margin: 8vh auto;
  background-color: orange;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  padding: 20px;
`;

const TimerHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TimerItem = styled.div`
  background-color: ${primaryAccentColor};
  width: 5em;
  height: 5em;
  margin: 1em auto;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 2px;
`;

interface CountdownProps {
  // : string;
}

const Countdown: React.FC<CountdownProps> = ({}) => {
  return (
    <Wrapper>
      <h1>The Stanford Africa Business Forum is quickly approaching..</h1>
      <TimerHolder>
        <TimerItem>
          <h2>x</h2>
          <p>DAYS</p>
        </TimerItem>
        <TimerItem>
          <h2>x</h2>
          <p>HOURS</p>
        </TimerItem>
        <TimerItem>
          <h2>x</h2>
          <p>MINUTES</p>
        </TimerItem>
        <TimerItem>
          <h2>x</h2>
          <p>SECONDS</p>
        </TimerItem>
      </TimerHolder>

      <h1>
        <Link to="attend">Get your tickets now! </Link>
      </h1>
    </Wrapper>
  );
};

export default Countdown;
