import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getConditions } from '../../../../actions/dose'


export class TabResults extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // this.props.getConditions()
    //   .then(data => {
    //     console.log('after action -->', this.props)
    //   })
  }
  render() {
    console.log('Results props ->', this.props)
    return (
      <div>
        <h2>Results section</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TabResults)
