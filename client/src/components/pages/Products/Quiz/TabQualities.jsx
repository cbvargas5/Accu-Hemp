import React, { Component } from 'react'
import { connect } from 'react-redux'

class TabQualities extends Component {
  render() {
    return (
      <div>
        <h1>Qualities</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TabQualities)
