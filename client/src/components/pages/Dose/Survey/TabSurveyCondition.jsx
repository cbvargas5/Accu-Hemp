import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getConditionsForSurvey, selectSurveyCondition, updateValidationError } from '../../../../actions/survey'


class TabSurveyCondition extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getConditionsForSurvey()
  }
  handleSelection = (e) => {
    if (this.props.validationError) {
      this.props.updateValidationError({validationError: false})
    }
    this.props.selectSurveyCondition({selectedCondition: e.target.value})
  }
  render() {
    return (
      <section className={`tab ${this.props.validationError ? "highlight-error" : ""} condition-tab`}>
        <p className="instructions required-field">Select what condition you use CBD hemp oil for:</p>
        <ul>
          {this.props.conditions
            .map(({ condition }, index) => (
              <li key={index}>
                <input onClick={this.handleSelection} type="button" value={condition}/>
              </li>
            ))}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.survey })

export default connect(mapStateToProps, { getConditionsForSurvey, selectSurveyCondition, updateValidationError })(TabSurveyCondition)


