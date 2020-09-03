import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom';
import { updateSurveySteps } from '../../../../actions/survey'

import ProgressTracker from '../../../ProgressTracker.jsx'
import TabSurveyCondition from './TabSurveyCondition.jsx'
import TabWeightSeverity from './TabWeightSeverity.jsx'
import TabExtras from './TabExtras.jsx'
import TabHowMuch from './TabHowMuch.jsx'
import TabSubmit from './TabSubmit.jsx'

class Survey extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    this.props.history.push(`${this.props.match.url}/${this.props.step}`)
  }
  onNext = () => {
    const { step } = this.props
    if (step < 5) {
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
        <Switch>
          <Route path={`${URL}/1`} exact render={props => <TabSurveyCondition {...this.props}/>} />
          <Route path={`${URL}/2`} exact render={props => <TabWeightSeverity {...this.props}/>} />
          <Route path={`${URL}/3`} exact render={props => <TabExtras {...this.props}/>} />
          <Route path={`${URL}/4`} exact render={props => <TabHowMuch {...this.props}/>} />
          <Route path={`${URL}/5`} exact render={props => <TabSubmit {...this.props}/>} />
        </Switch>
        <div className="tabNav-btns">
          <Button onClick={this.onPrevious} className="tab-btn">Back</Button>
          <Button onClick={this.onNext} className="tab-btn">Next</Button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.survey })

export default connect(mapStateToProps, { updateSurveySteps })(Survey)
