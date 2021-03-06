import React from 'react'
import ButtonCard from '../cards/ButtonCard.jsx'
import { useEffect } from 'react'

import { Accordion, Card } from 'react-bootstrap'


export default function HelpPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="help-page">
      <section className="mini-header">
        <h1>Help</h1>
      </section>
      <section className="accordion-sec underline-sec">
        <div>
          <h2>Frequently Asked Questions</h2>
        </div>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <p>What is CBD Hemp Oil?</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><p>CBD Hemp Oil is extracted from the hemp plant and is typically sold as tinctures, oil, vape liquid, and liquid capsules.</p></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <p>What is the difference between Hemp Oil, CBD Hemp Oil, and CBD Oil?</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p><strong>Hemp Oil:</strong> Products with the name “Hemp Oil” are extracted from the hemp plant (seeds), but usually do not contain any CBD. If you are looking to purchase CBD be extra cautious when buying products that only use the term “Hemp”. Make sure that somewhere on the product it mentions CBD, phytocannabinoids, or cannabidiol. If it does not, it may just be oil from the Hemp plant, which may have its own benefits depending on what you’re looking for.</p>
                <br/>
                <p><strong>CBD Hemp Oil:</strong> This means the product contains CBD extracted from the Hemp plant. With the name CBD Hemp oil, it specifies that the CBD oil is from the Hemp plant, not the marijuana plant. This is the legal/technical term of CBD oil that is federally legal in the U.S.</p>
                <br/>
                <p><strong>CBD Oil:</strong> Using the name “CBD oil” is ambiguous. CBD oil can refer to CBD extracted from either the Hemp plant or the Marijuana plant. Some CBD oil products are restricted to state lines because it is sourced from Marijuana with over 0.3% psychoactive material (THC). However, most of the time when people talk about CBD oil they are referring to CBD Hemp oil that is extracted from legal Hemp.</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              <p>What does it mean if CBD Hemp Oil is Isolate, Broad Spectrum, or Full Spectrum?</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p><strong>Isolate</strong> is CBD oil that only contains CBD from the hemp plant. During the extraction process CBD is isolated from the rest of the cannabiniods and terpenes.</p>
                <br/>
                <p><strong>Broad Spectrum</strong> is CBD oil that contains CBD and terpenes from the Hemp plant. Sometimes Hemp contains a small amount of the psychoactive cannabinoid THC (less than 0.3%). In Broad Spectrum products you will not find traces of THC, which is especially important when it comes to drug testing for work/sports.</p>
                <br/>
                <p><strong>Full Spectrum</strong> is CBD oil that contains CBD, terpenes, and possibly a small amount of THC from the Hemp plant. Hemp contains less than 0.3% of the psychoactive cannabinoid THC. In Full Spectrum products, it is possible that your product will contain small amounts of THC.</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              <p>What are Terpenes?</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <p>Terpenes are compounds found in many plants, and they give plants their distinct aromas. Some perpenes are anti-microbial and research has shown that some may have health benefits. Terpenes can be found in essential oils, which can be medicinally used through aroma therapy, topical use, and ingestion.</p>
                <br/>
                <p><strong>Terpenes in Cannabis/Hemp:</strong> There are over 200 terpenes in cannabis, including Limonene (also found in citrus and fruit peels) and Linalool (also found in lavender). Different strains of cannabis have different terpene profiles. Some research has shown that terpenes help to determine how  cannabinoids like CBD and THC effect our bodies. They can amplify or dampen their effects, and  it does this by binding to cannabinoid receptors. It is not the aroma from terpenes that cause this effect, it is their biochemical pathways with cannabiniods that cause this. This effect is called the “Entourage Effect”.</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              <p>Can I fail a drug test from taking CBD Hemp Oil?</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body><p>Drug tests typically look for THC in your system, not CBD. Since marijuana contains both THC and CBD, it is possible that some tests check for both. If you are using a Full Spectrum product with small amounts of THC, it is possible for them to find it in a drug test if you are using a high dose of Full Spectrum CBD on a regular basis.</p></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              <p>Why is there a serving size on my product, and should I follow it?</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body><p>CBD Hemp oil is considered a dietary supplement by the FDA. Legally, all food products and dietary supplements must have serving sizes and supplement facts. The serving size on the product is only a legal formality that companies have to follow, and is not a strict requirement for you. The serving size is just a single generic dose, but what you really should taking depends on what you are using CBD for and how much you weigh. What if your doctor recommends you take 10 mg of CBD a day, but the product you bought has a serving size of 50 mg of CBD? Listen to what your doctor recommends and do not follow the serving size on the product.</p></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
              <p>What is AccuHemp and how can it help me?</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body><p>AccuHemp by Accugentix™ is a website that helps simplify the process of buying and using CBD Hemp Oil. We guide you through every step. We can help you estimate your dose of CBD, recommend products to you based on your dose, and help you calculate how to measure your dose with a dropper or syringe. We are not medical professionals and the statements on our website should not be considered medical advice. We recommend that you speak with a healthcare professional regarding the use of CBD hemp oil. If you already have a dose recommended by your doctor, you can still use our Product Finder quiz and Measurement quiz. If you already know your dose, please take our Dose Survey so we can collect data to improve our Dose Estimator quiz.</p></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7">
              <p>I sell CBD hemp oil products, how do I get my products added to the AccuHemp website?</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                <p>Currently there are two options:</p>
                <br/>
                <p><strong>1)</strong> We can add your products to our Measurement quiz.</p>
                <br/>
                <p><strong>2)</strong> We advertise/recommend your products in our Product Finder quiz and/or blog. Please go to the Companies page to learn more and apply.</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </section>
      <section className="redirect">
        <h3>Have any other questions?</h3>
        <ButtonCard link="/contact" icon="fas fa-comment-dots">Contact Us</ButtonCard>
      </section>
    </section>
  )
}
