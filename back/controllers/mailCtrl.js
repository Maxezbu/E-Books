const nodemailer = require("nodemailer"); // email sender function
exports.sendEmail = function (req, res) {
  // nodemailer stuff will go here
};

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "equipo.ebooks@gmail.com",
    pass: "Ebooks123",
  },
});


module.exports = transporter;