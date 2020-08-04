import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProducts } from '../../actions/products'

import ButtonCard from '../cards/ButtonCard.jsx'
import ProductCard from '../cards/ProductCard.jsx'

class ProductsPage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    return (
      <div>
        <section className="mini-header">
          <h2>Products</h2>
        </section>
        <section className="quiz-nav">
          <ButtonCard link="/products/finder-quiz" icon="fas fa-search-dollar">Product Finder Quiz</ButtonCard>
          <p>We have handpicked all the products in our shop and have personally tested most of them. All of these products have quality test results linked in their descriptions.</p>
          <p><strong>Please note:</strong> We may earn a small commission if you purchase products through the links on our website.</p>
        </section>
        <section className="product-list">
          <ul>
            {this.props.products.products.map(({ id, brand, description }) => <li key={id}><ProductCard link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" brand={brand} description={description}/></li>)}
          </ul>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ ...state })

export default connect(mapStateToProps, { getProducts })(ProductsPage)
