import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { updateMeasureSteps, getProductsForMeasure } from '../../../actions/measure'

import { Button } from 'react-bootstrap'


import TabDevice from './TabDevice.jsx'
import TabBrand from './TabBrand.jsx'
import TabProduct from './TabProduct.jsx'
import TabDoseInput from './TabDoseInput.jsx'
import TabMeasureResults from './TabMeasureResults.jsx'
import ProgressTracker from '../../ProgressTracker.jsx'


export class MeasureQuiz extends Component {
  constructor(props) {
    super(props)

  }  
  componentDidMount() {
    this.props.history.push(`${this.props.match.url}/${this.props.step}`)
    this.props.getProductsForMeasure()
  }
  onNext = () => {
    const { step } = this.props
    if (step < 5) {
      this.props.updateMeasureSteps({step: step + 1})
      this.props.history.push(`${this.props.match.url}/${step + 1}`)
    }
  }
  onPrevious = () => {
    const { step } = this.props
    if (step <= 0) {
      this.props.updateMeasureSteps({step: 1})
      this.props.history.push(`${this.props.match.url}/${1}`)
    } else if (step === 1) {
      this.props.history.push('/measure')
    } else {
      this.props.updateMeasureSteps({step: step - 1})
      this.props.history.push(`${this.props.match.url}/${step - 1}`)
    }
  }
  render() {
    const { url: URL } = this.props.match
    return (
      <section className="quiz-wrapper big-card">
        <ProgressTracker title="Measurement Quiz" currStep={this.props.step} lastStep={5}/>
        <Switch>
          <Route path={`${URL}/1`} exact render={() => <TabDevice onNext={this.onNext} />}/>
          <Route path={`${URL}/2`} exact render={() => <TabBrand onNext={this.onNext} />}/>
          <Route path={`${URL}/3`} exact render={() => <TabProduct onNext={this.onNext} />}/>
          <Route path={`${URL}/4`} exact render={() => <TabDoseInput onNext={this.onNext} />}/>
          <Route path={`${URL}/5`} exact component={TabMeasureResults}/>
        </Switch>
        <div className="tabNav-btns">
          <Button onClick={this.onPrevious} className="tab-btn">Back</Button>
          <Button onClick={this.onNext} className={`tab-btn ${this.props.step == 5 ? "hide" : ""}`}>Next</Button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.measure})

export default connect(mapStateToProps, { updateMeasureSteps, getProductsForMeasure })(MeasureQuiz)
