module.exports = ({ brand, product, measurement, dose }) => {
    return `
  <!DOCTYPE html>
  <html style="margin: 0; padding: 0;">
    <head>
        <title>Accu-Hemp Estimator Results</title>
    </head>

    <body style="margin: 0; padding: 0;">
    <section class="result">
      <h2>Your estimated measurement is ${measurement}</h2>
      <br/>
      <p>For ${brand} ${product} you would need approximately ${measurement} to measure ${dose} mg of CBD.</p>
      <br/>
      <p className="result-note"><strong>Please note:</strong> This measurement is just an approximation. The exact number of drops depends on the size of your dropper and how accurate the product's labeling is. We advise you to speak with a healthcare professional regarding your use of CBD hemp oil. This calculator is only meant to be a general guide, and should not be considered medical advice. These statements have not been evaluated by the Food and Drug Administration (FDA) and are not intended to diagnose, treat, cure or prevent any disease. Please consult with a medical professional for any medical advice.</p>
    </section>
    </section>
    </body>
  </html>
  `;
};
// brand, product, measurement, email, selected dose