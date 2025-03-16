import nodemailer from "nodemailer";
const allowedOrigins = [
  "http://localhost:3000",
  "https://nikieta.vercel.app",
];
export default async function handler(req, res) {

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end(); 
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }


  const { fullName, email, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  console.log("Received form data:", { fullName, email, subject, message });


  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_HOST || !process.env.EMAIL_PORT) {
    console.error("Missing required email environment variables.");
    return res.status(500).json({ message: "Email configuration error. Please check environment variables." });
  }


  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true", 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Portfolio Contact Form <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Send email to yourself
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      You have a new message from your portfolio contact form.

      Full Name: ${fullName}
      Email: ${email}
      Message: ${message}
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    return res.status(200).json({ message: "Form submitted successfully. Email sent!" });
  } catch (error) {
    console.error("Error sending email:", error.response ? error.response : error);
    return res.status(500).json({ message: "Failed to send email.", error: error.message });
  }
}
