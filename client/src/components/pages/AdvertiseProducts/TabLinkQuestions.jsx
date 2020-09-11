import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateInputShopWebsite, updateInputQualityLink, selectAffiliateStatus } from '../../../actions/advertising'

class TabLinkQuestions extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e) => {
    const { name, value } = e.target
    switch(name) {
      case 'company-shop-url':
          this.props.updateInputShopWebsite({inputShopWebsite: value})
        return
      case 'quality-results-link':
        this.props.updateInputQualityLink({inputQualityLink: value})
        return
      default:
        return
    }
  }
  handleSelection = (e) => {
    const { value } = e.target
    this.props.selectAffiliateStatus({selectAffiliateStatus: value})
  }
  render() {
    return (
      <section className="tab link-questions-tab">
        <div>
          <p className="instructions">Website for Store/Shop:*</p>
          <input onChange={this.handleChange} type="url" name="company-shop-url" id="company-shop-url" placeholder="http://"/>
        </div>
        <div>
          <p className="instructions">Website:</p>
          <span>Why do we require this? We believe that CBD Hemp companies should be transparent about what is really in their products. We would like to ensure that our users are using safe products and are not being scammed or misled.</span>
          <input onChange={this.handleChange} type="url" name="quality-results-link" id="quality-results-link" placeholder="http://"/>
        </div>
        <div>
          <p className="instructions">Do you have an Affiliate Program we can join?*</p>
          <ul>
            <li>
              <input onClick={this.handleSelection} name="affiliate-status" type="button" value={'Yes'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="affiliate-status" type="button" value={'No, we would like to work out an advertising partnership.'}/>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.advertising})

export default connect(mapStateToProps, { updateInputShopWebsite, updateInputQualityLink, selectAffiliateStatus })(TabLinkQuestions)
