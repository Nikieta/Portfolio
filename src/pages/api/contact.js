import nodemailer from 'nodemailer';

export default async function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "https://nikieta.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");


  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    const { fullName, email, subject, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    console.log('Received form data:', { fullName, email, subject, message });


    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error(" Missing EMAIL_USER or EMAIL_PASS in environment variables.");
      return res.status(500).json({ message: 'Email configuration error.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `Portfolio Contact Form <${process.env.EMAIL_USER}>`,  
      to: process.env.EMAIL_USER,  
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        You have a new form submission.

        Full Name: ${fullName}
        Email: ${email}  
        Message: ${message}
      `,
      replyTo: email, 
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");
      res.status(200).json({ message: 'Form submitted and email sent successfully!' });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: 'Error sending email', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
