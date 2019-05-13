import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const ColorContainer = styled.div`
  background: #283048; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #859398,
    #283048
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #859398,
    #283048
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100vh;
`

const LayoutContainer = styled.div`
  width: 700px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  margin: 0 auto;
  border-bottom: 2px solid black;

  .nav-link {
    float: right;
    margin-left: 1em;
    margin-top: 3em;
    text-decoration: none;
  }

  .nav-text {
    color: black;
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
