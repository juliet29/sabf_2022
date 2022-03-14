import Layout from 'components/navigation/layout';
import Panels from 'components/speakers/panels';
import React from 'react';
import styled from 'styled-components';

interface SpeakersPageProps {
  // : string;
}

const Section = styled.section`
  margin-bottom: 2em;
  h1 {
    display: inline;
    /* border-bottom: white 1px solid; */
  }
  p:nth-of-type(1) {
    margin-top: 1em;
  }
`;

const SpeakersPage: React.FC<SpeakersPageProps> = ({}) => {
  return (
    <Layout pageTitle="Speakers + Panels">
      <Section>
        <h1> Speakers </h1>
        <p>Updates coming soon! </p>
      </Section>

      <Section>
        <h1>Panels</h1>
        <p>
          Our panels will feature invited guests from a diverse range of
          industries. These thought-leaders will share their expertise about
          everything from healthcare to cryptocurrency, and the innovations
          taking place on the African continent. Stay tuned for profiles of our
          amazing panelists.
        </p>
        <Panels></Panels>
      </Section>
    </Layout>
  );
};

export default SpeakersPage;
