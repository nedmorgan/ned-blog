import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Social from "../components/social"

const BlogPostContainer = styled.div`
  width: 650px;
  margin: 0 auto;
  margin-top: 5em;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Social />
      <BlogPostContainer>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>{post.frontmatter.description}</p>
      </BlogPostContainer>
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
