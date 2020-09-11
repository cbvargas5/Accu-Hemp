import React, { Component } from 'react'
import StarRating from '../StarRating.jsx'
export default class FeedbackPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <section className="big-card">
      <StarRating/>
      <StarRating/>
      <StarRating/>
    </section>
    )
  }
}
