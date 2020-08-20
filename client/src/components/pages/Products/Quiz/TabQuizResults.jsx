import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateFilteredProducts } from '../../../../actions/products'


import ProductCard from '../../../cards/ProductCard.jsx'

class TabQuizResults extends Component {
  constructor(props) {
    super(props)
  }
  filterByQuality = ({ melatonin, spectrum, thc, organic, flavor }) => {

    switch(this.props.selectedQualities) {
      case 'Sleep Aid (CBD + Melatonin)': 
        return melatonin
      case 'Full/Broad Spectrum products': 
        return spectrum
      case 'Zero THC products': 
        return !thc
      case 'From organically grown hemp': 
        return organic
      case 'Different flavor options available': 
        return flavor
      case 'Any of these': 
        return true
    }
  }
  componentDidMount() {
    this.props.updateFilteredProducts(this.props.filteredProducts.filter(this.filterByQuality))
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="tab quiz-results">
        <p>Recommended Products:</p>
        <ul>
          {/* Awaiting filter algorithm */}
            {this.props.filteredProducts.map( product => <ProductCard key={product.id} {...product}/> )}
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.products})


export default connect(mapStateToProps, { updateFilteredProducts })(TabQuizResults)
