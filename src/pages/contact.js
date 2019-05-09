import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Social from "../components/social"
import ContactForm from "../components/contactForm"
import Footer from "../components/footer"

const ContactContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export default () => (
  <Layout>
    <Social />
    <ContactContainer>
      <ContactForm />
    </ContactContainer>
    <Footer />
  </Layout>
)
