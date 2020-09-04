import React from 'react';
import Homepage from './pages/Homepage.jsx';
import DosePage from './pages/DosePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import MeasurePage from './pages/MeasurePage.jsx';
import HelpPage from './pages/HelpPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx';
import CompaniesPage from './pages/CompaniesPage.jsx';
import AddProducts from './pages/AddProducts/AddProducts.jsx';
import LegalPage from './pages/LegalPage.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import FeatureNav from './FeatureNav.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Estimator from './pages/Dose/Estimator/Estimator.jsx';
import Survey from './pages/Dose/Survey/Survey.jsx';
import FinderQuiz from './pages/Products/Quiz/FinderQuiz.jsx';
import MeasureQuiz from './pages/Measure/MeasureQuiz.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
   return (
    <>
    {/* React dnd for Drag and Drop */}
    {/* Might change */}
      <BrowserRouter>
      <Header />
      <main>
          <FeatureNav />
          <section className="homepage-mid-sec underline-sec">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/dose" exact component={DosePage} />
              <Route path="/dose/estimator" component={Estimator} />
              <Route path="/dose/survey" component={Survey} />
              <Route path="/products" exact component={ProductsPage} />
              <Route path="/products/finder-quiz" component={FinderQuiz} />
              <Route path="/measure" exact component={MeasurePage} />
              <Route path="/measure/measure-quiz" component={MeasureQuiz} />
              <Route path="/help" exact component={HelpPage} />
              <Route path="/contact" exact component={ContactPage} />
              <Route path="/feedback" exact component={FeedbackPage} />
              <Route path="/companies" exact component={CompaniesPage} />
              <Route path="/add-products" component={AddProducts} />
              {/* <Route path="/companies" exact component={CompaniesPage} /> */}
              <Route path="/legal" exact component={LegalPage} />
              <Route path="/feedback" exact component={LegalPage} />
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