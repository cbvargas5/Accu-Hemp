import React from 'react';
import Homepage from './pages/Homepage.jsx';
import DosePage from './pages/DosePage.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import FeatureNav from './FeatureNav.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
   return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <FeatureNav />
          <section className="homepage-mid-sec underline-sec">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/dose" exact component={DosePage} />
            </Switch>
          </section>
        </BrowserRouter>
      </main>
      <Footer />

    </>
    )
  }
}

export default App;