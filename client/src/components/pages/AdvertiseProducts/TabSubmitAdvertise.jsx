import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAffiliateLink, updateInputBrandDesc } from '../../../actions/advertising'

class TabSubmitAdvertise extends Component {
  render() {
    return (
      <section>
        Submit!
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.advertising})

export default connect(mapStateToProps, { updateAffiliateLink, updateInputBrandDesc })(TabSubmitAdvertise)

