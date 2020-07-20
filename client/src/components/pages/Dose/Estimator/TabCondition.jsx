import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getConditions } from '../../../../actions/dose'


export class TabCondition extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getConditions()
      .then(data => {
        console.log('C-Tab props after mount -->', this.props)
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

const mapStateToProps = (state) => ({ ...state })


const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, { getConditions })(TabCondition)
