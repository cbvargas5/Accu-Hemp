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
  }
  render() {
    return (
      <div>
        Drag and Drop
        <form onSubmit={this.onFormSubmit}>
          <h1>File Upload(TEST)</h1>
          <input type="file" onChange={this.handleUpload} />
          <button type="submit">Upload</button>
      </form>
      </div>
    )
  }
}
