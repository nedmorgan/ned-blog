import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Social from "../components/social"
import Footer from "../components/footer"

const IndexContainer = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  width: 700px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }

  .line {
    height: 2px;
    width: 700px;
    background-color: black;
  }

  .blog-title {
    color: black;
    text-decoration: none;
  }

  .blog-title:hover {
    color: #149cea;
    cursor: pointer;
  }
`

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Social />
      <IndexContainer>
        <h1>Welcome to devTime!</h1>
        <h3>
          The development journey is fraught with highs and lows, lots of
          emotions, and tons of code pushed to GitHub. I'll be talking about my
          dev experience, some of the things I've learned along the way, and
          just simple ways to keep sane while finding my path.
        </h3>
        <div className="line" />
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3 className="blog-title">
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </IndexContainer>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
