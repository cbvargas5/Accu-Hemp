import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom';
import { updateSurveySteps, updateValidationError } from '../../../../actions/survey'

import ProgressTracker from '../../../ProgressTracker.jsx'
import TabSurveyCondition from './TabSurveyCondition.jsx'
import TabWeightSeverity from './TabWeightSeverity.jsx'
import TabExtras from './TabExtras.jsx'
import TabHowMuch from './TabHowMuch.jsx'
import TabSubmit from './TabSubmit.jsx'
import SubmissionError from '../../../SubmissionError.jsx';

class Survey extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    this.props.history.push(`${this.props.match.url}/${this.props.step}`)
    if (this.props.validationError) {
      this.props.updateValidationError({validationError: false})
    }
  }
  parseInputs = () => {
    const { 
      step, 
      updateValidationError,
      selectedCondition, 
      inputWeight, 
      selectedSeverity, 
      selectedDose, 
      selectedProfessionalHelp, 
      selectedOtherMedication, 
      selectedDoseDuration, 
      selectedImprovement,
      selectedVerification
      } = this.props

    switch(step) {
      case 1:
        if (!selectedCondition) {
          updateValidationError({validationError: true})
          return true
        }
        break;
        case 2:
          if (!inputWeight || !selectedSeverity) {
            updateValidationError({validationError: true})
            return true
          }
          break;
        case 3:
          if (!selectedDose || !selectedProfessionalHelp || !selectedOtherMedication) {
            updateValidationError({validationError: true})
            return true
          }
          break;
        case 4:
          if (!selectedDoseDuration || !selectedImprovement) {
            updateValidationError({validationError: true})
            return true
          }
          break;
        case 5:
          if (!selectedVerification) {
            updateValidationError({validationError: true})
            return true
          }
          break;
      default:
        return false;
    }
  }
  onNext = () => {
    const { step } = this.props
    const isThereAnError = this.parseInputs()
    if (step < 5 && !isThereAnError) {
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
    const { url: URL } = this.props.match
    return (
      <section className="survey-wrapper big-card">
        <ProgressTracker title="CBD Dose Survey" currStep={this.props.step} lastStep={5}/>
        {
          this.props.validationError
          ?
          <SubmissionError />
          :
          ""
        }
        <Switch>
          <Route path={`${URL}/1`} exact component={TabSurveyCondition} />
          <Route path={`${URL}/2`} exact component={TabWeightSeverity} />
          <Route path={`${URL}/3`} exact component={TabExtras} />
          <Route path={`${URL}/4`} exact component={TabHowMuch} />
          <Route path={`${URL}/5`} exact component={TabSubmit} />
        </Switch>
        <div className="tabNav-btns">
          <Button onClick={this.onPrevious} className="tab-btn">Back</Button>
          <Button onClick={this.onNext} className={`tab-btn ${this.props.step == 5 ? "hide" : ""}`}>Next</Button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.survey })

export default connect(mapStateToProps, { updateSurveySteps, updateValidationError })(Survey)
