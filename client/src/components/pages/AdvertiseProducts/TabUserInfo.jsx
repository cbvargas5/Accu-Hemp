import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateInputCompanyName, selectInvolvement, updateInputFirstName, updateInputLastName, updateInputEmail, updateInputPhone } from '../../../actions/advertising'

class TabUserInfo extends Component {
  constructor(props) {
    super(props)
  }
  handleChange = (e) => {
    const { name, value } = e.target
    switch(name) {
        case 'company-name':
          this.props.updateInputCompanyName({inputCompanyName: value})
        return
      case 'first-name':
        this.props.updateInputFirstName({inputFirstName: value})
        return
      case 'last-name':
        this.props.updateInputLastName({inputLastName: value})
        return
      case 'user-email':
        this.props.updateInputEmail({inputEmail: value})
        return
      case 'other medications explanation':
        this.props.updateOtherMedicationInput({otherMedicationInput: value})
        return
      case 'user-phone':
        this.props.updateInputPhone({inputPhone: value})
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
      <section className="tab user-info-tab">
        <div>
          <p className="instructions">What is the name of the CBD Hemp company or brand?*</p>
          <span>If you sell multiple brands, please fill out a separate form for each brand.</span>
          <input onChange={this.handleChange} type="text" name="company-name" id="company-name"/>
        </div>
        <div>
          <p className="instructions">How are you involved with this company/brand?*</p>
          <ul>
            <li>
              <input onClick={this.handleSelection} name="professional" type="button" value={'Owner'}/>
            </li>
            <li>
              <input onClick={this.handleSelection} name="professional" type="button" value={'Employee'}/>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <p className="instructions">Name*</p>
            <label htmlFor="first-name">
              <input onChange={this.handleChange} type="text" name="first-name" id="first-name"/>
            </label>
            <label htmlFor="last-name">
              <input onChange={this.handleChange} type="text" name="last-name" id="last-name"/>
            </label>
          </div>
          <div>
            <p className="instructions">Your email:*</p>
            <label htmlFor="user-email">
              <input onChange={this.handleChange} type="text" name="user-email" id="user-email"/>
            </label>
          </div>
          <div>
            <p className="instructions">Phone</p>
            <label htmlFor="user-phone">
              <input onChange={this.handleChange} type="tel" name="user-phone" id="user-phone"/>
            </label>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({...state.advertising})

export default connect(mapStateToProps, { updateInputCompanyName, selectInvolvement, updateInputFirstName, updateInputLastName, updateInputEmail, updateInputPhone })(TabUserInfo)

// // To debug this code, open wixDefaultCustomElement.js in Developer Tools.

// const IMAGE_URL = 'https://static.wixstatic.com/media/e61a71_13b4ffde0d45481fa2e869ecde1140ba~mv2.png';
// const H4_TEXT = 'Lorem ipsum one dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

// const DEBUG_TEXT = 'Loading the code for Custom Element \'wix-default-custom-element\'. To debug this code, open wixDefaultCustomElement.js in Developer Tools.';

// const createImage = () => {
// 	const imageElement = document.createElement('img');
// 	imageElement.src = IMAGE_URL;
// 	imageElement.id = 'img-one';
// 	return imageElement;
// };

// const createH4 = () => {
// 	const h4Element = document.createElement('p');
// 	h4Element.textContent = H4_TEXT;
// 	h4Element.id = 'h4-one';
// 	return h4Element;
// };

// const createTextContainer = () => {
// 	const textContainer = document.createElement('div');
// 	textContainer.id = 'flip-card-back-one';
// 	textContainer.appendChild(createH4());
// 	return textContainer;
// };

// const createImageContainer = () => {
// 	const imageContainer = document.createElement('div');
// 	imageContainer.id = 'flip-card-front-one';
// 	imageContainer.appendChild(createImage());
// 	return imageContainer;
// };

// const createInnerContainer = () => {
//     const innerContainer = document.createElement('div');
//     innerContainer.id = 'flip-card-inner-one';
//     innerContainer.appendChild(createImageContainer());
//     innerContainer.appendChild(createTextContainer());
//     return innerContainer;
// }

// const createParentContainer = () => {
//     const parentContainer = document.createElement('div');
//     parentContainer.id = 'flip-card-one';
//     parentContainer.appendChild(createInnerContainer());
//     return parentContainer;
// }

// const createStyle = () => {
// 	const styleElement = document.createElement('style');
// 	styleElement.innerHTML = `
// #flip-card-one {
//   background-color: transparent;
//   height: 380px;
//   border: 1px solid #f1f1f1;
//   perspective: 1000px;
// }

// #flip-card-inner-one {
//   position: relative;
//   width: 100%;
//   height: 100%;
//   text-align: center;
//   transition: transform 0.2s;
//   transform-style: preserve-3d;
//   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
// }

// #flip-card-one:hover #flip-card-inner-one {
//   transform: rotateY(180deg);
// }

// #flip-card-front-one, #flip-card-back-one {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   -webkit-backface-visibility: hidden; /* Safari */
//   backface-visibility: hidden;
// }

// #flip-card-front-one {
//   background-color: #bbb;
//   color: black;
// }

// #flip-card-front-one img {
//   width: 100%;
//   height: 100%;
// }

// #h4-one {
//   padding: 0 20px;
//   display: block;
// }

// #flip-card-back-one {
//   background-color: #006073;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   font-size: 6vw;
//   transform: rotateY(180deg);
// }
//     `;
// 	return styleElement;
// };

// class WixDefaultCustomElement extends HTMLElement {
// 	constructor() {
// 		super();
// 		console.log(DEBUG_TEXT);
// 	}

// 	connectedCallback() {
// 		this.appendChild(createStyle());
// 		this.appendChild(createParentContainer());
// 	}
// }
// customElements.define('wix-default-custom-element', WixDefaultCustomElement);
