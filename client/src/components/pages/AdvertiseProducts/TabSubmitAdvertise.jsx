import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAffiliateLink, updateInputBrandDesc } from '../../../actions/advertising'
import { Button } from 'react-bootstrap'
import axios from 'axios'

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
  handleSubmit = (e) => {
    e.preventDefault()
    const dataToSend = {
      companyName: this.props.inputCompanyName,
      involvement: this.props.selectedInvolvement,
      fullName: `${this.props.inputFirstName} ${this.props.inputLastName}`,
      email: this.props.inputEmail,
      phone: this.props.inputPhone,
      linkForStore: this.props.inputShopWebsite,
      qualityTestLink: this.props.inputQualityLink,
      affiliateStatus: this.props.selectAffiliateStatus,
      linkToAffiliateProgram: this.props.inputAffiliateAppLink,
      brandDescription: this.props.inputBrandDesc
    }
    axios.post('/api/mail/advertising', dataToSend)
      .then(() => {
        // insert form submit boolean
      })
      .catch((err) => console.error(err))
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
        {
          true
          ?
          <Button onClick={this.handleSubmit} type="submit">Send</Button>
          :
          ""
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.advertising})

export default connect(mapStateToProps, { updateAffiliateLink, updateInputBrandDesc })(TabSubmitAdvertise)

