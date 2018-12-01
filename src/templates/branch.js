import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet
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