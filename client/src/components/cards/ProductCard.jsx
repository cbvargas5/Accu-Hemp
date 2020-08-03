import React from 'react'

function ProductCard() {
  return (
    <div>
      <a href={props.link} target="_blank">{brand}: {description}</a>
    </div>
  )
}

export default ProductCard
