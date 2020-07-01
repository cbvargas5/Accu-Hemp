import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/index';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <h1>Hello from REACT</h1>
  </Provider>, document.getElementById('root'))