import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { updateSteps } from '../../../../actions/dose'


import ProgressTracker from '../../../ProgressTracker.jsx'
import TabCondition from './TabCondition.jsx'
import TabSeverity from './TabSeverity.jsx'
import TabResults from './TabResults.jsx'


class Estimator extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    this.props.history.push(`${this.props.match.url}/${this.props.estimator.step}`)
  }
  onNext = () => {
    const { step } = this.props.estimator
    console.log('Estimator step -->', step)
    if (step < 3) {
      this.props.updateSteps({step: step + 1})
      this.props.history.push(`${this.props.match.url}/${step + 1}`)
    }

  }
  onPrevious = () => {
    console.log(this.props.estimator)
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
    const { url: URL } = this.props.match
    const { estimator } = this.props 
    console.log('Estimator Parent -->', URL)
    return (
      <section className="estimator-wrapper">
        <ProgressTracker title="Dose Estimator" currStep={estimator.step} lastStep={3}/>
            <Link to={URL + '/1'}>Dose</Link>
            <Link to={URL + '/2'}>Severity</Link>
            <Link to={URL + '/3'}>Results</Link>
        <Switch>
          <Route path={`${URL}/1`} exact render={props => <TabCondition {...this.props}/>} />
          <Route path={`${URL}/2`} exact render={props => <TabSeverity {...this.props}/>} />
          <Route path={`${URL}/3`} exact render={props => <TabResults {...this.props}/>} />
          {/* <Route path={`${URL}/2`} exact component={TabSeverity} />
          <Route path={`${URL}/3`} exact component={TabResults} /> */}
        </Switch>
        <Button onClick={this.onPrevious}>Previous</Button>
        <Button onClick={this.onNext}>Next</Button>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state })

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, { updateSteps })(Estimator)
