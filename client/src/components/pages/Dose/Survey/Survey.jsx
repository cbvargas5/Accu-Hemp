import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom';
import { updateSurveySteps } from '../../../../actions/survey'


import TabExtras from './TabExtras.jsx'
import TabHowMuch from './TabHowMuch.jsx'
import TabSubmit from './TabSubmit.jsx'
import TabSurveyCondition from './TabSurveyCondition.jsx'
import TabWeightSeverity from './TabWeightSeverity.jsx'

class Survey extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    this.props.history.push(`${this.props.match.url}/${this.props.step}`)
  }
  onNext = () => {
    const { step } = this.props
    if (step < 3) {
      this.props.updateSurveySteps({step: step + 1})
      this.props.history.push(`${this.props.match.url}/${step + 1}`)
    }
  }
  onPrevious = () => {
    const { step } = this.props
    if (step <= 0) {
      this.props.updateSurveySteps({step: 1})
      this.props.history.push(`${this.props.match.url}/${1}`)
    } else if (step === 1) {
      this.props.history.push(`/Dose`)
    } else {
      this.props.updateSurveySteps({step: step - 1})
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

const mapStateToProps = (state) => ({ ...state.survey })

export default connect(mapStateToProps, { updateSurveySteps })(Estimator)
