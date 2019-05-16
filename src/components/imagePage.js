import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img fluid={data.allFile.edges[1].node.childImageSharp.original.src} />
  </div>
)

export const query = graphql`
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
  }
`
