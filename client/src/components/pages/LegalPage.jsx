import React from 'react'

import ButtonCard from '../cards/ButtonCard.jsx'


export default function LegalPage() {
  return (
    <section className="legal-page">
      <div className="mini-header">
        <h1>Legal</h1>
      </div>
      <section className="user-agreement-sec">
        <h3>User Agreement:</h3>
        <p><strong>User Agreement that you must read, understand, and agree to in order to use AccuHemp</strong>&trade;</p>
        <ul>
          <li><strong>1)</strong> You must be at least <strong>18 years old</strong> to use AccuHemp&trade;.</li>
          <li><strong>2)</strong> The statements on AccuHemp&trade; have not been evaluated by the Food and Drug Administration (FDA) and are not intended to diagnose, treat, cure or prevent any disease.</li>
          <li><strong>3)</strong> The content on this website/app should not be considered medical advice and we recommend that CBD hemp oil users consult with a medical professional for any medical advice.</li>
          <li><strong>4)</strong> AccuHemp™ is a product of Accugentix LLC, and Accugentix LLC is not responsible or liable for any misuse of content, injury to users, or damages caused by the content on AccuHemp™ and linked external websites.</li>
          <li><strong>5)</strong> Accugentix LLC may earn a small commission when users click on and/or purchase from external websites linked from AccuHemp&trade;.</li>
          <li><strong>6)</strong> AccuHemp™ uses cookies. Our legal Disclaimers, Privacy Policy, Terms of Use, and Cookie Policy can all be found under the “Legal” tab on the website.</li>
        </ul>
      </section>
      <section className="legal-redirect">
        <ul>
          <li><ButtonCard link="https://app.termly.io/document/disclaimer/57d4870b-9e3e-4dc1-a71b-969d1411d709" icon="fas fa-exclamation-triangle" externalLink={true}>Full Disclaimers</ButtonCard></li>
          <li><ButtonCard link="https://app.termly.io/document/terms-of-use-for-website/296c10a3-c26e-4a2f-b8fb-fe713ffac331" icon="fas fa-clipboard-check" externalLink={true}>Terms of Use</ButtonCard></li>
          <li><ButtonCard link="https://app.termly.io/document/privacy-policy/bcb4e723-f231-4c69-a153-30f8eb337d1a" icon="fas fa-address-card" externalLink={true}>Privacy Policy</ButtonCard></li>
          <li><ButtonCard link="https://app.termly.io/document/cookie-policy/733f7539-e2fd-4876-8e35-b7010c2bd0c8" icon="fas fa-cookie-bite" externalLink={true}>Cookie Policy</ButtonCard></li>
        </ul>
      </section>
      <p><strong>Note:</strong> The brands advertised on Accu-Hemp.com, their logos, and their products are not owned by Accugentix LLC, they are owned by their respective companies.</p>
    </section>
  )
}