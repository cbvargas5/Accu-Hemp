import React, { Component } from 'react'
import { connect } from 'react-redux'

// import {  } from '../../../../actions/dose'


export class TabResults extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
      //brb
  }
  render() {
    console.log('Results props ->', this.props)
    return (
      <div>
        <h2>Results section</h2>
        <p>Your estimated dose is blank to blank+ mg of CBD</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state})


export default connect(mapStateToProps, mapDispatchToProps)(TabResults)
