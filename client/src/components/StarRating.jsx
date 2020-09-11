import React, { Component } from 'react'
/**
 * Props: appropriate action, appropriate state key name for action, Section title, tection number
 * Ideas: tmp star can exist in it's own state;
 */
export default class StarRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stars: '',
    }
  }

  submitStars(num) {
    this.props.rxAction({[this.props.stateKey]: num})
  }
  handleStars(num) {
    this.setState({
      stars: num
    })
  }
  render() {
    return (
    <div className="star-rating-system">
      <div className="write-rating-container-jr">
        <div>
          <span>{this.props.children}</span>
          <span className="write-red-asterix-jr"> *</span>
        </div>
        <div className='write-stars-container'>
          <div className='write-star-jr' onClick={(() => this.submitStars(1))} onMouseEnter={(() => this.handleStars(1))} onMouseLeave={(() => this.handleStars(0))}>
            {(this.state.stars || this.props.starsSubmitted) >= 1 ? <div className="star-black-filled-jr"> </div > : <div className="star-grey-filled-jr" />}
          </div>
          <div className='write-star-jr' onClick={(() => this.submitStars(2))} onMouseEnter={(() => this.handleStars(2))} onMouseLeave={(() => this.handleStars(0))}>
            {(this.state.stars || this.props.starsSubmitted) >= 2 ? <div className="star-black-filled-jr"> </div > : <div className="star-grey-filled-jr" />}
          </div>
          <div className='write-star-jr' onClick={(() => this.submitStars(3))} onMouseEnter={(() => this.handleStars(3))} onMouseLeave={(() => this.handleStars(0))}>
            {(this.state.stars || this.props.starsSubmitted) >= 3 ? <div className="star-black-filled-jr"> </div > : <div className="star-grey-filled-jr" />}
          </div>
          <div className='write-star-jr' onClick={(() => this.submitStars(4))} onMouseEnter={(() => this.handleStars(4))} onMouseLeave={(() => this.handleStars(0))}>
            {(this.state.stars || this.props.starsSubmitted) >= 4 ? <div className="star-black-filled-jr"> </div > : <div className="star-grey-filled-jr" />}
          </div>
          <div className='write-star-jr' onClick={(() => this.submitStars(5))} onMouseEnter={(() => this.handleStars(5))} onMouseLeave={(() => this.handleStars(0))}>
            {(this.state.stars || this.props.starsSubmitted) >= 5 ? <div className="star-black-filled-jr"> </div > : <div className="star-grey-filled-jr" />}
          </div>
        </div>
      </div>
    </div>
    )
  }
}
