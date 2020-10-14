import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectQuality, updateFilteredProducts } from '../../../../actions/products'


import Option from './Option.jsx'


class TabQualities extends Component {
  constructor(props) {
    super(props)
  }
  filterByImportance = (product) => {
    const pricePerMg = product.price / product.milligrams
    switch(this.props.selectedImportance) {
      case 'Finding the best value product for my dose': 
        return pricePerMg >= .05 && pricePerMg <= .09
      case 'Finding all products for my dose': 
        return true
    }
  }
  componentDidMount() {
    this.props.updateFilteredProducts(this.props.filteredProducts.filter(this.filterByImportance))
  }
  handleSelection = (e) => {
    this.props.selectQuality({selectedQualities: e.target.value})
  }
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
          {OPTIONS.map((option, index) => <Option active={this.props.selectedQualities == option ? "active" : ""} handleSelection={this.handleSelection} key={index}>{option}</Option>)}
        </ul>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.products})


export default connect(mapStateToProps, { selectQuality, updateFilteredProducts })(TabQualities)
