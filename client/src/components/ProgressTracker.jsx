import React from 'react'
import { ProgressBar } from 'react-bootstrap'


export default function ProgressTracker(props) {
  return (
    <div className="tracker-parent">
      <h2>{props.title}</h2>
      <div className="progressbar-wrapper">
        <h5>Step {props.currStep} of {props.lastStep}</h5>
        <ProgressBar now={props.currStep / props.lastStep * 100}/>
      </div>
    </div>
  )
}
