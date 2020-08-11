import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from 'react-bootstrap'


import { selectBrand } from '../../../actions/measure'


class TabBrand extends Component {
  constructor(props) {
    super(props)

  }
  filterBrands = ({ brand }) => {
    if (brand in this) {
      return false
    } else {
      this[brand] = brand
      return true
    }
  }  
  handleSelection = (e) => {
    this.props.selectBrand({selectedBrand: e.target.value})
  }
  render() {
    return (
      <div className="tab">
        <div className="question-line">
          <h4>Select Brand:*</h4>
        </div>
        <div className="device-wrapper">
          <ul>
            {
              this.props.products
                .filter(this.filterBrands, {})
                .map(( { id, brand } ) => <li key={id}><Button onClick={(e) => { this.props.onNext(); this.handleSelection(e); }} value={brand} className="tab-btn">{brand}</Button></li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.measure})

export default connect(mapStateToProps, { selectBrand })(TabBrand)
