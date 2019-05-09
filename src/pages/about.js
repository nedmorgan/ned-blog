import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Social from "../components/social"

const AboutContainer = styled.div`
  font-family: "Lato";
  font-weight: 400;
  width: 600px;
  margin: 0 auto;
  margin-top: 5em;

  p {
    font-family: "Lato", sans-serif;
  }
`

export default () => (
  <Layout>
    <Social />
    <AboutContainer>
      <img src={`ned.JPG`} alt={`Ned Morgan`} />
      <p>
        I created this blog as an outlet for me to talk/vent about my little
        development journey. My journey, like most, is full of ups and down.
        There are times when I'm super excited by what I have created and other
        times that I want to set my computer alfame like it was Jimi Hendrix's
        guitar.
      </p>
    </AboutContainer>
  </Layout>
)
