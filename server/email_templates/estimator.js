module.exports = ({ lowerdose, upperdose }) => {

    return `
    <!DOCTYPE html>
    <html style="margin: 0; padding: 0;">
      <head>
          <title>Accu-Hemp Estimator Results</title>
      </head>

      <body style="margin: 0; padding: 0;">
      <section class="result">
        <h2>Your estimated dose is ${lowerdose} to ${upperdose}+ mg of CBD</h2>
        <br/>
        <p>Based on your condition and the severity of your condition, this calculator estimates a dose of <strong>${lowerdose} to ${upperdose}mg of CBD each day</strong>. A common technique in CBD hemp oil is to "start low and go slow." Try starting with ${lowerdose}mg each day and gradually increase your dose until you feel relief. For all-day relief try splitting up your dose throughout day.</p>
        <br/>
        <p class="note"><strong>Please note:</strong> Your optimal dose or doctor recommended dose may be different from the dose that we calculated. <strong>We advise you to speak with a healthcare professional regarding your use of CBD hemp oil, the dosing of CBD hemp oil, and the interactions CBD hemp oil may have on your other medications.</strong> This calculator is only meant to be a general guide, and should not be considered medical advice. The information from this Dose Estimator is from crowd-sourced and research data obtained from cbddosagecalculator.com. These statements have not been evaluated by the Food and Drug Administration (FDA) and are not intended to diagnose, treat, cure or prevent any disease. Please consult with a medical professional for any medical advice.</p>
      </section>
      </body>
    </html>
    `;
};