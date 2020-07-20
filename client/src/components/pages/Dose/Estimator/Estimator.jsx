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
    const { url: URL } = this.props.match
    console.log('Estimator Parent -->', URL)
    return (
      <section className="estimator-wrapper">
        <ProgressTracker title="Dose Estimator" currStep={1} lastStep={3}/>
        {/* Need to set up sub routes here to conditionally
            render different tabs */}
        <Switch>
          <Route path={URL} exact render={props => <TabCondition {...this.props}/>} />
          <Route path={`${URL}/severity`} exact component={TabSeverity} />
          <Route path={`${URL}/results`} exact component={TabResults} />
        </Switch>
        {/* <TabCondition /> */}
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
