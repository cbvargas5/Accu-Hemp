import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSurveyDose, selectProfessionalHelp, selectOtherMedication } from '../../../../actions/survey'


// selectedDose, selectedProfessionalHelp, selectedOtherMedication


class TabExtras extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


const mapStateToProps = (state) => ({...state.survey})

export default connect(mapStateToProps, { selectSurveyDose, selectProfessionalHelp, selectOtherMedication })(TabExtras)
