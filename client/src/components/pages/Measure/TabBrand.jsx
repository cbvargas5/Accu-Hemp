import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from 'react-bootstrap'


import { selectBrand } from '../../../actions/measure'


class TabBrand extends Component {
  constructor(props) {
    super(props)

  }  
  handleSelection = (e) => {
    this.props.selectBrand({selectedBrand: e.target.value})
  }
  render() {
    console.log('test ->', this.props)
    return (
      <div className="tab">
        <div className="question-line">
          <h4>Select Brand:*</h4>
        </div>
        <div className="device-wrapper">
          <Button onClick={(e) => { this.props.onNext(); this.handleSelection(e); }} value="dropper" className="tab-btn">Dropper <i className="fas fa-eye-dropper"></i></Button>
          <Button onClick={(e) => { this.props.onNext(); this.handleSelection(e); }} value="syringe" className="tab-btn">Syringe <i className="fas fa-syringe"></i></Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.measure})

export default connect(mapStateToProps, { selectBrand })(TabBrand)
