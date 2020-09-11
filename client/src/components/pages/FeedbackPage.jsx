import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateOverallRating, updateEaseOfUseRating, updateHelpfulness, updateInputMostLike, updateInputLeastLike, updateInputSuggestions, updateInputFeedbackEmail } from '../../actions/feedback'

import StarRating from '../StarRating.jsx'

class FeedbackPage extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e) => {
    const { name, value } = e.target
    console.log(name,value)
  }
  render() {
    return (
    <section className="big-card">
      <StarRating rxAction={this.props.updateOverallRating} starsSubmitted={this.props.overallRating} stateKey={'overallRating'}>1) Overall Rating:*</StarRating>
      <StarRating rxAction={this.props.updateEaseOfUseRating} starsSubmitted={this.props.easeOfUseRating} stateKey={'easeOfUseRating'}>2) Ease of Use:*</StarRating>
      <StarRating rxAction={this.props.updateHelpfulness} starsSubmitted={this.props.helpfulnessRating} stateKey={'helpfulnessRating'}>3) Helpfulness:*</StarRating>
      <div>
        <p className="instructions">4) What do you like the most about AccuHemp?</p>
        <textarea onChange={this.handleChange} name="like-most" rows="10" cols="50"/>
      </div>
      <div>
        <p className="instructions">5) What do you like the least about AccuHemp?</p>
        <textarea onChange={this.handleChange} name="like-least" rows="10" cols="50"/>
      </div>
      <div>
        <p className="instructions">6) Do you have any suggestions to help us improve?</p>
        <textarea onChange={this.handleChange} name="suggestions" rows="10" cols="50"/>
      </div>
      <div>
        <p className="instructions">Your Email: (Optional)</p>
        <span>Please provide us with your email if you would like to receive a response from us.</span>
        <input onChange={this.handleChange} type="email" name="optional-email"/>
      </div>
    </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.feedback})

export default connect(mapStateToProps, { updateOverallRating, updateEaseOfUseRating, updateHelpfulness, updateInputMostLike, updateInputLeastLike, updateInputSuggestions, updateInputFeedbackEmail })(FeedbackPage)
