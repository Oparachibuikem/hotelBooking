const functions = require("firebase-functions");
const mailgun = require("mailgun-js");

// Initialize Mailgun with your credentials
const mg = mailgun({
  apiKey: "d4508595a6553640ae0d10ff213b23a8-777a617d-c1995571",
  domain: "sandboxb9a7083f12594bdba5bbbf5d6df407b1.mailgun.org",
});

// Define a Cloud Function to send an email
exports.sendEmail = functions.https.onCall((data, context) => {
  const mailOptions = {
    from: "chibuikemopara@yahoo.com", // Use an email verified in Mailgun
    to: data.email, // Email address of the recipient
    subject: data.subject,
    text: data.message,
  };

  return mg
    .messages()
    .send(mailOptions)
    .then((response) => {
      console.log("Email sent:", response);
      return { success: true };
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      return { success: false, error: error.toString() };
    });
});
