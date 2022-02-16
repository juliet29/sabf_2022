import { useStaticQuery, graphql } from "gatsby"
// import { PageProps } from "gatsby";
// import {MarkdownContentQuery} from "../../graphql-types"

export const useContent = () => {
  const { allMdx } = useStaticQuery(
    graphql`
    query MarkdownContent {
        allMdx {
            nodes {
            id
            frontmatter {
                title
                number
                image_01 {
                  childImageSharp {
                    gatsbyImageData(
                      layout: CONSTRAINED
                      height: 700
                      aspectRatio: 0.75
                      )
                  }
                }
                image_02 {
                  childImageSharp {
                    gatsbyImageData(
                      layout: CONSTRAINED
                      height: 700
                      aspectRatio: 0.75
                      )
                  }
                }
            }
            body
            }
        }
        }
    `
  )
  return allMdx.nodes
}