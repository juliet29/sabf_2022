import { graphql } from "gatsby";

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;

