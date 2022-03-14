import Layout from 'components/navigation/layout';
import Panels from 'components/speakers/panels';
import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';

interface SpeakersPageProps {
  // : string;
}

const Section = styled.section`
  margin-bottom: 2em;
  h1 {
    display: inline;
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

        <Panels></Panels>
      </Section>
    </Layout>
  );
};

export default SpeakersPage;
