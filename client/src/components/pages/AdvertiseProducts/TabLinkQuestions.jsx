import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateInputShopWebsite, updateInputQualityLink, selectAffiliateStatus } from '../../../actions/advertising'

class TabLinkQuestions extends Component {
  render() {
    return (
      <section>
        Link Qs
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.advertising})

export default connect(mapStateToProps, { updateInputShopWebsite, updateInputQualityLink, selectAffiliateStatus })(TabLinkQuestions)
