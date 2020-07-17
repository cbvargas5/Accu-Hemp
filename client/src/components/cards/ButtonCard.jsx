import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonCard(props) {
  return (
    <div className="btn-card">
      <Link to={props.link}>{props.children}<i className={props.icon}></i></Link>
    </div>
  )
}
