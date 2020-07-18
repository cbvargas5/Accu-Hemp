import React from 'react';
import Homepage from './pages/Homepage.jsx';
import DosePage from './pages/DosePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import MeasurePage from './pages/MeasurePage.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import FeatureNav from './FeatureNav.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Estimator from './pages/Dose/Estimator/Estimator.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
   return (
    <>
      <BrowserRouter>
      <Header />
      <main>
          <FeatureNav />
          <section className="homepage-mid-sec underline-sec">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/dose" exact component={DosePage} />
              <Route path="/dose/estimator" exact component={Estimator} />
              <Route path="/products" exact component={ProductsPage} />
              <Route path="/measure" exact component={MeasurePage} />
            </Switch>
          </section>
      </main>
      <Footer />
      </BrowserRouter>

    </>
    )
  }
}

export default App;