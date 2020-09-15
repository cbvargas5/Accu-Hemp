import React from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import ButtonCard from '../cards/ButtonCard.jsx'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'



const handleChange = e => {
  const { name, value } = e.target
  console.log(name, value)
}

const handleSubmit = e => {
  e.preventDefault()
}

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  console.log('env test->', process.env.REACT_APP_TEST)
  return (
    <section>
        <div className="mini-header">
          <h1>Contact Us</h1>
        </div>
        <section className="form-wrapper">
          <form className="contact-form">
            <div className="name-field-wrapper">
              <label htmlFor="form-name">Name</label>
              <input onChange={handleChange} type="text" name="form-name" id="form-name"/>
            </div>
            <div className="email-field-wrapper">
              <label htmlFor="form-email">Email</label>
              <input onChange={handleChange} type="email" required="required" name="form-email" id="form-email"/>
            </div>
            <div className="message-field-wrapper">
              <label htmlFor="form-message">Message</label>
              <textarea onChange={handleChange} name="form-message" id="form-message" rows="4"></textarea>
            </div>
            <Button type="submit">Send</Button>
          </form>
        </section>
        <section className="feedback-redirect">
          <h3>Give us feedback about AccuHemp</h3>
          <ButtonCard link="/feedback" icon="fas fa-comment-dots">Feedback</ButtonCard>
        </section>
    </section>
  )
}
