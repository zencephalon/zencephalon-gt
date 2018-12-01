import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Branch from "../templates/branch"

export default Branch

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "index" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`