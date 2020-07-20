import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import ProgressTracker from '../../../ProgressTracker.jsx'
import TabCondition from './TabCondition.jsx'
import TabSeverity from './TabSeverity.jsx'
import TabResults from './TabResults.jsx'


class Estimator extends Component {
  constructor(props) {
    super(props)

  }
  onNext = () => {
    console.log('Next Clicked!')
  }
  onPrevious = () => {
    console.log('Previous Clicked!')
  }
  render() {
    const { url: URL } = this.props.match
    console.log('Estimator Parent -->', URL)
    return (
      <section className="estimator-wrapper">
        <ProgressTracker title="Dose Estimator" currStep={1} lastStep={3}/>
            <Link to={URL}>Dose</Link>
            <Link to={URL + '/severity'}>Severity</Link>
            <Link to={URL + '/results'}>Results</Link>
        <Switch>
          <Route path={URL} exact render={props => <TabCondition {...this.props}/>} />
          <Route path={`${URL}/severity`} exact component={TabSeverity} />
          <Route path={`${URL}/results`} exact component={TabResults} />
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

export default connect(mapStateToProps)(Estimator)
