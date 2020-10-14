import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { verifySurvey, updateValidationError } from '../../../../actions/survey'
import ButtonCard from '../../../cards/ButtonCard.jsx'
import axios from 'axios'

class TabSubmit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wasFormSubmitted: false 
    }
  }
  componentDidMount() {
    if (this.state.wasFormSubmitted) {
      this.setState({wasFormSubmitted: false})
    }
}
  handleSelection = (e) => {
    const { name } = e.target
    if (this.props.validationError) {
      this.props.updateValidationError({validationError: false})
    } 
    this.props.verifySurvey({selectedVerification: name})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const dataToSend = {
      condition: this.props.selectedCondition,
      weight: this.props.inputWeight,
      severity: this.props.selectedSeverity,
      dose: this.props.selectedDose,
      professionalHelp: this.props.selectedProfessionalHelp,
      otherMedication: this.props.selectedOtherMedication,
      otherMedicationExplanation: this.props.otherMedicationInput,
      doseDuration: this.props.selectedDoseDuration,
      doseImprovement: this.props.selectedImprovement,
      elaborate: this.props.inputElaborate
    }
    axios.post('/api/mail/survey', dataToSend)
      .then(() => {
        if (!this.state.wasFormSubmitted) {
          this.setState({wasFormSubmitted: true})
        }
      })
      .catch((err) => console.error(err))
  }
  render() {
    return (
      <section className="tab survey-submit-tab">
        <div>
          <p className="instructions required-field">Please verify that you understand this survey is anonymous and that you give us permission to collect and use the information you have filled out in this survey.</p>
          <ul>
            <li>
              <input className={this.props.selectedVerification == 'Yes' ? "active" : ""} onClick={this.handleSelection} name="Yes" type="button" value={'Yes, I understand and agree to these statements.'}/>
            </li>
            <li>
              <input className={this.props.selectedVerification == 'No' ? "active" : ""} onClick={this.handleSelection} name="No" type="button" value={'No'}/>
            </li>
          </ul>
        </div>
        <div className={this.props.selectedVerification === 'No' ? "" : "hide"}>
          <p>If you do not agree to the statement above, just click the button "Go Back" and it will take you back to the main page. None of your responses will be saved/submitted.</p>
          <ButtonCard link="/Dose" icon="fas fa-laptop-medical">Go Back to Dose Page</ButtonCard>
        </div>
        {
          this.state.wasFormSubmitted
          ?
          <div className="success">
            <p><span>Thank You!</span> Your form has been sent</p>
          </div>
          :
          <Button className={`tab-btn ${this.props.selectedVerification === "Yes" ? "" : "hide"}`} onClick={this.handleSubmit} type="submit">Send</Button>
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.survey })

export default connect(mapStateToProps, { verifySurvey, updateValidationError })(TabSubmit)