import React, { Component } from 'react'

import TabExtras from './TabExtras.jsx'
import TabHowMuch from './TabHowMuch.jsx'
import TabSubmit from './TabSubmit.jsx'
import TabSurveyCondition from './TabSurveyCondition.jsx'
import TabWeightSeverity from './TabWeightSeverity.jsx'

export default class Survey extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    this.props.history.push(`${this.props.match.url}/${this.props.estimator.step}`)
  }
  onNext = () => {
    const { step } = this.props.estimator
    if (step < 3) {
      this.props.updateSteps({step: step + 1})
      this.props.history.push(`${this.props.match.url}/${step + 1}`)
    }

  }
  onPrevious = () => {
    // console.log(this.props.estimator)
    const { step } = this.props.estimator
    if (step <= 0) {
      this.props.updateSteps({step: 1})
      this.props.history.push(`${this.props.match.url}/${1}`)
    } else if (step === 1) {
      this.props.history.push(`/Dose`)
    } else {
      this.props.updateSteps({step: step - 1})
      this.props.history.push(`${this.props.match.url}/${step - 1}`)
    }
  }
  render() {
    return (
      <div>
        {/* Need to render survey tabs */}
      </div>
    )
  }
}
