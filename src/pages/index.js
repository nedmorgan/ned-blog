import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Social from "../components/social"
import Footer from "../components/footer"

const IndexContainer = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  width: 775px;
  margin: 0 auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.55);
  padding: 1em;
  border-radius: 5px;
  margin-top: 0.5em;

  h1 {
    text-align: center;
  }

  h1,
  h3,
  h4,
  p {
    color: whitesmoke;
  }

  h4 {
    margin: 5px;
    font-size: 1.5em;
  }

  p {
    font-size: 1.25em;
    margin-top: 5px;
  }

  .line {
    height: 2px;
    width: 700px;
    background-color: whitesmoke;
  }

  .blog-link {
    text-decoration: none;
  }

  .blog-title {
    color: whitesmoke;
    text-decoration: underline;
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .blog-title:hover {
    color: #149cea;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 90%;

    .line {
      width: 90%;
    }

    h4 {
      font-size: 1em;
    }
  }
`

export default ({ data }) => {
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
        <h4>
          {data.allMarkdownRemark.totalCount}{" "}
          {data.allMarkdownRemark.totalCount < 1 ? `Posts` : `Post`}
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link className={`blog-link`} to={node.fields.slug}>
              <h3 className="blog-title">
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
            </Link>
            <p>{node.frontmatter.description}</p>
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
