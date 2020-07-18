import React, { Component } from 'react'
import ProgressTracker from '../../../ProgressTracker.jsx'

export default class ConditionTab extends Component {
  render() {
    return (
      <section className="estimator-wrapper">
        <ProgressTracker title="Dose Estimator" currStep={1} lastStep={3}/>
      </section>
    )
  }
}
