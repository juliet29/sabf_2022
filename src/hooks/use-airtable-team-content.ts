import { useStaticQuery, graphql } from "gatsby"
// import { PageProps } from "gatsby";
// import {MarkdownContentQuery} from "../../graphql-types"
// for the about page content 

export const useAirtableTeamContent = () => {
  const { allAirtable } = useStaticQuery(
    graphql`
    query AirtableTeamContent {
            allAirtable {
                edges {
                    node {
                        id
                        data {
                        Name
                        Program
                        Industries
                        Attachments {
                            thumbnails {
                            large {
                                height
                                url
                                width
                            }
                            }
                        }
                        }
                    }
                }
            }
        }
    `
  )
  return allAirtable
}