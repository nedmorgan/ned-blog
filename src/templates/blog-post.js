import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Social from "../components/social"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const BlogPostContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-top: 2em;
  font-family: "Lato", sans-serif;
  position: relative;
  z-index: 2;

  .content {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
  }

  .twitter-div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    height: 4em;
  }

  .twitter-text {
    padding: 0.5em;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: background-color 2s;
  }
  .twitter-text:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  h1,
  h3,
  p {
    color: whitesmoke;
  }

  span {
    font-family: "Lato", sans-serif;
  }

  a {
    text-decoration: none;
    color: whitesmoke;
  }

  a:hover {
    color: #149cea;
    cursor: pointer;
  }

  h1,
  h3 {
    text-align: center;
  }
`

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  return (
    <Layout>
      <Social />
      <BlogPostContainer>
        <div className={`content`}>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.description}</p>
        </div>
        <div>
          <h3>
            What does{" "}
            <a href={`https://twitter.com/`}>
              <FontAwesomeIcon
                className={`icon`}
                icon={faTwitter}
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>{" "}
            have to say....
          </h3>
          <div className={`twitter-div`}>
            {post.frontmatter.tags.map(tag => {
              return (
                <div className={`twitter-text`}>
                  <span>
                    <a
                      href={`https://twitter.com/search?q=${tag}&src=typd`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tag}
                    </a>
                  </span>
                </div>
              )
            })}
          </div>
        </div>
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
        tags
      }
    }
  }
`
