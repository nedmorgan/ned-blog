import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Social from "../components/social"
import Footer from "../components/footer"

const AboutContainer = styled.div`
  font-family: "Lato";
  font-weight: 400;
  width: 600px;
  margin: 0 auto;
  margin-top: 2em;
  position: relative;
  color: whitesmoke;

  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  img {
    border-radius: 10px;
    height: 267px;
    width: 400px;
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <Social />
      <AboutContainer>
        <div className={`image-container`}>
          <img
            src={data.allFile.edges[2].node.childImageSharp.original.src}
            alt={`Ned Morgan`}
          />
        </div>
        <p>
          I created this blog as an outlet for me to talk/vent about my little
          development journey. My journey, like most, is full of ups and down.
          There are times when I'm super excited by what I have created and
          other times that I want to set my computer alfame like it was Jimi
          Hendrix's guitar.
        </p>
      </AboutContainer>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          childImageSharp {
            id
            original {
              height
              width
              src
            }
          }
        }
      }
    }
  }
`
