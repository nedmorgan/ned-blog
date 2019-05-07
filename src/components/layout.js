import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const LayoutContainer = styled.div`
  width: 100%;
`

export default ({ children }) => (
  <LayoutContainer>
    <Helmet>
      <title>Ned's Dev Blog</title>
      <meta
        name="description"
        content="A development blog that goes through my journey traversing the world of software development and all the learning that goes with it"
      />
      <meta
        name="keywords"
        content="development, web, software, engineering, javascript, react, dev, developer"
      />
      <meta name="author" content="Ned Morgan" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
      <meta name="referrer" content="origin" />
    </Helmet>
  </LayoutContainer>
)
