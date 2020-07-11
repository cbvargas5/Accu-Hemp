import React from 'react'

export default function IconCard(props) {
  return (
    <div className="icon-card">
      <h3>Step {props.step}</h3>
      <div className="icon-card-container">
        <div className="icon-card-wrapper">
          <div className="icon-card-icon-parent">
            <a href="#">
              <i className={props.icon}></i>
            </a>
          </div>
          <div className="icon-card-txt-parent">
            <h4>{props.title}</h4>
            <p>{props.children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
