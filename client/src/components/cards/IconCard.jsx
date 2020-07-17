import React from 'react'
import { Link } from 'react-router-dom';

export default function IconCard(props) {
  return (
    <div className="icon-card">
      <h3>Step {props.step}</h3>
      <div className="icon-card-container">
        <div className="icon-card-wrapper">
          <div className="icon-card-icon-parent">
            <Link to={props.title}><i className={props.icon}></i></Link>
          </div>
          <div className="icon-card-txt-parent">
            <h4><Link to={props.title}>{props.title}</Link></h4>
            <p>{props.children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
