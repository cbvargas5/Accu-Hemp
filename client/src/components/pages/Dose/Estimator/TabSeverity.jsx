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
    console.log('Severity props ->', this.props)
    return (
      <div>
        <ul>
          {this.props.estimator.severities.map(({ severity, id }) => (
            <li key={id}>
              <input onClick={this.handleSelection} name={id} type="button" value={severity}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps, { getSeverities, selectSeverity })(TabSeverity)
