import React, { Component } from 'react'
import axios from 'axios';

export default class TabDragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
  }
  handleUpload = (e) => {
    // const uploadedFile = URL.createObjectURL(e.target.files[0])
    const uploadedFile = e.target.files[0]

    console.log(uploadedFile)
    this.setState({file:uploadedFile})
  }
  onFormSubmit = (e) => {
    e.preventDefault()
    const { file } = this.state

    const uploadedLogo = {
      filename: file.name,
      content: '',
      contentType: file.type
    }
    const dataToSend = {
      uploadedLogo: uploadedLogo,
      uploadedProductInfo: file,
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
