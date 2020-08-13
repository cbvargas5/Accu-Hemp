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
            {this.props.products.map(({ id, brand, description }) => <li key={id}><ProductCard link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" brand={brand} description={description}/></li>)}
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({...state.products})


export default connect(mapStateToProps)(TabQuizResults)
