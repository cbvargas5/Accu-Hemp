module.exports = ({ companyName, involvement, fullName, email, phone, linkForStore, qualityTestLink, affiliateStatus, linkToAffiliateProgram, brandDescription }) => {
    const NO_ANSWER = 'Did not provide answer'
    return `
<!DOCTYPE html>
<html>
<head>
<title>Accu-Hemp Advertise Products Request</title>
</head>

<body style="margin: 0; padding: 0;">
<section class="contact">
  <h2>A(n) company/individial has submitted a request to advertise a product</h2>
  <br/>
  <p><strong>Company Name:</strong> ${companyName}</p>
  <br/>
  <p><strong>User's involvement with ${companyName}:</strong> ${involvement}</p>
  <br/>
  <p><strong>Contact Full Name:</strong> ${fullName}</p>
  <br/>
  <p><strong>Contact Email:</strong> ${email}</p>
  <br/>
  <p><strong>Contact Phone Number:</strong> ${phone}</p>
  <br/>
  <p><strong>Website Link for Store/Shop:</strong> ${linkForStore}</p>
  <br/>
  <p><strong>Link for Quality Test:</strong> ${qualityTestLink}</p>
  <br/>
  <p><strong>Does contact have an Affiliate Program?:</strong> ${affiliateStatus}</p>
  <br/>
  <p><strong>If yes to previous, affiliate link:</strong> ${linkToAffiliateProgram ?  linkToAffiliateProgram : NO_ANSWER}</p>
  <br/>
  <p><strong>Brand Description:</strong> ${brandDescription}</p>
  <br/>
</section>
</body>
</html>
`;
};