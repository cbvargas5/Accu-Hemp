import React, { Component } from 'react'
import { connect } from 'react-redux'
import { verifySurvey } from '../../../../actions/survey'

class TabSubmit extends Component {
  constructor(props) {
    super(props)
  }
  handleSelection = (e) => {
    // const { value } = e.target
    // this.props.verifySurvey({selectedVerification: value})
  }
  render() {
    return (
      <section className="tab survey-submit-tab">
        <p className="instructions">Please verify that you understand this survey is anonymous and that you give us permission to collect and use the information you have filled out in this survey.*</p>
        <ul>
          <li>
            <input onClick={this.handleSelection} name="Yes" type="button" value={'Yes, I understand and agree to these statements.'}/>
          </li>
          <li>
            <input onClick={this.handleSelection} name="No" type="button" value={'No'}/>
          </li>
        </ul>
        {/* add a navigate to dose page  */}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.survey })

export default connect(mapStateToProps, { verifySurvey })(TabSubmit)