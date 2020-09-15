module.exports = ({ condition, weight, severity, dose, professionalHelp, otherMedication, otherMedicationExplanation, doseDuration, doseImprovement, elaborate }) => {
    const NO_ANSWER = 'Did not provide answer'
    return `
<!DOCTYPE html>
<html>
<head>
<title>Accu-Hemp Survey Submission</title>
</head>

<body style="margin: 0; padding: 0;">
<section class="contact">
  <h2>An individual has submitted a survey</h2>
  <br/>
  <p><strong>Client Condition:</strong> ${condition}</p>
  <br/>
  <p><strong>Client Weight:</strong> ${weight}</p>
  <br/>
  <p><strong>Condition Severity:</strong> ${severity}</p>
  <br/>
  <p><strong>Client Dose:</strong> ${dose}</p>
  <br/>
  <p><strong>Did the client get help from a professional for dose?:</strong> ${professionalHelp}</p>
  <br/>
  <p><strong>Is the client taking anything else for this condition?:</strong> ${otherMedication}</p>
  <br/>
  <p><strong>If yes, what else is the client taking?:</strong> ${otherMedicationExplanation ? otherMedicationExplanation : NO_ANSWER}</p>
  <br/>
  <p><strong>How long has client been using this dose of CBD?:</strong> ${doseDuration}</p>
  <br/>
  <p><strong>How much has this dose improved their symptoms?:</strong> ${doseImprovement}</p>
  <br/>
  <p><strong>Anything else we should know?:</strong> ${elaborate ? elaborate : NO_ANSWER}</p>
  <br/>
</section>
</body>
</html>
`;
};