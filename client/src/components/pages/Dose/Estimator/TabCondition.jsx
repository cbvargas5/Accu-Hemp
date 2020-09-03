import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getConditions, selectCondition } from '../../../../actions/dose'


export class TabCondition extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getConditions()
  }
  handleSelection = (e) => {
    this.props.selectCondition({selectedCondition: e.target.value})
  }
  render() {
    console.log(this.props)
    return (
      <section className="tab condition-tab">
        <p className="instructions">Select a Condition:*</p>
        <ul>
          {this.props.conditions
            .map(({ condition }, index) => (
              <li key={index}>
                <input onClick={this.handleSelection} type="button" value={condition}/>
              </li>
            ))}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.estimator })


export default connect(mapStateToProps, { getConditions, selectCondition })(TabCondition)
