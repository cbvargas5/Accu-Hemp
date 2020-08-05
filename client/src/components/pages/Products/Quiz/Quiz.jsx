import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom';

import TabDose from './TabDose.jsx'
import TabImportance from './TabImportance.jsx'
import TabQualities from './TabQualities.jsx'
import TabQuizResults from './TabQuizResults.jsx'

export class Quiz extends Component {
  constructor(props) {
    super(props)

  }  
  componentDidMount() {
    this.props.history.push(`${this.props.match.url}/1`)
  }
  render() {
    const { url: URL } = this.props.match

    console.log('Quiz props ->', this.props)
    console.log('URL ->', URL)
    return (
      <section className="quiz-wrapper big-card">
        <Link to={`${URL}/1`}>Dose</Link>
        <Link to={`${URL}/2`}>Importance</Link>
        <Link to={`${URL}/3`}>Qualities</Link>
        <Link to={`${URL}/4`}>Results</Link>
        <Switch>
          <Route path={`${URL}/1`} exact component={TabDose}/>
          <Route path={`${URL}/2`} exact component={TabImportance}/>
          <Route path={`${URL}/3`} exact component={TabQualities}/>
          <Route path={`${URL}/4`} exact component={TabQuizResults}/>
        </Switch>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
