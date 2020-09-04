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
        
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.survey })

export default connect(mapStateToProps, { verifySurvey })(TabSubmit)