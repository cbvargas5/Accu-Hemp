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
        <FeatureNav />
        <section className="homepage-mid-sec underline-sec">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/dose" exact component={DosePage} />
            </Switch>
          </BrowserRouter>
        {/* <Homepage /> */}
        {/* <DosePage /> */}
        </section>
      </main>
      <Footer />

    </>
    )
  }
}

export default App;