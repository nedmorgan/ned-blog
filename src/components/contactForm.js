import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

const ContactFormContainer = styled.div`
  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 775px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    margin-top: 2em;
    position: relative;
  }

  .button-div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1em;
  }

  label {
    color: whitesmoke;
    font-size: 1.5em;
  }

  button {
    width: 95px;
    border: 2px solid rgba(200, 200, 200, 0.8);
    padding: 12px 8px;
    border-radius: 5px;
    font-size: 1.05em;
    background-color: rgba(0, 0, 0, 0.5);
    color: whitesmoke;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    transition: background-color 2s, color 2s;
  }

  button:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
  }

  .button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }

  input,
  textarea {
    border-radius: 5px;
    border: 2px solid rgba(200, 200, 200, 0.8);
    font-size: 1em;
  }

  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }

  .spinner {
    height: 15vh;
    position: relative;

    &::before {
      animation: 2s linear infinite spinner;
      border: solid 3px #eee;
      border-bottom-color: #ef6565;
      border-radius: 50%;
      content: "";
      height: 40px;
      left: 50%;
      position: absolute;
      top: 70%;
      transform: translate3d(-50%, -50%, 0);
      width: 40px;
    }
  }

  @media (max-width: 768px) {
    width: 90%;

    form {
      width: auto;
    }
  }
`

class ContactForm extends Component {
  state = {
    randomName: {},
    hasLoadedAPI: false,
  }

  componentDidMount = () => {
    this.getName()
  }

  getName = () => {
    axios.get(`https://randomuser.me/api/`).then(res => {
      this.setState({ randomName: res.data.results[0], hasLoadedAPI: true })
    })
  }

  render() {
    return (
      <ContactFormContainer>
        {this.state.hasLoadedAPI ? (
          <form
            action="https://formspree.io/nmorgan1987@gmail.com"
            method="POST"
          >
            <label for="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={`${this.state.randomName.name.first
                .charAt(0)
                .toUpperCase() +
                this.state.randomName.name.first.substring(
                  1
                )} ${this.state.randomName.name.last.charAt(0).toUpperCase() +
                this.state.randomName.name.last.substring(1)}`}
            />
            <br />
            <label for="email">E-mail: </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={this.state.randomName.email}
            />
            <br />
            <label for="message">Message: </label>
            <textarea
              name="message"
              rows="5"
              cols="50"
              placeholder="Enter Message"
            />
            <div className={`button-div`}>
              <button>Connect!</button>
            </div>
          </form>
        ) : (
          <div className="spinner" />
        )}
      </ContactFormContainer>
    )
  }
}

export default ContactForm
