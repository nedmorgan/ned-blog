import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Social from "../components/social"

const IndexContainer = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  width: 600px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }
`

export default () => (
  <Layout>
    <Social />
    <IndexContainer>
      <h1>Welcome to devTime!</h1>
      <h3>
        The development journey is fraught with highs and lows, lots of
        emotions, and tons of code pushed to GitHub. I'll be talking about my
        dev experience, some of the things I've learned along the way, and just
        simple ways to keep sane while finding my path.
      </h3>
    </IndexContainer>
  </Layout>
)
