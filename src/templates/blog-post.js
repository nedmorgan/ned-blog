import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Social from "../components/social"

const BlogPostContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-top: 2em;
  font-family: "Lato", sans-serif;
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
      <Footer />
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
