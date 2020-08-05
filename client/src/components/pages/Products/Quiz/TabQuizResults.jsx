import React, { Component } from 'react'
import { connect } from 'react-redux'

class TabQuizResults extends Component {
  render() {
    return (
      <div>
        <h1>Results</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TabQuizResults)
