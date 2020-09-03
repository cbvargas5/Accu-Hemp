import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getConditionsForSurvey, selectSurveyCondition } from '../../../../actions/survey'


class TabSurveyCondition extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getConditionsForSurvey()
  }
  handleSelection = (e) => {
    this.props.selectSurveyCondition({selectedCondition: e.target.value})
  }
  render() {
    return (
      <section className="tab condition-tab">
        <p className="instructions">Select what condition you use CBD hemp oil for:*</p>
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

export default connect(mapStateToProps, { getConditionsForSurvey, selectSurveyCondition })(TabSurveyCondition)


