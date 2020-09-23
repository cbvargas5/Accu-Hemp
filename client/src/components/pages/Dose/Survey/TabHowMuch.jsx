import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectDoseDuration, selectImprovement, updateInputElaborate, updateValidationError } from '../../../../actions/survey'


class TabHowMuch extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e) => {
    const { name,value } = e.target
    if (this.props.validationError) {
      this.props.updateValidationError({validationError: false})
    }
    switch(name) {
      case 'duration':
        this.props.selectDoseDuration({selectedDoseDuration: value})
        break;
      case 'elaborate':
        this.props.updateInputElaborate({inputElaborate: value})
        break;
      default:
        break;
    }
  }
  handleSelection = (e) => {
    const { value } = e.target
    if (this.props.validationError) {
      this.props.updateValidationError({validationError: false})
    }
    this.props.selectImprovement({selectedImprovement: value})
  }
  render() {
    return (
      <section className="tab how-much-tab">
        <div className={this.props.validationError ? "highlight-error" : ""}>
          <p className="instructions required-field">How long have you been using this dose of CBD?</p>
          <span>Please provide estimated number of days, weeks, months, years</span>
          <input onChange={this.handleChange} type="text" name="duration" id="duration"/>
        </div>
        <div className={this.props.validationError ? "highlight-error" : ""}>
          <p className="instructions required-field">How much has this dose of CBD improved your symptoms or condition?</p>
          <ul>
            <li>
              <input onClick={this.handleSelection} name="improvement" type="button" value={'0-24%'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="improvement" type="button" value={'25-49%'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="improvement" type="button" value={'50-74%'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="improvement" type="button" value={'75-100%'}/>
            </li>
          </ul>
        </div>
        <div>
          <p className="instructions">If you would like to elaborate on anything, please do so here:</p>
          <textarea onChange={this.handleChange} name="elaborate" id="elaborate" cols="50" rows="5"></textarea>
        </div>
      </section>
    )
  }
}


const mapStateToProps = (state) => ({ ...state.survey })

export default connect(mapStateToProps, { selectDoseDuration, selectImprovement, updateInputElaborate, updateValidationError })(TabHowMuch)

