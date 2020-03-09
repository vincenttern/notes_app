const mailer = require("nodemailer");
require("dotenv").config();

const emailMessage = data => {
  const firstName = data.firstName;
  const lastName = data.lastName;
  const phone = data.phone;
  const email = data.email;
  const subject = data.subject;
  const message = data.message;

  return `
        <section style="padding: 10px;">
      
          <div style="border: 1px solid grey; padding: 15px; box-shadow: 1px 5px 5px #b9b3b3;">
            <h1 style="text-align: center; font-size: 40px;">Contact</h1>
            <div>
              <p style="margin-bottom: 3px; font-size: 15px; text-align: left;">Name: ${firstName} ${lastName}</p> 
              <p style="font-size: 15px; text-align: left;">Phone: ${phone}</p>
              <p style="font-size: 15px; text-align: left;">Email: ${email}</p>
    
              <p style="font-size: 15px; text-align: left;">Reference: ${subject}</p>
           
            </div
            <div>
              <p style="text-align: left; font-size: 15px;">Message: ${message} </p>
        
            </div> 
          </div>
          
        </section>
        `;
};

const sendEmail = data => {
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.USERNAME, // generated ethereal user
      pass: process.env.PASS // generated ethereal password
    }
  });

  const mailOptions = {
    from: `"Notebeast" <${process.env.EMAIL}>`, // sender address
    to: process.env.USERNAME, // list of receivers
    subject: "Info", // Subject line
    text: "Hi Notebeast", // plain text body
    html: emailMessage(data) // html body
  };

  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email successfully sent");
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
