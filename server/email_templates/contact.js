module.exports = ({ name, email, message }) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <title>Accu-Hemp Contact Form</title>
</head>

<body style="margin: 0; padding: 0;">
  <section class="contact">
    <h2><strong>${name}</strong> has submitted a contact form</h2>
    <br/>
    <p><strong>Their Email:</strong> ${email}</p>
    <br/>
    <p><strong>Their Message:</strong> ${message}</p>
  </section>
</body>
</html>
`;
};