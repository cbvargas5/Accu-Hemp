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
    this.props.selectCondition({selectCondition: e.target.value})
  }
  render() {
    console.log('state ->', this.props.estimator)
    return (
      <div>
        <ul>
          {this.props.estimator.conditions
            .map(({ condition }, index) => (
              <li key={index}>
                <input onClick={this.handleSelection} type="button" value={condition}/>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ ...state })


const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, { getConditions, selectCondition })(TabCondition)
