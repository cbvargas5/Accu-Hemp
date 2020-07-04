import React from 'react';
import Header from './Header.jsx';
import FeatureNav from './FeatureNav.jsx';
import Footer from './Footer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
   return (
    <div>
      <Header />
      <FeatureNav />
      <main>

      </main>
      <Footer />
    </div>
    )
  }
}

export default App;