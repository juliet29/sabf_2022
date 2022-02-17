import Form from 'components/general/form';
import Layout from 'components/navigation/layout';
import React from 'react';
import { Section } from 'styles/sharedStyles';



const PitchPage = () => {
    return (
    
       <Layout
        pageTitle='Pitch Competition'
       >
         <Section>
           <h2 style={{
             marginBottom: "1em"
           }}>
             Launching soon! 
             Enter your email below to be 
             notified about updates.
           </h2>
           <Form></Form>
           
         </Section>
    
       </Layout>
        
       
    )
  }
  export default PitchPage



