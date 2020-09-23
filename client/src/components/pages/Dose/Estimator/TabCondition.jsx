import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getConditions, selectCondition, updateValidationError } from '../../../../actions/dose'


export class TabCondition extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getConditions()
  }
  handleSelection = (e) => {
    this.props.selectCondition({selectedCondition: e.target.value})
    if (this.props.validationError) {
      this.props.updateValidationError({validationError: false})
    }
  }
  render() {
    return (
      <section className={`tab ${this.props.validationError ? "highlight-error" : ""} condition-tab`}>
        <p className="instructions required-field">Select a Condition:</p>
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

const mapStateToProps = (state) => ({ ...state.estimator })


export default connect(mapStateToProps, { getConditions, selectCondition, updateValidationError })(TabCondition)
