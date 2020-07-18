import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProgressTracker from '../../../ProgressTracker.jsx'
import { Link } from 'react-router-dom'
import TabCondition from './TabCondition.jsx'
import TabSeverity from './TabSeverity.jsx'
import TabResults from './TabResults.jsx'


export class Estimator extends Component {
  constructor(props) {
    super(props)

    const first = TabCondition
    const second = TabSeverity
    const third = TabResults
  }
  render() {
    return (
      <section className="estimator-wrapper">
        <ProgressTracker title="Dose Estimator" currStep={1} lastStep={3}/>
        {/* Need to set up sub routes here to conditionally
            render different tabs */}
        
        {/* Need to map over condition array from state that was grabbed from database */}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Estimator)
