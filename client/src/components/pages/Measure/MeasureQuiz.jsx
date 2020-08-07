import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom';

export class MeasureQuiz extends Component {
  constructor(props) {
    super(props)

  }  
  render() {
    const { url: URL } = this.props.match
    return (
      <section className="quiz-wrapper big-card">
        <Link to={`${URL}/1`}>Device</Link>
        <Link to={`${URL}/2`}>Brand</Link>
        <Link to={`${URL}/3`}>Product</Link>
        <Link to={`${URL}/4`}>Dose</Link>
        <Link to={`${URL}/5`}>Results</Link>
        {/* <ProgressTracker title="Product Quiz" currStep={this.props.step} lastStep={4}/> */}
        <Switch>
          <Route path={`${URL}/1`} exact component={TabDose}/>
          <Route path={`${URL}/2`} exact component={TabImportance}/>
          <Route path={`${URL}/3`} exact component={TabQualities}/>
          <Route path={`${URL}/4`} exact component={TabQuizResults}/>
          <Route path={`${URL}/5`} exact component={TabQuizResults}/>
        </Switch>
        {/* <div className="tabNav-btns">
          <Button onClick={this.onPrevious} className="tab-btn">Back</Button>
          <Button onClick={this.onNext} className="tab-btn">Next</Button>
        </div> */}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MeasureQuiz)
