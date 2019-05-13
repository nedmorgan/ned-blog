import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Social from "../components/social"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Social />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>{post.frontmatter.description}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
