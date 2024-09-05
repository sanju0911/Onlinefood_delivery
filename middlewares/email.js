const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "janardhansanjay143@gmail.com",
    pass: "uldt xhwo vjpc sunw",
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
        <h2>Thank you for registering with us!</h2>
        <h2>Our promise is quality and taste!</h2>
        <h3>Your details:</h3>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        
      `, // HTML body with user details
  });

  console.log("Message sent: %s", info.messageId);
};
