import React, { Component } from 'react'
import ButtonCard from '../cards/ButtonCard.jsx';


class MeasurePage extends Component {
  constructor(props) {
    super(props)

  }  
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <section>
        <section className="mini-header">
          <h1>Measure</h1>
        </section>
        <section className="description-sect">
          <h2>Measure Your Dose of CBD:</h2>
          <p><strong>Warning:</strong> this quiz is meant only for CBD hemp oil in liquid form. It only works for CBD products that are measured by mL, not by grams.</p>
        </section>
        <section>
          <ButtonCard link="/measure/measure-quiz" icon="fas fa-syringe">Measure Quiz</ButtonCard>
        </section>
      </section>
    )
  }
}

export default MeasurePage
