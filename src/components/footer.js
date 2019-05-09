import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  font-family: "Lato", sans-serif;
  padding-bottom: 1em;

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #149cea;
    cursor: pointer;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <footer className="bottom">
        <span>© 2019 Copyright: </span>
        <a
          href="https://nedmorgan.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ned Morgan
        </a>
      </footer>
    </FooterContainer>
  )
}

export default Footer
