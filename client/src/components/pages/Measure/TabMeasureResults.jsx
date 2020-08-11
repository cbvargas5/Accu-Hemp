import React, { Component } from 'react'
import { connect } from 'react-redux'

class TabMeasureResults extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    console.log('results: ', this.props)
    return (
      <section className="tab results-tab">
      <section className="result mini-underline-sec">
        <h2>Your estimated measurement is 3.6 mL</h2>
        <br/>
        <p>For {`${this.props.selectedBrand} ${this.props.selectedProduct}`} you would need approximately 3.6 mL to measure {this.props.selectedDose} mg of CBD.</p>
        <br/>
        <p className="result-note"><strong>Please note:</strong> This measurement is just an approximation. The exact number of drops depends on the size of your dropper and how accurate the product's labeling is. We advise you to speak with a healthcare professional regarding your use of CBD hemp oil. This calculator is only meant to be a general guide, and should not be considered medical advice. These statements have not been evaluated by the Food and Drug Administration (FDA) and are not intended to diagnose, treat, cure or prevent any disease. Please consult with a medical professional for any medical advice.</p>
      </section>
      <section className="email-results-section">
        <form action="" className="email-results">
          <label className="question">Do you want your results emailed to you?</label>
          <label className="pls-enter">Please enter your email below to have your results emailed to you.</label>
          <input type="email" name="email" id="email"/>
          <button type="submit">Email my Results!</button>
        </form>
      </section>
    </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.measure})


export default connect(mapStateToProps)(TabMeasureResults)
