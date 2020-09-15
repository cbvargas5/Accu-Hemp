module.exports = ({ overall, easeOfUse, helpfulness, likeMost, likeLeast, suggestions, email }) => {
    const NO_ANSWER = 'Did not provide answer'
    return `
<!DOCTYPE html>
<html>
<head>
  <title>Accu-Hemp Contact Form</title>
</head>

<body style="margin: 0; padding: 0;">
<section class="contact">
  <h2>An individual has submitted a contact form</h2>
  <br/>
  <p><strong>Overall rating:</strong> ${overall}</p>
  <br/>
  <p><strong>Ease of Use rating:</strong> ${easeOfUse}</p>
  <br/>
  <p><strong>Helpfulness rating:</strong> ${helpfulness}</p>
  <br/>
  <p><strong>What they like most:</strong> ${likeMost ? likeMost : NO_ANSWER}</p>
  <br/>
  <p><strong>What they like least:</strong> ${likeLeast ? likeLeast : NO_ANSWER}</p>
  <br/>
  <p><strong>Provided Suggestions:</strong> ${suggestions ? suggestions : NO_ANSWER}</p>
  <br/>
  <p><strong>Provided Email:</strong> ${email ? email : NO_ANSWER}</p>
  <br/>
</section>
</body>
</html>
`;
};
// brand, product, measurement, email, selected dose