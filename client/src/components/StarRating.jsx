import React, { Component } from 'react'

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
      <div className="write-rating-container">
        <div>
          <span className="required-field">{this.props.children}</span>
        </div>
        <div className='write-stars-container'>
          <div className='write-star' onClick={(() => this.submitStars(1))} onMouseEnter={(() => this.handleStars(1))} onMouseLeave={(() => this.handleStars(0))}>
            {(this.state.stars || this.props.starsSubmitted) >= 1 ? <div className="star-black-filled"> </div > : <div className="star-grey-filled" />}
          </div>
          <div className='write-star' onClick={(() => this.submitStars(2))} onMouseEnter={(() => this.handleStars(2))} onMouseLeave={(() => this.handleStars(0))}>
            {(this.state.stars || this.props.starsSubmitted) >= 2 ? <div className="star-black-filled"> </div > : <div className="star-grey-filled" />}
          </div>
          <div className='write-star' onClick={(() => this.submitStars(3))} onMouseEnter={(() => this.handleStars(3))} onMouseLeave={(() => this.handleStars(0))}>
            {(this.state.stars || this.props.starsSubmitted) >= 3 ? <div className="star-black-filled"> </div > : <div className="star-grey-filled" />}
          </div>
          <div className='write-star' onClick={(() => this.submitStars(4))} onMouseEnter={(() => this.handleStars(4))} onMouseLeave={(() => this.handleStars(0))}>
            {(this.state.stars || this.props.starsSubmitted) >= 4 ? <div className="star-black-filled"> </div > : <div className="star-grey-filled" />}
          </div>
          <div className='write-star' onClick={(() => this.submitStars(5))} onMouseEnter={(() => this.handleStars(5))} onMouseLeave={(() => this.handleStars(0))}>
            {(this.state.stars || this.props.starsSubmitted) >= 5 ? <div className="star-black-filled"> </div > : <div className="star-grey-filled" />}
          </div>
        </div>
      </div>
    </div>
    )
  }
}
