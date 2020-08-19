import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectImportance, updateFilteredProducts } from '../../../../actions/products'

import Option from './Option.jsx'


class TabImportance extends Component {
  constructor(props) {
    super(props)
  }
  filterByDose = (product) => {
    const mgPerMl = product.milligrams / product.size

    switch(this.props.selectedDose) {
      case 'Less than 10 mg of CBD': 
        return mgPerMl >= 7 && mgPerMl <= 25
      case '10 to 20 mg of CBD': 
        return mgPerMl >= 10 && mgPerMl <= 50
      case '20 to 30 mg of CBD': 
        return mgPerMl >= 25 && mgPerMl <= 60
      case '30 to 50 mg of CBD': 
        return mgPerMl >= 30 && mgPerMl <= 100
      case '50 to 75 mg of CBD': 
        return mgPerMl >= 50 && mgPerMl <= 167
      case '75 to 100 mg of CBD': 
        return mgPerMl >= 60 && mgPerMl <= 250
      case '100 to 200 mg of CBD': 
        return mgPerMl >= 100 && mgPerMl <= 333
      case 'More than 200 mg of CBD': 
        return mgPerMl >= 150 && mgPerMl <= 333
    }
  }
  componentDidMount() {
    this.props.updateFilteredProducts(this.props.filteredProducts.filter(this.filterByDose))
  }
  handleSelection = (e) => {
    this.props.selectImportance({selectedImportance: e.target.value})
  }
  render() {
  const OPTIONS = ['Finding the best value product for my dose', 'Finding all products for my dose']
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


export default connect(mapStateToProps, { selectImportance, updateFilteredProducts })(TabImportance)
