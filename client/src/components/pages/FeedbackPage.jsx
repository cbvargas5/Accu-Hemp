import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateOverallRating, updateEaseOfUseRating, updateHelpfulness, updateInputMostLike, updateInputLeastLike, updateInputSuggestions, updateInputFeedbackEmail } from '../../actions/feedback'

import StarRating from '../StarRating.jsx'

class FeedbackPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <section className="big-card">
      <StarRating rxAction={updateOverallRating} starsSubmitted={this.props.overallRating} stateKey={'overallRating'}>1) Overall Rating:*</StarRating>
      <StarRating rxAction={updateEaseOfUseRating} starsSubmitted={this.props.easeOfUseRating} stateKey={'easeOfUseRating'}>2) Ease of Use:*</StarRating>
      <StarRating rxAction={updateHelpfulness} starsSubmitted={this.props.helpfulnessRating} stateKey={'helpfulnessRating'}>3) Helpfulness:*</StarRating>
    </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.feedback})

export default connect(mapStateToProps, { updateOverallRating, updateEaseOfUseRating, updateHelpfulness, updateInputMostLike, updateInputLeastLike, updateInputSuggestions, updateInputFeedbackEmail })(FeedbackPage)
