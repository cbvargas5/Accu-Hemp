import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAffiliateLink, updateInputBrandDesc } from '../../../actions/advertising'

class TabSubmitAdvertise extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e) => {
    const { name, value } = e.target
    switch(name) {
      case 'affiliate-program-app':
          this.props.updateAffiliateLink({inputAffiliateAppLink: value})
        return
      case 'brand-description':
        this.props.updateInputBrandDesc({inputBrandDesc: value})
        return
      default:
        return
    }
  }
  render() {
    return (
      <section className="tab link-questions-tab">
        <div>
          <p className="instructions">Website for your Affiliate Program application:</p>
          <input onChange={this.handleChange} type="url" name="affiliate-program-app" id="affiliate-program-app" placeholder="http://"/>
        </div>
        <div>
          <p className="instructions">Pleae tell us a little about your brand and your products:*</p>
          <textarea onChange={this.handleChange} type="text" name="brand-description" id="brand-description" placeholder="For example: How long have you been in business? Where do you source your products? Any certifications? Special features? etc."/>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.advertising})

export default connect(mapStateToProps, { updateAffiliateLink, updateInputBrandDesc })(TabSubmitAdvertise)

