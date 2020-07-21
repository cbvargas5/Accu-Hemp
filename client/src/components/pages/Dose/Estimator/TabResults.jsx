import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getDose } from '../../../../actions/dose'


export class TabResults extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
      this.props.getDose()
  }
  render() {
    const { dose } = this.props.estimator
    if (dose[0]) {
      const { lowerdose, upperdose } = dose[0]
      return (
        <div className="tab results-tab">
          <h2>Results section</h2>
          <p>Your estimated dose is {lowerdose} to {upperdose}+ mg of CBD</p>
        </div>
      )
    } else {
      return (
        <p>loading...</p>
      )
    }
  }
}

const mapStateToProps = (state) => ({...state})


export default connect(mapStateToProps, { getDose })(TabResults)
