import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getDose, updateEmail } from '../../../../actions/dose'
import { Button } from 'react-bootstrap'


export class TabResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wasFormSubmitted: false 
    }
  }
  componentDidMount() {
      this.props.getDose()
      if (this.state.wasFormSubmitted) {
        this.setState({wasFormSubmitted: false})
      }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { lowerdose, upperdose } = this.props.dose[0]
    const dataToSend = {
      to: this.props.userEmail,
      lowerdose,
      upperdose
    }
    axios.post('/api/mail/estimator', dataToSend)
      .then(() => {
        if (!this.state.wasFormSubmitted) {
          this.setState({wasFormSubmitted: true})
        }
      })
      .catch((err) => console.error(err))
  }
  handleChange = (e) => {
    this.props.updateEmail({userEmail: e.target.value})
  }
  render() {
    const { dose } = this.props
    if (dose[0]) {
      const { lowerdose, upperdose } = dose[0]
      return (
        <section className="tab results-tab">
          <section className="result mini-underline-sec">
            <h2>Your estimated dose is {lowerdose} to {upperdose}+ mg of CBD</h2>
            <br/>
            <p>Based on your condition and the severity of your condition, this calculator estimates a dose of <strong>{lowerdose} to {upperdose}mg of CBD each day</strong>. A common technique in CBD hemp oil is to "start low and go slow." Try starting with {lowerdose}mg each day and gradually increase your dose until you feel relief. For all-day relief try splitting up your dose throughout day.</p>
            <br/>
            <p className="result-note"><strong>Please note:</strong> Your optimal dose or doctor recommended dose may be different from the dose that we calculated. <strong>We advise you to speak with a healthcare professional regarding your use of CBD hemp oil, the dosing of CBD hemp oil, and the interactions CBD hemp oil may have on your other medications.</strong> This calculator is only meant to be a general guide, and should not be considered medical advice. The information from this Dose Estimator is from crowd-sourced and research data obtained from cbddosagecalculator.com. These statements have not been evaluated by the Food and Drug Administration (FDA) and are not intended to diagnose, treat, cure or prevent any disease. Please consult with a medical professional for any medical advice.</p>
          </section>
          <section className="redirect-section mini-underline-sec">
            <div className="redirect">
              <h4>Now that you have estimated your dose, take our product finder quiz.</h4>
              <Link className="link-btn" to="/products">Product Finder Quiz</Link>
            </div>
            <div className="redirect">
              <h4>Already have a product? Go to the Measure page so you can estimate the measurement for this dose.</h4>
              <Link className="link-btn" to="/measure">Measure my Product</Link>
            </div>
          </section>
          <section className="email-results-section">
            <form onSubmit={this.handleSubmit} className="email-results">
              <label className="question">Do you want your results emailed to you?</label>
              <label className="pls-enter">Please enter your email below to have your results emailed to you.</label>
              {
                this.state.wasFormSubmitted
                ?
                <div className="success">
                  <p><span>Thank You!</span> Your form has been sent</p>
                </div>
                :
                <>
                <input className="tab-input" onChange={this.handleChange} type="email" name="email" id="email"/>
                <Button className={`tab-btn ${this.props.userEmail.includes("@") ? "" : "hide"}`} type="submit">Email my Results!</Button>
                </>
              }
            </form>
          </section>
        </section>
      )
    } else {
      return (
        <p>loading...</p>
      )
    }
  }
}

const mapStateToProps = (state) => ({...state.estimator})


export default connect(mapStateToProps, { getDose, updateEmail })(TabResults)
