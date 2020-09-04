import React from 'react'
import ButtonCard from '../cards/ButtonCard.jsx'

export default function CompaniesPage() {
  return (
    <section className="companies-page">
      <section className="mini-header">
        <h1>Company Partnerships</h1>
      </section>
      <section className="option-1  underline-sec">
        <h3>Basic Requirements:</h3>
        <ul>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>Be a legitimate company</span>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>Have products containing CBD from legal hemp</span>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <span>Have products in dropper bottles or syringes</span>
          </li>
        </ul>
      </section>
      <section className="option-2 underline-sec">

      </section>
      <section className="right-to-deny underline-sec">

      </section>
    </section>
  )
}
