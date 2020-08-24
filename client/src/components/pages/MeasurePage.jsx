import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'



class MeasurePage extends Component {
  constructor(props) {
    super(props)

  }  
  render() {
    return (
      <section>
        <section className="mini-header">
          <h1>Measure</h1>
        </section>
        <section className="description-sect">
          <h2>Measure Your Dose of CBD:</h2>
          <p><strong>Warning:</strong> this quiz is meant only for CBD hemp oil in liquid form. It only works for CBD products that are measured by mL, not by grams.</p>
        </section>
        <section className="big-card">
          <Link to="/measure/measure-quiz">Quiz</Link>
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state})


export default connect(mapStateToProps)(MeasurePage)
