import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getConditions } from '../../../../actions/dose'


export class TabResults extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getConditions()
      .then(data => {
        console.log('after action -->', this.props)
      })
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.estimator.conditions
            .map(({ condition }, index) => (
              <li key={index}>{condition}</li>
            ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TabResults)
