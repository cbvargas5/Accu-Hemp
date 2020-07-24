import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSeverities, selectSeverity } from '../../../../actions/dose'


export class TabSeverity extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getSeverities().then(() => console.log('state-->', this.props.estimator))
  }
  handleSelection = (e) => {
    this.props.selectSeverity({severityId: e.target.name})
  }
  render() {
    return (
      <section className="tab severity-tab">
        <ul>
          {this.props.estimator.severities.map(({ severity, id }) => (
            <li key={id}>
              <button className="severity-btn"onClick={this.handleSelection} name={id}><img src={`..\\..\\images\\Buttons_icons\\Severity options\\${severity}.png`} alt="severity face"/>{severity}</button>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps, { getSeverities, selectSeverity })(TabSeverity)
