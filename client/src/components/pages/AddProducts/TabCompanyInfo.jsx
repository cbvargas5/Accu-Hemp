import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateInputCompanyName, selectInvolvement, updateInputEmail, updateInputWebsite } from '../../../actions/addingProducts'

class TabCompanyInfo extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e) => {
    const { name,value } = e.target
    switch(name) {
      case 'company-name':
        this.props.updateInputCompanyName({inputCompanyName: value})
        return
      case 'company-email':
        this.props.updateInputEmail({inputEmail: value})
        return
      case 'company-website':
        this.props.updateInputWebsite({inputWebsite: value})
        return
      default:
        return
    }
  }
  handleSelection = (e) => {
    const { value } = e.target
    this.props.selectInvolvement({selectedInvolvement: value})
  }
  render() {
    return (
      <section className="tab company-input-tab">
        <div>
          <p className="instructions">What is the name of the CBD Hemp company or brand?*</p>
          <span>Please give us the name seen on your products. If you sell multiple brands, please fill out a separate form for each brands.</span>
          <input onChange={this.handleChange} type="text" name="company-name" id="company-name"/>
        </div>
        <div>
          <p className="instructions">What is the name of the CBD Hemp company or brand?*</p>
          <ul>
            <li>
              <input onClick={this.handleSelection} name="involvement" type="button" value={'Owner'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="involvement" type="button" value={'Employee'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="involvement" type="button" value={'3rd Party Seller'}/>
            </li>
          </ul>
        </div>
        <div>
          <p className="instructions">Your email:*</p>
          <span>We ask this so we have someone to contact if we run into any problems (like missing product data).</span>
          <input onChange={this.handleChange} type="email" name="company-email" id="company-email"/>
        </div>
        <div>
          <p className="instructions">Website:</p>
          <input onChange={this.handleChange} type="url" name="company-website" id="company-website" placeholder="http://"/>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.addingProducts})

export default connect(mapStateToProps, { updateInputCompanyName, selectInvolvement, updateInputEmail, updateInputWebsite })(TabCompanyInfo)
