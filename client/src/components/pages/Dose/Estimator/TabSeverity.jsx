import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSeverities, selectSeverity, updateValidationError } from '../../../../actions/dose'


export class TabSeverity extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getSeverities()
  }
  handleSelection = (e) => {
    this.props.selectSeverity({severityId: e.target.name})
    if (this.props.validationError) {
      this.props.updateValidationError({validationError: false})
    }
  }
  render() {
    return (
      <section className={`tab ${this.props.validationError ? "highlight-error" : ""} severity-tab`}>
        <p className="instructions required-field">Select the severity of your condition:</p>
        <ul>
          {this.props.severities.map(({ severity, id }) => (
            <li key={id}>
              <button className={this.props.severityId == id ? "active severity-btn" : "severity-btn"} onClick={this.handleSelection} name={id}><img name={id} src={`..\\..\\images\\Buttons_icons\\Severity options\\${severity}.png`} alt={`${severity} severity`}/>{severity}</button>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.estimator})


export default connect(mapStateToProps, { getSeverities, selectSeverity, updateValidationError })(TabSeverity)
