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
                    gatsbyImageData
                  }
                }
                image_02 {
                  childImageSharp {
                    gatsbyImageData
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