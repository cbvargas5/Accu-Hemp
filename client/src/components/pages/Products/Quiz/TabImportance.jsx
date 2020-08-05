import React, { Component } from 'react'
import { connect } from 'react-redux'

import Option from './Option.jsx'


class TabImportance extends Component {
  constructor(props) {
    super(props)
  }
    render() {
    const OPTIONS = ['Finding the lowest price product for my dose', 'Finding the best value product for my dose', 'Finding a product with a higher concentration or larger size']
    return (
      <div className="tab">
        <div className="question-line">
          <h4>What is most important to you?</h4>
        </div>
        <div className="options-wrapper">
          <ul className="options">
            {OPTIONS.map((option, index) => <Option handleSelection={this.handleSelection} key={index}>{option}</Option>)}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.products})


export default connect(mapStateToProps)(TabImportance)
