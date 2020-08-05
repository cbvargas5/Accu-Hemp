import React from 'react'

export default function Option({ text }) {
  return (
    <>
      <li><input type="radio"/>{text}</li>
    </>
  )
}
