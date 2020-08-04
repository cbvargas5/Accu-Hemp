import React from 'react'

function ProductCard({ link, brand, description }) {
  return (
    <div className="product-card">
      <a className="product-card-link" href={link} target="_blank">{brand}: {description}</a>
    </div>
  )
}

export default ProductCard
