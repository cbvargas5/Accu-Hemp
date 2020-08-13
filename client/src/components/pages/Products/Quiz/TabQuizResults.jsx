import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductCard from '../../../cards/ProductCard.jsx'

class TabQuizResults extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('quiz result:', this.props)
    return (
      <div className="tab quiz-results">
        <p>Recommended Products:</p>
        <ul>
          {/* Awaiting filter algorithm */}
            {this.props.products.map( product => <ProductCard key={product.id} {...product}/> )}
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.products})


export default connect(mapStateToProps)(TabQuizResults)
