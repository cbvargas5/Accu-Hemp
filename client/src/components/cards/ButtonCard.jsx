import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonCard({ link, children, icon, externalLink = false }) {
  if (!externalLink) {
   return (
      <div className="btn-card">
        <Link to={link}>{children}<i className={icon}></i></Link>
      </div>
    )
  } else {
   return (
      <div className="btn-card">
        <a href={link} target="_blank">{children}<i className={icon}></i></a>
      </div>
    )
  }
}
