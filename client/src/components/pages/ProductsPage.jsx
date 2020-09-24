import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProducts } from '../../actions/products'

import ButtonCard from '../cards/ButtonCard.jsx'
import ProductCard from '../cards/ProductCard.jsx'

class ProductsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
  }
  componentDidMount() {
    this.props.getProducts()
    window.scrollTo(0, 0)
  }
  render() {
    const { products } = this.props
    const { page } = this.state
    const displayedProductsNum = 16
    const start = page * displayedProductsNum
    const end = ((page + 1) * displayedProductsNum) - 1
    const numOfPages = Math.ceil(products.length / displayedProductsNum)
    const newProducts = products.filter((product, index) => {
      if(index >= start && index <= end) return product
    })
    console.log(newProducts.length, start, end, numOfPages)
    return (
      <section className="product-page">
        <section className="mini-header">
          <h1>Products</h1>
        </section>
        <section className="quiz-nav">
          <ButtonCard link="/products/finder-quiz" icon="fas fa-search-dollar">Product Finder Quiz</ButtonCard>
          <p>We have handpicked all the products in our shop and have personally tested most of them. All of these products have quality test results linked in their descriptions.</p>
          <p><strong>Please note:</strong> We may earn a small commission if you purchase products through the links on our website.</p>
        </section>
        <section className="product-list">
          {/* I can make an array of arrays */}
          <ul>
            {newProducts.map( product => <ProductCard key={product.id} {...product}/> )}
          </ul>
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.products })

export default connect(mapStateToProps, { getProducts })(ProductsPage)
