import React from 'react'

export default function Option({ children, handleSelection }) {
  return (
    <>
      <li><input onClick={handleSelection} type="button" value={children}/></li>
    </>
  )
}
