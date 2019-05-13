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
  width: 75px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid black;
  padding-right: 2em;
  position: absolute;

  .icon {
    font-size: 3em;
    color: black;
    margin: 0 0.5em 0.5em 0.5em;
  }

  .icon:hover {
    color: whitesmoke;
  }
`

const Social = () => {
  return (
    <SocialContainer>
      <a href={`https://github.com/nedmorgan`}>
        <FontAwesomeIcon className={`icon`} icon={faGithub} />
      </a>
      <a href={`https://nedmorgan.github.io/`}>
        <FontAwesomeIcon className={`icon`} icon={faPortrait} />
      </a>
      <a href={`https://www.linkedin.com/in/nathanielpmorgan/`}>
        <FontAwesomeIcon className={`icon`} icon={faLinkedin} />
      </a>
      <a href={`https://twitter.com/nmorganexplores`}>
        <FontAwesomeIcon className={`icon`} icon={faTwitterSquare} />
      </a>
    </SocialContainer>
  )
}

export default Social
