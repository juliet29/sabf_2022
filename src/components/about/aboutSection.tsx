import React from 'react';
// import styled from 'styled-components';
// import {GridHolder } from 'styles/sharedStyles';
import {useContent} from 'hooks/use-content'
import GenericSection from './genericSection';



 
const AboutSection = () => {
    const nodes = useContent()
    // console.log(nodes)
    const aboutNode = nodes.find(node => node.id === "01");
    console.log(aboutNode)

    return (
        
            <div>
                <h1>hellloooooo</h1>
                <GenericSection></GenericSection>
                {/* {
                    nodes.map(node => {
                        // console.log(node.frontmatter.number)
                        // if (node.frontmatter.number != "01" )  {}
                            <GenericSection
                                // number= {node.frontmatter.number}
                                // title = {node.frontmatter.title}
                                // body = {node.frontmatter.body}
                                ></GenericSection>
                            
                        
                    })
                } */}
            </div>
            
        
       
    );
};

export default AboutSection;