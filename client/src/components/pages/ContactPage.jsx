import React from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import ButtonCard from '../cards/ButtonCard.jsx'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'




export default function ContactPage() {
  const [clientName, setClientName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [wasFormSubmitted, setWasFormSubmitted] = useState(false)
  
  const handleChange = e => {
    const { name, value } = e.target
    switch(name) {
      case 'form-name':
        setClientName(value)
        break;
      case 'form-email':
        setEmail(value)
        break;
      case 'form-message':
        setMessage(value)
        break;
    }
  }
  
  useEffect(() => {
    if (wasFormSubmitted) {
      setWasFormSubmitted(false)
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const dataToSend = {
      name: clientName,
      email,
      message
    }
    axios.post('/api/mail/contact', dataToSend)
      .then(() => {
        if (!wasFormSubmitted) {
          setWasFormSubmitted(true)
        }
      })
      .catch((err) => console.error(err))
  }
  //need to add div that renders when form is submitted
  // console.log('env test->', process.env.REACT_APP_TEST)
  return (
    <section>
        <div className="mini-header">
          <h1>Contact Us</h1>
        </div>
        <section className="form-wrapper underline-sec">
          <form onSubmit={handleSubmit}className="contact-form">
            <div className="contact-field-wrapper">
              <label htmlFor="form-name">Name</label>
              <input onChange={handleChange} type="text" name="form-name" id="form-name"/>
            </div>
            <div className="contact-field-wrapper">
              <label htmlFor="form-email">Email</label>
              <input onChange={handleChange} type="email" required="required" name="form-email" id="form-email"/>
            </div>
            <div className="contact-field-wrapper">
              <label htmlFor="form-message">Message</label>
              <textarea onChange={handleChange} name="form-message" id="form-message" rows="4"></textarea>
            </div>
            {
              wasFormSubmitted
              ?
              <div className="success">
                <p><span>Thank You!</span> Your form has been sent</p>
              </div>
              :
              <Button type="submit">Send</Button>
            }
          </form>
        </section>
        <section className="feedback-redirect">
          <h3>Give us feedback about AccuHemp</h3>
          <ButtonCard link="/feedback" icon="fas fa-comment-dots">Feedback</ButtonCard>
        </section>
    </section>
  )
}
