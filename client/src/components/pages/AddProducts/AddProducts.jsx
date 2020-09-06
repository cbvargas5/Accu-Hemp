import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom';
import ProgressTracker from '../../ProgressTracker.jsx'
import { updateAddingProductsSteps } from '../../../actions/addingProducts'

class AddProducts extends Component {
  constructor(props) {
    super(props)

  }
  // componentDidMount() {
  //   this.props.history.push(`${this.props.match.url}/${this.props.step}`)
  // }
  // onNext = () => {
  //   const { step } = this.props
  //   if (step < 3) {
  //     this.props.updateSteps({step: step + 1})
  //     this.props.history.push(`${this.props.match.url}/${step + 1}`)
  //   }

  // }
  // onPrevious = () => {
  //   const { step } = this.props
  //   if (step <= 0) {
  //     this.props.updateSteps({step: 1})
  //     this.props.history.push(`${this.props.match.url}/${1}`)
  //   } else if (step === 1) {
  //     this.props.history.push(`/Dose`)
  //   } else {
  //     this.props.updateSteps({step: step - 1})
  //     this.props.history.push(`${this.props.match.url}/${step - 1}`)
  //   }
  // }
  
  render() {
    const { url: URL } = this.props.match
    const { step } = this.props 
    return (
      <section className="add-products-wrapper big-card">
        <ProgressTracker title="Add Products to AccuHemp Measurement Quiz" currStep={step} lastStep={2}/>
        {/* <Switch>
          <Route path={`${URL}/1`} exact component={TabCondition} />
          <Route path={`${URL}/2`} exact component={TabSeverity} />
          <Route path={`${URL}/3`} exact component={TabResults} />
        </Switch>
        <div className="tabNav-btns">
          <Button onClick={this.onPrevious} className="tab-btn">Back</Button>
          <Button onClick={this.onNext} className="tab-btn">Next</Button>
        </div> */}
      </section>
    )
  }
}


const mapStateToProps = (state) => ({ ...state.addingProducts })

export default connect(mapStateToProps, { updateAddingProductsSteps })(AddProducts)

