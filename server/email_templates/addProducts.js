module.exports = ({ companyName, involvement, email, website }) => {
    const NO_ANSWER = 'Did not provide answer'
    return `
<!DOCTYPE html>
<html>
<head>
<title>Accu-Hemp Add Products Form</title>
</head>

<body style="margin: 0; padding: 0;">
<section class="contact">
  <h2>An company/individial has submitted a request to add a product</h2>
  <br/>
  <p><strong>Company Name:</strong> ${companyName}</p>
  <br/>
  <p><strong>User's involvement with ${companyName}:</strong> ${involvement}</p>
  <br/>
  <p><strong>Contact Email:</strong> ${email}</p>
  <br/>
  <p><strong>Company Website Link:</strong> ${website ? website : NO_ANSWER}</p>
  <br/>
  <p><strong>See attachments for uploaded logo and uploaded product info</strong></p>
  <br/>
</section>
</body>
</html>
`;
};