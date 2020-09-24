import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateEmail } from '../../../actions/measure'
import axios from 'axios'
import { Button } from 'react-bootstrap'

class TabMeasureResults extends Component {
  constructor(props) {
    super(props)

  }
  handleSubmit = (e) => {
    e.preventDefault()
    const device = this.props.selectedDevice
    const measurement = this.calculateMeasurement(this.props.selectedDevice, this.props.selectedDose, this.props.selectedProductMg, this.props.selectedSize)

    const dataToSend = {
      to: this.props.userEmail,
      brand: this.props.selectedBrand,
      product: this.props.selectedProduct,
      measurement,
      dose: this.props.selectedDose
    }
    if (device === 'syringe') {
      axios.post('/mail/syringe', dataToSend)
        .then(() => {
          // insert form submit boolean
        })
        .catch((err) => console.error(err))
      } else if (device === 'dropper') {
        axios.post('/mail/dropper', dataToSend)
          .catch((err) => console.error(err))
    }
  }
  handleChange = (e) => {
    this.props.updateEmail({userEmail: e.target.value})
  }
  calculateMeasurement = (device, userDose, productMg, productSize) => {
    if (device === 'syringe') {
     return `${Math.round(((productSize/productMg) * userDose) * 10) / 10} mL`
    } else if (device === 'dropper') {
     return `${Math.round(userDose /((productMg / productSize) *.0333))} drops`
    }
  }
  render() {
    const measurement = this.calculateMeasurement(this.props.selectedDevice, this.props.selectedDose, this.props.selectedProductMg, this.props.selectedSize)
    return (
    <section className="tab results-tab">
      <section className="result mini-underline-sec">
      <h2>Your estimated measurement is {measurement}</h2>
        <br/>
        <p>For {`${this.props.selectedBrand} ${this.props.selectedProduct}`} you would need approximately {measurement} to measure {this.props.selectedDose} mg of CBD.</p>
        <br/>
        <p className="result-note"><strong>Please note:</strong> This measurement is just an approximation. The exact number of drops depends on the size of your dropper and how accurate the product's labeling is. We advise you to speak with a healthcare professional regarding your use of CBD hemp oil. This calculator is only meant to be a general guide, and should not be considered medical advice. These statements have not been evaluated by the Food and Drug Administration (FDA) and are not intended to diagnose, treat, cure or prevent any disease. Please consult with a medical professional for any medical advice.</p>
      </section>
      <section className="email-results-section">
        <form onSubmit={this.handleSubmit} action="" className="email-results">
          <label className="question">Do you want your results emailed to you?</label>
          <label className="pls-enter">Please enter your email below to have your results emailed to you.</label>
          <input className="tab-input" onChange={this.handleChange} type="email" name="email" id="email"/>
          <Button className={`tab-btn ${this.props.userEmail.includes("@") ? "" : "hide"}`} type="submit">Email my Results!</Button>
        </form>
      </section>
    </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.measure})


export default connect(mapStateToProps, { updateEmail })(TabMeasureResults)
