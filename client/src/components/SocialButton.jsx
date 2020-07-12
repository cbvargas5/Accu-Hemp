import React from 'react'

export default function SocialButton(props) {
  return (
    <a className="social-btn" href={props.link} target="_blank">
      <i className={props.icon}></i>
    </a>
  )
}
