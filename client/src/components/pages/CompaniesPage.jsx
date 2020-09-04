import React from 'react'
import ButtonCard from '../cards/ButtonCard.jsx'

export default function CompaniesPage() {
  return (
    <section className="companies-page">
      <section className="mini-header">
        <h1>Company Partnerships</h1>
      </section>
      <section className="basic-requirements underline-sec">
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
      <section className="option-1 underline-sec">
        <h2><strong>Option 1:</strong> Add Products to our Measurement Quiz</h2>

      </section>
      <section className="option-2 underline-sec">
        <h2><strong>Option 2:</strong> We Recommend Your Products</h2>

      </section>
      <section className="right-to-deny underline-sec">
        <h3>We have the right to deny or remove a brand from our website if:</h3>
        <ul>
          <li>1) Requirements are not met.</li>
          <li>2) If a person’s identity, company information, or product information is intentionally falsified.</li>
          <li>3) If we find any products submitted to our site contain more than 0.3% THC.</li>
          <li>4) If an advertising partnership deal is made and not followed through with.</li>
          <li>5) For any unforeseen circumstances.</li>
        </ul>
      </section>
    </section>
  )
}
