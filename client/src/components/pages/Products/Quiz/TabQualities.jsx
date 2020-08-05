import React, { Component } from 'react'
import { connect } from 'react-redux'

import Option from './Option.jsx'


class TabQualities extends Component {
  render() {
  const OPTIONS = ['Sleep Aid (CBD + Melatonin)', 'Full/Broad Spectrum products', 'Zero THC products', 'From organically grown hemp', 'Different flavor options available', 'Any of these']
  return (
      <div className="tab">
      <div className="question-line">
        <h4>Please select what qualities you would like in a CBD hemp oil product:</h4>
        <p>We know how important it is to make sure the products you buy are legitimate and high quality, which is why all of the brands in our shop have quality testing. All of their test results are available on their websites for you to view.</p>
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

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TabQualities)
