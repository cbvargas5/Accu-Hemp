import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProgressTracker from '../../../ProgressTracker.jsx'

export class Estimator extends Component {
  render() {
    return (
      <section className="estimator-wrapper">
        <ProgressTracker title="Dose Estimator" currStep={1} lastStep={3}/>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Estimator)
