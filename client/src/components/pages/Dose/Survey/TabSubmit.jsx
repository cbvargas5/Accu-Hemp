import React, { Component } from 'react'
import { connect } from 'react-redux'
import { verifySurvey } from '../../../../actions/survey'
import ButtonCard from '../../../cards/ButtonCard.jsx'


class TabSubmit extends Component {
  constructor(props) {
    super(props)
  }
  handleSelection = (e) => {
    const { name } = e.target
    this.props.verifySurvey({selectedVerification: name})
  }
  render() {
    return (
      <section className="tab survey-submit-tab">
        <div>
          <p className="instructions">Please verify that you understand this survey is anonymous and that you give us permission to collect and use the information you have filled out in this survey.*</p>
          <ul>
            <li>
              <input onClick={this.handleSelection} name="Yes" type="button" value={'Yes, I understand and agree to these statements.'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="No" type="button" value={'No'}/>
            </li>
          </ul>
        </div>
        <div style={this.props.selectedVerification === 'No' ? {display: "block"} : {display: "none"}}>
          <p>If you do not agree to the statement above, just click the button "Go Back" and it will take you back to the main page. None of your responses will be saved/submitted.</p>
          <ButtonCard link="/Dose" icon="fas fa-laptop-medical">Go Back to Dose Page</ButtonCard>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.survey })

export default connect(mapStateToProps, { verifySurvey })(TabSubmit)