// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { fullName, email, subject, message } = req.body;

    
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'your-email@gmail.com',  
//         pass: 'your-email-password',   
//       },
//     });

   
//     const mailOptions = {
//       from: 'your-email@gmail.com', 
//       to: 'nikieta09@gmail.com',   
//       subject: `New Contact Form Submission: ${subject}`,
//       text: `
//         You have a new form submission.

//         Full Name: ${fullName}
//         Email: ${email}
//         Message: ${message}
//       `,
//     };

//     try {
     
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: 'Form submitted and email sent successfully!' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error sending email', error });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }



// export default function handler(req,res){
//     if(req.method=="POST"){
//         const {fullName,email,subject,message}=req.body;
//         if (!fullName || !email || !subject || !message) {
//             return res.status(400).json({ message: 'All fields are required.' });
//         }
//         console.log('Received form data',{fullName,email,subject,message});
//         res.status(200).json({ message: 'Form submitted successfully!' });
//     }else{
//         res.status(405).json({message:"Method not allowed"})
//     }
// }


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
        pass: process.env.EMAIL_PASS_Generated,   
      },
    });

   
    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_USER,  
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        You have a new form submission.

        Full Name: ${fullName}
        Email: ${email}
        Message: ${message}
      `,
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
