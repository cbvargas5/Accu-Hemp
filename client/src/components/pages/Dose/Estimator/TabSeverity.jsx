import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSeverities, selectSeverity } from '../../../../actions/dose'


export class TabSeverity extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getSeverities()
  }
  handleSelection = (e) => {
    this.props.selectSeverity({severityId: e.target.name})
  }
  render() {
    return (
      <section className="tab severity-tab">
        <ul>
          {this.props.severities.map(({ severity, id }) => (
            <li key={id}>
              <button className="severity-btn" onClick={this.handleSelection} name={id}><img name={id} src={`..\\..\\images\\Buttons_icons\\Severity options\\${severity}.png`} alt={`${severity} severity`}/>{severity}</button>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.estimator})


export default connect(mapStateToProps, { getSeverities, selectSeverity })(TabSeverity)
