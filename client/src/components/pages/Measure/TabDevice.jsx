import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Option from '../Products/Quiz/Option.jsx'

import { Button } from 'react-bootstrap'


class TabDevice extends Component {
  constructor(props) {
    super(props)

  }  
  render() {
    return (
      <div className="tab">
        <div className="question-line">
          <h4>What tool are you using to measure your CBD?</h4>
          <p>If you are using a syringe to measure CBD hemp oil from a dropper bottle, please click 'syringe' (not 'dropper')</p>
        </div>
        <div className="device-wrapper">
          <Button onClick={this.props.onNext}className="tab-btn">Dropper <i className="fas fa-eye-dropper"></i></Button>
          <Button onClick={this.props.onNext}className="tab-btn">Syringe <i className="fas fa-syringe"></i></Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.measure})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TabDevice)
