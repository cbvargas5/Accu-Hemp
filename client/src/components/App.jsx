import React from 'react';
import Homepage from './pages/Homepage.jsx';
import DosePage from './pages/DosePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import MeasurePage from './pages/MeasurePage.jsx';
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
    {/* Wrap whole thing in Router */}
      <Header />
      <main>
        <BrowserRouter>
          <FeatureNav />
          <section className="homepage-mid-sec underline-sec">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/dose" exact component={DosePage} />
              <Route path="/products" exact component={ProductsPage} />
              <Route path="/measure" exact component={MeasurePage} />
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