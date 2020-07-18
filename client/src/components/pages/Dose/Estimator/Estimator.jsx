import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDoses } from '../../../../actions/dose'

import ProgressTracker from '../../../ProgressTracker.jsx'
import TabCondition from './TabCondition.jsx'
import TabSeverity from './TabSeverity.jsx'
import TabResults from './TabResults.jsx'


class Estimator extends Component {
  constructor(props) {
    super(props)

    const first = TabCondition
    const second = TabSeverity
    const third = TabResults
  }
  render() {
    console.log('State in Estimator -->', this.props)
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

const mapStateToProps = (state) => ({ ...state })

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, { getDoses })(Estimator)
