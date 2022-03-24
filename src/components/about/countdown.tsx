import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { LandingStyledLink } from 'styles/sharedStyles';
import { primaryAccentColor, secondaryAccentColor } from 'styles/theme';

const Wrapper = styled.div`
  /* box-sizing: border-box; */
  height: 100vh;
  margin: 8vh auto;
  background-color: ${secondaryAccentColor};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  padding: 20px;

  > h1:nth-of-type(2) {
    border: 1px white solid;
    text-transform: uppercase;
    transition: all 0.7s ease-in;

    :hover {
      background-color: white;
      a {
        color: ${primaryAccentColor};
      }
    }
  }

  @media ${devices.laptopMin} {
    height: 60vh;
    padding: 10vh 0;
    > h1:nth-of-type(2) {
      width: fit-content;
      padding: 10px;
      margin: auto;
    }
  } ;
`;

const TimerHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${devices.laptopMin} {
    flex-direction: row;
    max-width: 80%;
    margin: 10vh auto;
  } ;
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
  /* justify-content: space-between; */
  padding: 5px 2px;

  @media ${devices.laptopMin} {
    width: 9em;
    height: 9em;
    margin: 0 1em;
  } ;
`;

interface CountdownProps {
  // : string;
}

const Countdown: React.FC<CountdownProps> = ({}) => {
  const [allValues, setAllValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const interval = setInterval(() => {
      // const year = new Date().getFullYear();
      const forumDate = new Date('4/16/2022').getTime();
      const today = new Date().getTime();

      // get the difference
      let diff = forumDate - today;
      // some calculations
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      // console.log(days);
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setAllValues((allValues) => {
        return {
          ...allValues,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        };
      });

      // console.log(allValues);
      return () => clearInterval(interval);
    }, 1000);
  });

  return (
    <Wrapper>
      <h1>The Stanford Africa Business Forum is quickly approaching...</h1>
      <TimerHolder>
        <TimerItem>
          <h2>{allValues.days}</h2>
          <p>DAYS</p>
        </TimerItem>
        <TimerItem>
          <h2>{allValues.hours}</h2>
          <p>HOURS</p>
        </TimerItem>
        <TimerItem>
          <h2>{allValues.minutes}</h2>
          <p>MINUTES</p>
        </TimerItem>
        <TimerItem>
          <h2>{allValues.seconds}</h2>
          <p>SECONDS</p>
        </TimerItem>
      </TimerHolder>

      <h1>
        <LandingStyledLink to="attend">Buy tickets now </LandingStyledLink>
      </h1>
    </Wrapper>
  );
};

export default Countdown;
