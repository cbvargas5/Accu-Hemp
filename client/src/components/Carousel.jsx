import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function() {
  const PATH = `./images/${"Brand logos"}/`
  const BRANDS = ['cbdmd', 'cw', 'elixinol', 'elsol', 'endoca', 'incann', 'joy_organics']
  return (
    <section className="brand-carousel-section">
      <h3>Brands available:</h3>
      <Carousel>
      {
        BRANDS.map((brand, index) => (
          <Carousel.Item key={index}>
            <img src={`${PATH}${brand}.png`} alt={`${brand} logo`}/>
          </Carousel.Item>
        ))
      }
      </Carousel>
    </section>
  )
}
