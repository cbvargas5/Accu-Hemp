import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TabSeverity extends Component {
  render() {
    return (
      <div>
        <h2>Severity Section</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps)(TabSeverity)
