import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getSeveritiesForSurvey, updateInputWeight, selectSurveySeverity, updateValidationError } from '../../../../actions/survey'

class TabWeightSeverity extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getSeveritiesForSurvey()
  }
  handleChange = (e) => {
    if (this.props.validationError) {
      this.props.updateValidationError({validationError: false})
    }
    this.props.updateInputWeight({inputWeight: e.target.value})
  }
  handleSelection = (e) => {
    if (this.props.validationError) {
      this.props.updateValidationError({validationError: false})
    }
    this.props.selectSurveySeverity({selectedSeverity: e.target.name})
  }
  render() {
    return (
      <section className="tab severity-tab survey-severity">
        <div className={this.props.validationError ? "highlight-error" : ""}>
          <p className="instructions required-field">What is your weight in lbs:</p>
          <input className="tab-input" onChange={this.handleChange} type="number" name="weight" id="weight"/>
        </div>
        <div className={this.props.validationError ? "highlight-error" : ""}>
          <p className="instructions required-field">Select the severity of your condition:</p>
          <ul>
            {this.props.severities.map(({ severity, id }) => (
              <li key={id}>
                <button className={this.props.selectedSeverity == severity ? "active severity-btn" : "severity-btn"} onClick={this.handleSelection} name={severity}><img name={severity} src={`..\\..\\images\\Buttons_icons\\Severity options\\${severity}.png`} alt={`${severity} severity`}/>{severity}</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.survey})

export default connect(mapStateToProps, { getSeveritiesForSurvey, updateInputWeight, selectSurveySeverity, updateValidationError })(TabWeightSeverity)
