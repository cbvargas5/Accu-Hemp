import React, { Component } from 'react'
import Header from '../Header.jsx'
import FeatureNav from '../FeatureNav.jsx'
import Footer from '../Footer.jsx'

export default class DosePage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <main>
        <FeatureNav />
        <div className="">

        </div>
        </main>
        <Footer />
      </div>
    )
  }
}
