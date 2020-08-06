import React from 'react'

function ProductCard({ link, brand, description, thumbnail, price }) {
  return (
    <>
      <li className="product-card">
        <a className="product-card-link" href={link} target="_blank">
          <img src={thumbnail} alt="product thumbnail"/>
          <strong>{brand}:</strong>{description}
          <br/>
          <span className="price">${price}</span>
        </a>
      </li>
    </>
  )
}

export default ProductCard
