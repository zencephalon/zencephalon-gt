import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Header
        title={`${data.site.siteMetadata.title}: ${post.fields.slug.replace(/\W/g, ' ')}`} />
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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