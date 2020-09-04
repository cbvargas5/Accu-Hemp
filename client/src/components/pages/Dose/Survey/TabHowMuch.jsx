import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectDoseDuration, selectImprovement, updateInputElaborate } from '../../../../actions/survey'

// selectedDoseDuration, selectedImprovement, inputElaborate

class TabHowMuch extends Component {
  render() {
    return (
      <section>
        
      </section>
    )
  }
}


const mapStateToProps = (state) => ({ ...state.survey })

export default connect(mapStateToProps, { selectDoseDuration, selectImprovement, updateInputElaborate })(TabSurveyCondition)

