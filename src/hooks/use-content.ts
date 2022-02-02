import { useStaticQuery, graphql } from "gatsby"
// import { PageProps } from "gatsby";
import {MarkdownContentQuery} from "../../graphql-types"

export const useContent = () => {
  const { allMdx }: MarkdownContentQuery = useStaticQuery(
    graphql`
    query MarkdownContent {
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
  )
  return allMdx.nodes
}