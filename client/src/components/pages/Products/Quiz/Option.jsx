import React from 'react'

export default function Option({ children, handleSelection, active }) {
  return (
    <>
      <li><input className={active} onClick={handleSelection} type="button" value={children}/></li>
    </>
  )
}
