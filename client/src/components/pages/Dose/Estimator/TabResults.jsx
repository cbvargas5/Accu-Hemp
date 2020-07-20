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
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TabResults)
