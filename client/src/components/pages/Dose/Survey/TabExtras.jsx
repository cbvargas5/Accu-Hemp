import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSurveyDose, selectProfessionalHelp, selectOtherMedication, updateOtherMedicationInput, updateValidationError } from '../../../../actions/survey'


class TabExtras extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e) => {
    const { name,value } = e.target
    if (this.props.validationError) {
      this.props.updateValidationError({validationError: false})
    }
    switch(name) {
      case 'dose':
        this.props.selectSurveyDose({selectedDose: value})
        break;
      case 'other medications explanation':
        this.props.updateOtherMedicationInput({otherMedicationInput: value})
        break;
      default:
        break;
    }
  }
  handleSelection = (e) => {
    const { name,value } = e.target
    if (this.props.validationError) {
      this.props.updateValidationError({validationError: false})
    }
    switch(name) {
      case 'professional':
        this.props.selectProfessionalHelp({selectedProfessionalHelp: value})
        break;
      case 'other medications':
        this.props.selectOtherMedication({selectedOtherMedication: value})
        break;
      default:
        break;
    }

  }
  render() {
    return (
      <section className="tab extras-tab">
        <div className={this.props.validationError ? "highlight-error" : ""}>
          <p className="instructions required-field">How many milligrams of CBD do you take for your condition?</p>
          <input className="tab-input" onChange={this.handleChange} type="number" name="dose" id="dose"/>
        </div>
        <div className={this.props.validationError ? "highlight-error" : ""}>
          <p className="instructions required-field">Did a licensed medical professional help you figure out your dose of CBD?</p>
          <ul>
            <li>
              <input onClick={this.handleSelection} name="professional" type="button" value={'Yes'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="professional" type="button" value={'No'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="professional" type="button" value={'I would prefer not to answer'}/>
            </li>
          </ul>
        </div>
        <div className={this.props.validationError ? "highlight-error" : ""}>
          <p className="instructions required-field">Is there anything else you are taking for your condition?</p>
          <span>i.e. pharmaceuticals, over the counter medications</span>
          <ul>
            <li>
              <input onClick={this.handleSelection} name="other medications" type="button" value={'Yes'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="other medications" type="button" value={'No'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="other medications" type="button" value={'I would prefer not to answer'}/>
            </li>
          </ul>
        </div>
        <div className={this.props.selectedOtherMedication == 'Yes' ? "" : "hide"}>
          <p className="instructions">Other than CBD hemp oil, what else are you taking for your condition?</p>
          <textarea className="tab-input" onChange={this.handleChange} name="other medications explanation" id="other-medications" cols="50" rows="5"></textarea>
        </div>
      </section>
    )
  }
}


const mapStateToProps = (state) => ({...state.survey})

export default connect(mapStateToProps, { selectSurveyDose, selectProfessionalHelp, selectOtherMedication, updateOtherMedicationInput, updateValidationError })(TabExtras)
