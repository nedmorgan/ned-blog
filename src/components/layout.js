import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const LayoutContainer = styled.div`
  width: 600px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  margin: 0 auto;

  .nav-link {
    float: right;
    margin-left: 1em;
    margin-top: 3em;
  }

  img {
    height: 100px;
    width: 100px;
    border-radius: 15px;
  }
`

export default ({ children }) => (
  <div>
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
      <div>
        <Link className={`nav-image`} to={`/`}>
          <img src={`ned_avatar.png`} alt={`Ned's Avatar`} />
        </Link>
        <Link className={`nav-link`} to={`/about/`}>
          <h3 className={`nav-text`}>About</h3>
        </Link>
        <Link className={`nav-link`} to={`mailto:nmorgan1987@gmail.com`}>
          <h3 className={`nav-text`}>Contact</h3>
        </Link>
      </div>
    </LayoutContainer>
    {children}
  </div>
)
