import React, { Component } from 'react'
import ButtonCard from '../cards/ButtonCard.jsx'
import { Link } from 'react-router-dom'



export default class ProductsPage extends Component {
  render() {
    return (
      <div>
        <section className="mini-header">
          <h2>Products</h2>
        </section>
        <section className="quiz-nav">
          <ButtonCard link="/product-finder" icon="fas fa-search-dollar">Product Finder Quiz</ButtonCard>
          <p>We have handpicked all the products in our shop and have personally tested most of them. All of these products have quality test results linked in their descriptions.</p>
          <p><strong>Please note:</strong> We may earn a small commission if you purchase products through the links on our website.</p>
        </section>
        <section className="product-list">

        </section>
      </div>
    )
  }
}

