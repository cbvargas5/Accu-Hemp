import React from 'react'
import ButtonCard from '../cards/ButtonCard.jsx'


import { Button } from 'react-bootstrap'

export default function ContactPage() {
  return (
    <section>
        <div className="mini-header">
          <h1>Contact Us</h1>
        </div>
        <section className="form-wrapper">
          <form className="contact-form">
            <div className="name-field-wrapper">
              <label for="form-name">Name</label>
              <input type="text" name="form-name" id="form-name"/>
            </div>
            <div className="email-field-wrapper">
              <label for="form-email">Email</label>
              <input type="email" required="required" name="form-email" id="form-email"/>
            </div>
            <div className="message-field-wrapper">
              <label for="form-message">Message</label>
              <textarea name="form-message" id="form-message" rows="4"></textarea>
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
