import Form from 'components/general/form';
import Layout from 'components/navigation/layout';
import React from 'react';
import styled from 'styled-components';
import {edgeSpace } from 'styles/theme';


const Section = styled.section`
  margin-top: ${edgeSpace + "em"};
  padding-left: ${edgeSpace + "em"};
  padding-right: ${edgeSpace + "em"};

  
`;





const PitchPage = () => {

  
    return (
    
       <Layout
        pageTitle='Pitch Competition'
       >
         <Section>
           <h2>
             Launching soon! 
             Enter your email below to be 
             notified about new updates.
           </h2>
           <Form></Form>
           
         </Section>
    
       </Layout>
        
       
    )
  }
  export default PitchPage



