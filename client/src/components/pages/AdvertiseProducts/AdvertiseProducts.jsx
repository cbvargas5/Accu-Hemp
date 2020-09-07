import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom';
import { updateAdvertisingSteps } from '../../../actions/advertising'

import ProgressTracker from '../../ProgressTracker.jsx'
import TabLinkQuestions from './TabLinkQuestions.jsx'
import TabSubmitAdvertise from './TabSubmitAdvertise.jsx'
import TabUserInfo from './TabUserInfo.jsx'

class AdvertiseProducts extends Component {
  
  render() {
    const { url: URL } = this.props.match
    const { step } = this.props 
    return (
      <section className="advertising-wrapper big-card">
        <ProgressTracker title="Advertise Products Form" currStep={step} lastStep={3}/>
        <Switch>
          <Route path={`${URL}/1`} exact component={TabUserInfo} />
          <Route path={`${URL}/2`} exact component={TabLinkQuestions} />
          <Route path={`${URL}/3`} exact component={TabSubmitAdvertise} />
        </Switch>
        <div className="tabNav-btns">
          <Button onClick={this.onPrevious} className="tab-btn">Back</Button>
          <Button onClick={this.onNext} className="tab-btn">Next</Button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.advertising })

export default connect(mapStateToProps, { updateAdvertisingSteps })(AdvertiseProducts)

