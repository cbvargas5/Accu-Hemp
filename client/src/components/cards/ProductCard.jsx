import React from 'react'

function ProductCard({ link, brand, description, thumbnail, price }) {
  return (
    <>
      <li className="product-card">
        <a className="product-card-link" href={link} target="_blank">
          <div>
            <img src={thumbnail} alt="product thumbnail"/>
          </div>
          <div className="product-details">
            <span className="product-card-desc"><strong>{brand}:</strong>{description}</span>
            <span className="price">${price}</span>
          </div>
        </a>
      </li>
    </>
  )
}

export default ProductCard
