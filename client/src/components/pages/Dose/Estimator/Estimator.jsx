import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProgressTracker from '../../../ProgressTracker.jsx'
import { Link } from 'react-router-dom'


export class Estimator extends Component {
  render() {
    return (
      <section className="estimator-wrapper">
        <ProgressTracker title="Dose Estimator" currStep={1} lastStep={3}/>
        <Link to="/">Estimator</Link>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Estimator)
