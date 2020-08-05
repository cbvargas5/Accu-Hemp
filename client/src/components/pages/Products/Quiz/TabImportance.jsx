import React, { Component } from 'react'
import { connect } from 'react-redux'

class TabImportance extends Component {
  render() {
    return (
      <div>
        <h1>Importance</h1>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TabImportance)
