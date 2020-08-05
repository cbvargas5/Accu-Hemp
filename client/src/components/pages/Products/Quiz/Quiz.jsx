import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom';

import { Button } from 'react-bootstrap'

import { updateQuizSteps } from '../../../../actions/products'
import TabDose from './TabDose.jsx'
import TabImportance from './TabImportance.jsx'
import TabQualities from './TabQualities.jsx'
import TabQuizResults from './TabQuizResults.jsx'
import ProgressTracker from '../../../ProgressTracker.jsx';

export class Quiz extends Component {
  constructor(props) {
    super(props)

  }  
  componentDidMount() {
    
    this.props.history.push(`${this.props.match.url}/${this.props.step}`)
  }
  onNext = () => {
    const { step } = this.props
    if (step < 4) {
      this.props.updateQuizSteps({step: step + 1})
      this.props.history.push(`${this.props.match.url}/${step + 1}`)
    }
  }
  onPrevious = () => {
    const { step } = this.props
    if (step <= 0) {
      this.props.updateQuizSteps({step: 1})
      this.props.history.push(`${this.props.match.url}/${1}`)
    } else if (step === 1) {
      this.props.history.push('/products')
    } else {
      this.props.updateQuizSteps({step: step - 1})
      this.props.history.push(`${this.props.match.url}/${step - 1}`)
    }
  }
  render() {
    const { url: URL } = this.props.match

    console.log('Quiz props ->', this.props)
    return (
      <section className="quiz-wrapper big-card">
        <ProgressTracker title="Product Quiz" currStep={this.props.step} lastStep={4}/>
        <Switch>
          <Route path={`${URL}/1`} exact component={TabDose}/>
          <Route path={`${URL}/2`} exact component={TabImportance}/>
          <Route path={`${URL}/3`} exact component={TabQualities}/>
          <Route path={`${URL}/4`} exact component={TabQuizResults}/>
        </Switch>
        <div className="tabNav-btns">
          <Button onClick={this.onPrevious} className="tab-btn">Back</Button>
          <Button onClick={this.onNext} className="tab-btn">Next</Button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.products})


export default connect(mapStateToProps, { updateQuizSteps })(Quiz)
