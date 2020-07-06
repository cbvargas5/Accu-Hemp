import React from 'react'

export default function SocialButton(props) {
  return (
    <div className="social-btn">
      <a href={props.link} target="_blank">
        <i className={props.icon}></i>
      </a>
    </div>
  )
}
