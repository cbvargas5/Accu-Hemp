import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectDevice } from '../../../actions/measure'

import { Button } from 'react-bootstrap'


class TabDevice extends Component {
  constructor(props) {
    super(props)

  }  
  handleSelection = (e) => {
    this.props.selectDevice({selectedDevice: e.target.value})
  }
  render() {
    return (
      <div className="tab">
        <div className="question-line">
          <h4>What tool are you using to measure your CBD?</h4>
          <p>If you are using a syringe to measure CBD hemp oil from a dropper bottle, please click 'syringe' (not 'dropper')</p>
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

export default connect(mapStateToProps, { selectDevice })(TabDevice)
