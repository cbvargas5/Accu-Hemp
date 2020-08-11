import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from 'react-bootstrap'

import { selectProduct } from '../../../actions/measure'


class TabProduct extends Component {
  constructor(props) {
    super(props)

  }

  handleSelection = (e) => {
    this.props.selectProduct({selectedProduct: e.target.value})
  }
  render() {
    console.log('product props ->', this.props)
    return (
      <div className="tab">
        <div className="question-line">
          <h4>Select Product:*</h4>
        </div>
        <div className="device-wrapper">
          <ul>
            {
              this.props.products
                .filter(({ brand }) => this.props.selectedBrand === brand)
                .map(({ id, description }) => <li key={id}><Button onClick={(e) => { this.props.onNext(); this.handleSelection(e); }} value={description} className="tab-btn">{description}</Button></li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.measure})


export default connect(mapStateToProps, { selectProduct })(TabProduct)
