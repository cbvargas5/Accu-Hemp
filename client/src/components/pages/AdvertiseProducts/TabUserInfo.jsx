import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateInputCompanyName, selectInvolvement, updateInputFirstName, updateInputLastName, updateInputEmail, updateInputPhone } from '../../../actions/advertising'

class TabUserInfo extends Component {
  render() {
    return (
      <section className="tab user-info-tab">
        User Info:
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.advertising})

export default connect(mapStateToProps, { updateInputCompanyName, selectInvolvement, updateInputFirstName, updateInputLastName, updateInputEmail, updateInputPhone })(TabUserInfo)
