import React, { Component } from 'react'
import { connect } from 'react-redux'

class TabDose extends Component {
  render() {
    return (
      <div>
        <h1>Dose</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})


export default connect(mapStateToProps)(TabDose)
