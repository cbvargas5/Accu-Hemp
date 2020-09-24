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
  onNavClick = (num) => {
    window.scrollTo(0, 0)
    this.setState({page: num})
  }
  render() {
    const { products } = this.props
    const { page } = this.state
    const numOfdisplayedProducts = 16
    const start = page * numOfdisplayedProducts
    const end = ((page + 1) * numOfdisplayedProducts) - 1
    const numOfPages = Math.ceil(products.length / numOfdisplayedProducts)
    const numOfPagesArray = Array.from({length: numOfPages}, (x, i) => i + 1)
    const displayedProducts = products.filter((product, index) => {
      if(index >= start && index <= end) return product
    })

    console.log(displayedProducts.length, start, end, numOfPages, numOfPagesArray)
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
            {displayedProducts.map( product => <ProductCard key={product.id} {...product}/> )}
          </ul>
          <ul>
            {numOfPagesArray.map((num, index) => <li key={index}><button onClick={() => this.onNavClick(index)} className="product-nav-btn">{num}</button></li>)}
          </ul>
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.products })

export default connect(mapStateToProps, { getProducts })(ProductsPage)
