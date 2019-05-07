import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const IndexContainer = styled.div`
  font-family: "Lato";
  font-weight: 400;
  width: 600px;
  margin: 0 auto;
`

export default () => (
  <Layout>
    <IndexContainer>
      <h1>Welcome to My Blog!</h1>
    </IndexContainer>
  </Layout>
)
