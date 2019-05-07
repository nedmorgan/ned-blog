import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faPortrait } from "@fortawesome/free-solid-svg-icons"

const SocialContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Social = () => {
  return (
    <SocialContainer>
      <a href={`https://github.com/nedmorgan`}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href={`https://nedmorgan.github.io/`}>
        <FontAwesomeIcon icon={faPortrait} />
      </a>
      <a href={`https://www.linkedin.com/in/nathanielpmorgan/`}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href={`https://twitter.com/nmorganexplores`}>
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
    </SocialContainer>
  )
}

export default Social
