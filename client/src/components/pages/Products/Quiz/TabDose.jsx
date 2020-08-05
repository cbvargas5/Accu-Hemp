import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class TabDose extends Component {
  render() {
    return (
      <div className="tab">
        <div className="question-line">
          <h4>Approximately how much CBD do you plan to take each day?</h4>
          <p>Don't know your dose?</p>
          <Link className="link-btn" to="/dose/estimator">Click here to estimate your dose</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})


export default connect(mapStateToProps)(TabDose)
