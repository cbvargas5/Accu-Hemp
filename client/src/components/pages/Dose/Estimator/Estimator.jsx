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

  render() {
    return (
      <section className="estimator-wrapper">
        <ProgressTracker title="Dose Estimator" currStep={1} lastStep={3}/>
        {/* Need to set up sub routes here to conditionally
            render different tabs */}
        {/* <Switch>
          <Route path="/" exact component={TabCondition} />
          <Route path="/dose" exact component={TabSeverity} />
          <Route path="/dose/estimator" exact component={TabResults} />
        </Switch> */}
        <TabCondition />
        <Button>Previous</Button>
        <Button>Next</Button>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state })

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps)(Estimator)
