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
        <div className="requirements-list">
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
        </div>
      </section>
      <section className="option-1 underline-sec">
        <h2><strong>Option 1:</strong> Add Products to our Measurement Quiz</h2>
        <p>Currently it is free to add your products to our Measurement quiz! Just fill out this form and attach a document or excel sheet with the product information.</p>
        <ButtonCard link="/add-products" icon="fas fa-plus">Add Products</ButtonCard>
      </section>
      <section className="option-2 underline-sec">
        <h2><strong>Option 2:</strong> We Recommend Your Products</h2>
        <p>For Option 2 we would recommend your products through our Product Finder quiz and/or our Blog. For us to recommend your products on our site, we ask for a few additional requirements:</p>
        <div className="option-2-list">
          <ul>
            <li>
              <i className="fas fa-laptop"></i>
              <span>An online store we can refer customers to.</span>
            </li>
            <li>
              <i className="fas fa-flask"></i>
              <span>Quality testing with results easily accessible on your website.</span>
            </li>
            <li>
              <i className="fas fa-dollar-sign"></i>
              <span>Affiliate Program we can join.</span>
            </li>
            <li>
              <i className="fas fa-handshake"></i>
              <span>No Affiliate Program? We can work out an advertising partnership!</span>
            </li>
            <li>
              <i className="fas fa-clipboard-list"></i>
              <span>Fill out a quick application describing your brand and products.</span>
            </li>
          </ul>
        </div>
        <ButtonCard link="/advertise-products" icon="fas fa-bullhorn">Advertise Products</ButtonCard>
      </section>
      <section className="right-to-deny">
        <h3>We have the right to deny or remove a brand from our website if:</h3>
        <div className="right-to-deny-list">
          <ul>
            <li>1) Requirements are not met.</li>
            <li>2) If a person’s identity, company information, or product information is intentionally falsified.</li>
            <li>3) If we find any products submitted to our site contain more than 0.3% THC.</li>
            <li>4) If an advertising partnership deal is made and not followed through with.</li>
            <li>5) For any unforeseen circumstances.</li>
          </ul>
        </div>
      </section>
    </section>
  )
}
