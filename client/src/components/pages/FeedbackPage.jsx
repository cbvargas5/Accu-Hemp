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
      <StarRating/>
      <StarRating/>
      <StarRating/>
    </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.feedback})

export default connect(mapStateToProps, { updateOverallRating, updateEaseOfUseRating, updateHelpfulness, updateInputMostLike, updateInputLeastLike, updateInputSuggestions, updateInputFeedbackEmail })(FeedbackPage)
