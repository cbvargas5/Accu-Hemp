import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectDose } from '../../../../actions/products'

import Option from './Option.jsx'



class TabDose extends Component {
  constructor(props) {
    super(props)
  }
  handleSelection = (e) => {
    this.props.selectDose({selectedDose: e.target.value})
    console.log('Dose Tab props ->', this.props)

  }
  render() {
    const OPTIONS = ['Less than 10 mg of CBD', '10 to 20 mg of CBD', '20 to 30 mg of CBD', '30 to 50 mg of CBD', '50 to 75 mg of CBD', '75 to 100 mg of CBD', '100 to 200 mg of CBD', 'More than 200 mg of CBD']
    return (
      <div className="tab">
        <div className="question-line">
          <h4>Approximately how much CBD do you plan to take each day?</h4>
          <p>Don't know your dose?</p>
          <Link className="link-btn" to="/dose/estimator">Click here to estimate your dose</Link>
        </div>
        <div className="options-wrapper">
          <ul className="options">
            {OPTIONS.map((option, index) => <Option handleSelection={this.handleSelection} key={index}>{option}</Option>)}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.products})


export default connect(mapStateToProps, { selectDose })(TabDose)
