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
  border-right: 2px solid whitesmoke;
  padding-right: 2em;
  position: absolute;
  color: whitesmoke;

  .icon {
    font-size: 3em;
    color: whitesmoke;
    margin: 0 0.5em 0.5em 0.5em;
  }

  .icon:hover {
    color: #149cea;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    position: relative;
    margin-top: 1em;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`

const Social = () => {
  return (
    <SocialContainer>
      <a
        href={`https://github.com/nedmorgan`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={`icon`} icon={faGithub} />
      </a>
      <a
        href={`https://nedmorgan.github.io/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={`icon`} icon={faPortrait} />
      </a>
      <a
        href={`https://www.linkedin.com/in/nathanielpmorgan/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={`icon`} icon={faLinkedin} />
      </a>
      <a
        href={`https://twitter.com/nmorganexplores`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={`icon`} icon={faTwitterSquare} />
      </a>
    </SocialContainer>
  )
}

export default Social
