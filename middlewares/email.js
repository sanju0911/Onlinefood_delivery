const nodemailer = require("nodemailer");

const dotenv = require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.PASS,
  },
});

exports.sendmail = async (user) => {
  const info = await transporter.sendMail({
    from: '"sanju 👻" <janardhansanjay143@gmail.com>',
    to: user.email,
    subject: "<h1>Welcome ✔</h1>",

    text: "Welcome to our online delivery app!",
    html: `
        <h1>Welcome to our online delivery app!</h1>
        <h2>${user.message}</h2>
        <h2>Our promise is quality and taste!</h2>
        <h3>Your details:</h3>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        
      `,
  });

  console.log("Message sent: %s", info.messageId);
};
