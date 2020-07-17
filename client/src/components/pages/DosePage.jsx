import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ButtonCard from '../cards/ButtonCard.jsx'


export default class DosePage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <section className="mini-header">
          <h2>Dose</h2>
        </section>
        <section className="estimator-wrapper">
          <div>
            <h3>Estimate your dose of CBD</h3>
            <p>This CBD Dose Estimator is not intended to be medical advice. We strongly recommend you discuss your CBD Hemp oil dose with a licensed medical professional.</p>
          </div>
          <ButtonCard link="/" icon="fas fa-laptop-medical">CBD Dose Estimator</ButtonCard>
        </section>
        <section className="survey-wrapper">
          <h3>survey</h3>
        </section>
      </div>
    )
  }
}
