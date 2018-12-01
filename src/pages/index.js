import { graphql } from "gatsby"
import Branch from "../templates/branch"

export default Branch

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "index" } }) {
      html
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`