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

  }
  componentDidMount() {
    this.props.getDoses()
      .then(data => {
        console.log('after action -->', this.props)
      })
  }
  render() {
    return (
      <section className="estimator-wrapper">
        <ProgressTracker title="Dose Estimator" currStep={1} lastStep={3}/>
        {/* Need to set up sub routes here to conditionally
            render different tabs */}
        <ul>
          {this.props.estimator.doses
            .map(({ condition }, index) => (
              <li key={index}>{condition}</li>
            ))}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state })

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, { getDoses })(Estimator)
