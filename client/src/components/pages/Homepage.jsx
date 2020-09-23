import React from 'react';
import IconCard from '../cards/IconCard.jsx';
import Carousel from '../Carousel.jsx'
import Modal from '../Modal.jsx';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
   return (
    <section className="homepage-mid-sec">
        <div className="opening-msgs">
          <h3>Why is using CBD Hemp Oil so <span>complicated?</span></h3>
          <h2>AccuHemp can make it easy:</h2>
        </div>
        <section className="homepage-steps underline-sec">
          <IconCard step="1" icon="fas fa-laptop-medical" title="Dose">We can help you estimate your dose of CBD by by answering a few simple questions about your condition and severity/weight. Skip to Step 2 if you already know your dose.</IconCard>
          <IconCard step="2" icon="fas fa-shopping-cart" title="Products">Already know your dose of CBD? Take our Product Finder Quiz to be matched with the best CBD hemp oil products based on your dose. Skip to Step 3 if you already have a product.</IconCard>
          <IconCard step="3" icon="fas fa-syringe" title="Measure">Already know your dose and have your product? Take our Measurement Quiz to help you measure your dose specific to your product! Currently we offer measurements for drops and syringes.</IconCard>
        </section>
        <Carousel />
    </section>
    )
  }
}

export default Homepage;