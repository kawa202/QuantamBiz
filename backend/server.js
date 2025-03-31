const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // you can use other services like 'smtp.mailtrap.io' for dev purposes
  auth: {
    user: 'kawarobson3@gmail.com',  // your email address
    pass: 'tania1kawa2',    // your email password (consider using environment variables for security)
  },
});

// POST route to handle form submissions
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Email options
  const mailOptions = {
    from: email,  // Sender's email
    to: 'kawarobson3@gmail.com', // Your email address where the form will be sent
    subject: 'New Contact Form Submission',
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).send({ message: 'Error sending email', error: err });
    }
    res.status(200).send({ message: 'Email sent successfully', info });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
