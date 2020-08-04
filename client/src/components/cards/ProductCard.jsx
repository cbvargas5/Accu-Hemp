import React from 'react'

function ProductCard({ link, brand, description }) {
  return (
    <div>
      <a href={link} target="_blank">{brand}: {description}</a>
    </div>
  )
}

export default ProductCard
