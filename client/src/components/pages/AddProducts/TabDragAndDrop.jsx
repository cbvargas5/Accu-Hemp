import React, { Component } from 'react'
import Axios from 'axios';

export default class TabDragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
  }
  handleUpload = (e) => {
    console.log(e.target.files[0])
    this.setState({file:e.target.files[0]})
  }
  onFormSubmit = (e) => {
    const dataToSend = {
      uploadedLogo: null,
      uploadedProductInfo: null,
      companyName: '',
      involvement: '',
      email: '',
      website: ''
    }
    axios.post('/mail/addproducts', dataToSend)
  }
  render() {
    return (
      <div>
        Drag and Drop
        <form onSubmit={this.onFormSubmit}>
          <h1>File Upload(TEST)</h1>
          <input type="file" onChange={this.handleUpload} />
          <button type="submit">Send</button>
      </form>
      </div>
    )
  }
}
