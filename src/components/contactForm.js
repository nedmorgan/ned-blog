import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

const ContactFormContainer = styled.div`
  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 600px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
  }

  .button-div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1em;
  }

  button {
    width: 50px;
  }

  input,
  textarea {
    border-radius: 5px;
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
          <form>
            <label for="name">Name: </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder={`${this.state.randomName.name.first} ${
                this.state.randomName.name.last
              }`}
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
            <label for="comment">Comment: </label>
            <textarea rows="5" cols="50" />
            <div className={`button-div`}>
              <button>Submit!</button>
            </div>
          </form>
        ) : null}
      </ContactFormContainer>
    )
  }
}

export default ContactForm
