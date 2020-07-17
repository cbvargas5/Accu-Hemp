import React, { Component } from 'react'
import Header from '../Header.jsx'
import FeatureNav from '../FeatureNav.jsx'
import Footer from '../Footer.jsx'

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
          <h3>estimator</h3>
        </section>
        <section className="survey-wrapper">
          <h3>survey</h3>
        </section>
      </div>
    )
  }
}
