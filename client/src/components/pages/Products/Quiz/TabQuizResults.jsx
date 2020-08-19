import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductCard from '../../../cards/ProductCard.jsx'

class TabQuizResults extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
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


export default connect(mapStateToProps)(TabQuizResults)
