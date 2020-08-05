import React from 'react'

export default function Option({ children }) {
  return (
    <>
      <li><input type="radio"/>{children}</li>
    </>
  )
}
