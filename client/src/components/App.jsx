import React from 'react';
import Header from './Header.jsx';
import FeatureNav from './FeatureNav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
   return (
    <div>
      <Header />
      <FeatureNav />
    </div>
    )
  }
}

export default App;