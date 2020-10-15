import React, { Component } from 'react'
import ButtonCard from '../cards/ButtonCard.jsx'
import { Link } from 'react-router-dom'


export default class DosePage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <section>
        <section className="mini-header">
          <h1>Dose</h1>
        </section>
        <section className="estimator-wrapper">
          <div>
            <h3>Estimate your dose of CBD</h3>
            <p>This CBD Dose Estimator is not intended to be medical advice. We strongly recommend you discuss your CBD Hemp oil dose with a licensed medical professional.</p>
          </div>
          <ButtonCard link="/dose/estimator" icon="fas fa-laptop-medical">CBD Dose Estimator</ButtonCard>
        </section>
        <section className="survey-wrapper">
          <h2>Already Know Your Dose?</h2>
          <Link className="link-btn" to="/products">Click here to skip to Step 2</Link>
          <p>Before you go to Step 2, please take our CBD Dose Survey so we can improve our Dose Estimator.</p>
          <ButtonCard link="/dose/survey" icon="fas fa-clipboard-list">CBD Dose Survery</ButtonCard>
        </section>
      </section>
    )
  }
}
