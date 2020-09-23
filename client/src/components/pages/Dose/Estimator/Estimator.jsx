import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom';
import { updateSteps, updateValidationError } from '../../../../actions/dose'

import ProgressTracker from '../../../ProgressTracker.jsx'
import TabCondition from './TabCondition.jsx'
import TabSeverity from './TabSeverity.jsx'
import TabResults from './TabResults.jsx'
import SubmissionError from '../../../SubmissionError.jsx';


class Estimator extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    this.props.history.push(`${this.props.match.url}/${this.props.step}`)
  }
  parseInputs() {
    const { step } = this.props
    switch(step) {
      case 1:
      case 2:
      default:
        break;
    }
  }
  onNext = () => {
    const { step } = this.props
    if (step < 3) {
      this.props.updateSteps({step: step + 1})
      this.props.history.push(`${this.props.match.url}/${step + 1}`)
    }
  }
  onPrevious = () => {
    const { step } = this.props
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
    const { url: URL } = this.props.match
    const { step, validationError } = this.props 
    return (
      <section className="estimator-wrapper big-card">
        <ProgressTracker title="Dose Estimator" currStep={step} lastStep={3}/>
        {
          validationError
          ?
          <SubmissionError />
          :
          ""
        }
        <Switch>
          <Route path={`${URL}/1`} exact component={TabCondition} />
          <Route path={`${URL}/2`} exact component={TabSeverity} />
          <Route path={`${URL}/3`} exact component={TabResults} />
        </Switch>
        <div className="tabNav-btns">
          <Button onClick={this.onPrevious} className="tab-btn">Back</Button>
          <Button onClick={this.onNext} className="tab-btn">Next</Button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.estimator })

export default connect(mapStateToProps, { updateSteps, updateValidationError })(Estimator)
