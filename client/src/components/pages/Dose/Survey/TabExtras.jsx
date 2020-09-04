import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSurveyDose, selectProfessionalHelp, selectOtherMedication, updateOtherMedicationInput } from '../../../../actions/survey'


class TabExtras extends Component {
  handleChange = (e) => {
    const { name,value } = e.target
    switch(name) {
      case 'dose':
        this.props.selectSurveyDose({selectedDose: value})
        return
      case 'other medications explanation':
        this.props.updateOtherMedicationInput({otherMedicationInput: value})
        return
      default:
        return
    }
  }
  handleSelection = (e) => {
    const { name,value } = e.target
    switch(name) {
      case 'professional':
        this.props.selectProfessionalHelp({selectedProfessionalHelp: value})
        return
      case 'other medications':
        this.props.selectOtherMedication({selectedOtherMedication: value})
        return
      default:
        return
    }

  }
  render() {
    return (
      <section className="tab extras-tab">
        <div>
          <p className="instructions">How many milligrams of CBD do you take for your condition?*</p>
          <input onChange={this.handleChange} type="number" name="dose" id="dose"/>
        </div>
        <div>
          <p className="instructions">Did a licensed medical professional help you figure out your dose of CBD?*</p>
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
        <div>
          <p className="instructions">Is there anything else you are taking for your condition?*</p>
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
        {/* can change this when I create a class for this div */}
        <div style={this.props.selectedOtherMedication === 'Yes' ? {display:"block"} : {display:"none"}}>
          <p className="instructions">Other than CBD hemp oil, what else are you taking for your condition?</p>
          <textarea onChange={this.handleChange} name="other medications explanation" id="other-medications" cols="50" rows="5"></textarea>
        </div>
      </section>
    )
  }
}


const mapStateToProps = (state) => ({...state.survey})

export default connect(mapStateToProps, { selectSurveyDose, selectProfessionalHelp, selectOtherMedication, updateOtherMedicationInput })(TabExtras)
