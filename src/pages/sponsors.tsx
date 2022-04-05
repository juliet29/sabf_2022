import Layout from 'components/navigation/layout';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import { StyledA } from 'styles/sharedStyles';

const rugged = '../assets/rugged.jpg';
const SEED = '../assets/SEED.jpeg';
const abc = '../assets/stanfordabc.jpeg';
const tlcom = '../assets/tlcom.png';

const ruggedH = 'https://www.ruggedelegance.org/';
const SEEDH = 'https://www.gsb.stanford.edu/seed';
const tlcomH = 'https://tlcomcapital.com/';
const regen =
  'https://docs.google.com/document/d/1tgSA24sQ7lGJFtXuIoWXRf6KkiZZtKfhTYWrgCjfDl4/edit?usp=sharing';

interface SponsorsPageProps {
  // : string;
}

const StyledLayout = styled(Layout)`
  h2 {
    margin-bottom: 3em;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;

  p {
    text-align: center;
    margin: auto;
    margin-bottom: 25px;
  }

  @media ${devices.laptopMin} {
    max-width: 60%;
    margin: auto;
    min-height: 100vh;
    margin-bottom: 200px;
    div {
      width: 80%;

      /* margin: auto; */
      margin-bottom: 30px;
    }

    div:nth-of-type(2) {
      height: 250px;
      margin-bottom: 5px;
    }
    a:nth-of-type(3) {
      width: 80%;
    }
  } ;
`;

const SponsorsPage: React.FC<SponsorsPageProps> = ({}) => {
  return (
    <StyledLayout pageTitle="Sponsors">
      <Grid>
        <a href={tlcomH}>
          <StaticImage src={tlcom} alt="" />
        </a>

        <a href={ruggedH}>
          {' '}
          <StaticImage src={rugged} alt="" />
        </a>
        <StyledA href={regen}>
          <p>Rugged Elegance Article on Regenerative Agriculture</p>
        </StyledA>

        <a href={SEEDH}>
          {' '}
          <StaticImage src={SEED} alt="" />
        </a>

        <StaticImage src={abc} alt="" />
      </Grid>
      {/* <h2>Check out highlights from our previous conferences!</h2> */}
    </StyledLayout>
  );
};

export default SponsorsPage;
