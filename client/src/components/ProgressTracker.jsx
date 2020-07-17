import React from 'react'

export default function ProgressTracker(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div className="progressbar-wrapper">
        <h5>{props.currStep} of {props.lastStep}</h5>
        <div className="progressbar">Progress Bar coming soon...</div>
      </div>
    </div>
  )
}
