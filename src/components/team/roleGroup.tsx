import React from 'react';
import styled from 'styled-components';
import { devices } from 'styles/responsiveSizes';
import '@fontsource/montserrat/200-italic.css';
import '@fontsource/montserrat/600.css';
import CardGrid from 'components/general/cardGrid';

interface RoleGroupProps {
  groupTitle: string;
  nodes: Array<{
    id: string;
    data?: {
      Role?: string | null;
      Name?: string | null;
      Program?: string | null;
      linkedInUrl?: string | null;
      Attachments?: Array<{
        thumbnails?: {
          large?: {
            height?: number | null;
            width?: number | null;
            url?: string | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
  }>;
}
const Wrapper = styled.div`
  box-sizing: border-box;
  h3 {
    padding-bottom: 0.5em;
    font-weight: 600;
  }
  margin-bottom: 1em;

  @media ${devices.laptopMin} {
    margin-bottom: 3em;
    h3 {
      font-size: 1.5em;
      padding-bottom: 1em;
      /* color: orange; */
    }
  }
`;

const RoleGroup: React.FC<RoleGroupProps> = ({ groupTitle, nodes }) => {
  return (
    <Wrapper>
      <h3>{groupTitle}</h3>
      <CardGrid nodes={nodes}></CardGrid>
    </Wrapper>
  );
};

export default RoleGroup;
