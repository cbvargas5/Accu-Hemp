import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Button } from 'react-bootstrap'

import { selectDose } from '../../../actions/measure'


class TabDoseInput extends Component {
  constructor(props) {
    super(props)

  }
  handleChange = (e) => {
    //convert string to number && round to nearest mg && remove negative input
    this.props.selectDose({selectedDose: e.target.value})
  }
  render() {
    console.log('dose input props: ', this.props)
    return (
      <div className="tab">
        <div className="question-line">
          <h4>What dose would you like to measure (in mg)?*</h4>
          <p>Don't know your dose?</p>
          <Link className="link-btn" to="/dose/estimator">Click here to find your dose</Link>
        </div>
        <div className="dose-input-wrapper">
          <ul>
            <input onChange={this.handleChange} type="number"/>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.measure})

export default connect(mapStateToProps, { selectDose })(TabDoseInput)
