import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/index';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { getDoses } from './actions/dose'
import { setAgreement } from './actions/index'
window.store = store
window.getDoses = getDoses
window.setAgreement = setAgreement


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))