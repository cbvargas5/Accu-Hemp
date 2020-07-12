import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="./images/" alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./images/" alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./images/" alt=""/>
      </Carousel.Item>
    </Carousel>


    // <section className="brand-carousel-section">
    //   <h3>Brands available:</h3>
    //   <div className="carousel-wrapper">CAROUSEL WILL GO HERE</div>
    // </section>
  )
}
