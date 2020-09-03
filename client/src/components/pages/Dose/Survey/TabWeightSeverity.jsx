import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getSeveritiesForSurvey, updateInputWeight, selectSurveySeverity } from '../../../../actions/survey'

class TabWeightSeverity extends Component {
  componentDidMount() {
    this.props.getSeveritiesForSurvey()
  }
  handleChange = (e) => {
    this.props.updateInputWeight({inputWeight: e.target.value})
  }
  handleSelection = (e) => {
    this.props.selectSurveySeverity({selectedSeverity: e.target.name})
  }
  render() {
    return (
      <section className="tab severity-tab survey-severity">
        <div>
          <p className="instructions">What is your weight in lbs:*</p>
          <input onChange={this.handleChange} type="number" name="weight" id="weight"/>
        </div>
        <div>
          <p className="instructions">Select the severity of your condition:*</p>
          <ul>
            {this.props.severities.map(({ severity, id }) => (
              <li key={id}>
                <button className="severity-btn" onClick={this.handleSelection} name={severity}><img name={severity} src={`..\\..\\images\\Buttons_icons\\Severity options\\${severity}.png`} alt={`${severity} severity`}/>{severity}</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.survey})

export default connect(mapStateToProps, { getSeveritiesForSurvey, updateInputWeight, selectSurveySeverity })(TabWeightSeverity)
