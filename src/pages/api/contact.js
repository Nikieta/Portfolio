import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, subject, message } = req.body;

 
    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    console.log('Received form data', { fullName, email, subject, message });


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
      res.status(200).json({ message: 'Form submitted and email sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error });
    }

  } else {

    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
