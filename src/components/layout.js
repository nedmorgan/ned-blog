import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const ColorContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("background.jpg");
  background-size: 100vw 100vh;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
`

const LayoutContainer = styled.div`
  width: 700px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  margin: 0 auto;
  border-bottom: 2px solid whitesmoke;

  .nav-link {
    float: right;
    margin-left: 1em;
    margin-top: 3em;
    text-decoration: none;
  }

  .nav-text {
    color: whitesmoke;
  }

  .nav-text:hover {
    color: #149cea;
    cursor: pointer;
  }

  img {
    height: 100px;
    width: 100px;
    border-radius: 15px;
  }
`

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile {
          edges {
            node {
              childImageSharp {
                id
                original {
                  width
                  height
                  src
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <ColorContainer>
      <LayoutContainer>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content="A development blog that goes through my journey traversing the world of software development and all the learning that goes with it"
          />
          <meta
            name="keywords"
            content="development, web, software, engineering, javascript, react, dev, developer"
          />
          <meta name="author" content="Ned Morgan" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charset="UTF-8" />
          <meta name="referrer" content="origin" />
        </Helmet>
        <div>
          <Link className={`nav-image`} to={`/`}>
            <img
              src={data.allFile.edges[0].node.childImageSharp.original.src}
              alt={`Ned's Avatar`}
            />
          </Link>
          <Link className={`nav-link`} to={`/about/`}>
            <h3 className={`nav-text`}>About</h3>
          </Link>
          <Link className={`nav-link`} to={`/contact/`}>
            <h3 className={`nav-text`}>Contact</h3>
          </Link>
        </div>
      </LayoutContainer>
      {children}
    </ColorContainer>
  )
}
