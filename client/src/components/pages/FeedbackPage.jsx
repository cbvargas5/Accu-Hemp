import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateOverallRating, updateEaseOfUseRating, updateHelpfulness, updateInputMostLike, updateInputLeastLike, updateInputSuggestions, updateInputFeedbackEmail } from '../../actions/feedback'
import StarRating from '../StarRating.jsx'
import { Button } from 'react-bootstrap'
import axios from 'axios'

class FeedbackPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wasFormSubmitted: false 
    }
  }
  componentDidMount() {
    if (this.state.wasFormSubmitted) {
      this.setState({wasFormSubmitted: false})
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    switch(name) {
      case 'like-most':
          this.props.updateInputMostLike({inputMostLike: value})
        break;
      case 'like-least':
        this.props.updateInputLeastLike({inputLeastLike: value})
        break;
      case 'suggestions':
          this.props.updateInputSuggestions({inputSuggestions: value})
        break;
      case 'optional-email':
        this.props.updateInputFeedbackEmail({inputFeedbackEmail: value})
        break;
      default:
        break;
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const dataToSend = {
      overall: this.props.overallRating,
      easeOfUse: this.props.easeOfUseRating,
      helpfulness: this.props.helpfulnessRating,
      likeMost: this.props.inputMostLike,
      likeLeast: this.props.inputLeastLike,
      suggestions: this.props.inputSuggestions,
      email: this.props.inputFeedbackEmail
    }
    axios.post('/mail/feedback', dataToSend)
      .then(() => {
        if (!this.state.wasFormSubmitted) {
          this.setState({wasFormSubmitted: true})
        }
      })
      .catch((err) => console.error(err))
  }
  render() {
    return (
    <section className="big-card feedback-page">
      <StarRating rxAction={this.props.updateOverallRating} starsSubmitted={this.props.overallRating} stateKey={'overallRating'}>1) Overall Rating:</StarRating>
      <StarRating rxAction={this.props.updateEaseOfUseRating} starsSubmitted={this.props.easeOfUseRating} stateKey={'easeOfUseRating'}>2) Ease of Use:</StarRating>
      <StarRating rxAction={this.props.updateHelpfulness} starsSubmitted={this.props.helpfulnessRating} stateKey={'helpfulnessRating'}>3) Helpfulness:</StarRating>
      <div className="feedback-input">
        <p className="instructions">4) What do you like the most about AccuHemp?</p>
        <textarea className="tab-text-area" onChange={this.handleChange} name="like-most" rows="10" cols="50"/>
      </div>
      <div className="feedback-input">
        <p className="instructions">5) What do you like the least about AccuHemp?</p>
        <textarea className="tab-text-area" onChange={this.handleChange} name="like-least" rows="10" cols="50"/>
      </div>
      <div className="feedback-input">
        <p className="instructions">6) Do you have any suggestions to help us improve?</p>
        <textarea className="tab-text-area" onChange={this.handleChange} name="suggestions" rows="10" cols="50"/>
      </div>
      <div className="feedback-input">
        <p className="instructions">Your Email: (Optional)</p>
        <span className="instructions-help-txt">Please provide us with your email if you would like to receive a response from us.</span>
        <input className="tab-input" onChange={this.handleChange} type="email" name="optional-email"/>
      </div>

      {
        this.props.overallRating && this.props.easeOfUseRating && this.props.helpfulnessRating
        ?
        <div className="tabNav-btns">
          <Button onClick={this.handleSubmit} className="tab-btn">Submit</Button>
        </div>
        :
        ""
      }
    </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.feedback})

export default connect(mapStateToProps, { updateOverallRating, updateEaseOfUseRating, updateHelpfulness, updateInputMostLike, updateInputLeastLike, updateInputSuggestions, updateInputFeedbackEmail })(FeedbackPage)
