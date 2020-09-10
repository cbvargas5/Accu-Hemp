import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateInputCompanyName, selectInvolvement, updateInputFirstName, updateInputLastName, updateInputEmail, updateInputPhone } from '../../../actions/advertising'

class TabUserInfo extends Component {
  constructor(props) {
    super(props)
  }
  // handleChange = (e) => {
  //   const { name,value } = e.target
  //   switch(name) {
  //     case 'company-name':
  //       this.props.selectSurveyDose({selectedDose: value})
  //       return
  //     case 'other medications explanation':
  //       this.props.updateOtherMedicationInput({otherMedicationInput: value})
  //       return
  //     default:
  //       return
  //   }
  // }
  // handleSelection = (e) => {
  //   const { name,value } = e.target
  //   switch(name) {
  //     case 'professional':
  //       this.props.selectProfessionalHelp({selectedProfessionalHelp: value})
  //       return
  //     case 'other medications':
  //       this.props.selectOtherMedication({selectedOtherMedication: value})
  //       return
  //     default:
  //       return
  //   }
  // }
  render() {
    return (
      <section className="tab user-info-tab">
        <div>
          <p className="instructions">What is the name of the CBD Hemp company or brand?*</p>
          <span>If you sell multiple brands, please fill out a separate form for each brand.</span>
          <input onChange={this.handleChange} type="text" name="company-name" id="company-name"/>
        </div>
        <div>
          <p className="instructions">How are you involved with this company/brand?*</p>
          <ul>
            <li>
              <input onClick={this.handleSelection} name="professional" type="button" value={'Owner'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="professional" type="button" value={'Employee'}/>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.advertising})

export default connect(mapStateToProps, { updateInputCompanyName, selectInvolvement, updateInputFirstName, updateInputLastName, updateInputEmail, updateInputPhone })(TabUserInfo)
