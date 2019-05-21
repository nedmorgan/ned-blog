import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  font-family: "Lato", sans-serif;
  padding-bottom: 1em;
  margin-top: 1em;
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.4);

  footer {
    padding-top: 1em;
  }

  a {
    color: whitesmoke;
    text-decoration: none;
  }

  a:hover {
    color: #149cea;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
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
