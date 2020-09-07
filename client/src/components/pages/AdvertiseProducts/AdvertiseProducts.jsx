import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAdvertisingSteps } from '../../../actions/advertising'

class AdvertiseProducts extends Component {
  render() {
    return (
      <section>
        !
      </section>
    )
  }
}

const mapStateToProps = (state) => ({ ...state.advertising })

export default connect(mapStateToProps, { updateAdvertisingSteps })(AdvertiseProducts)

