import React from 'react';
import {  graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'



const PitchPage = ({data}) => {

  
    return (
        <section>
            {
            data.allMdx.nodes.map( (node) => (
                <div>
                    <h1>{node.frontmatter.title}</h1>
                    <p>{node.frontmatter.number}</p>
                    <MDXRenderer>{node.body}</MDXRenderer>

                </div>
              
              
            )
            )
          }
        </section>
       
        
       
    )
  }
  export default PitchPage


export const query = graphql`
query MyQuery {
  allMdx {
    nodes {
      id
      frontmatter {
        title
        number
      }
      body
    }
  }
}

`