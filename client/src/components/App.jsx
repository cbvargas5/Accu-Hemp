import React from 'react';
import Homepage from './pages/Homepage.jsx';
import DosePage from './pages/DosePage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
   return (
      // <Homepage />
      <DosePage />
    )
  }
}

export default App;