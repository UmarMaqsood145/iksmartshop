const ContactData = require("../models/contact");
const nodemailer = require("nodemailer");
require("dotenv").config();

const Contact = async (req, res) => {
  const contactform = new ContactData({
    fullname: req.body.fullname,
    country: req.body.country,
    city: req.body.city,
    address: req.body.address,
    phone: req.body.phone,
    products: req.body.products,
    subTotal: req.body.subTotal,
  });
  contactform
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const pro = req.body.products;
  const output = `
    <p>Thanks for choosing IK SMART SHOP.</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Full Name: ${req.body.fullname}</li>
      <li>Country: ${req.body.country}</li>
      <li>City: ${req.body.city}</li>
      <li>Address: ${req.body.address}</li>
      <li>Phone: <a href="tel: +92${req.body.phone}">+92${
    req.body.phone
  }</a></li>
    </ul>
    <h3>Order Details</h3>
    <ul>
      <h3>Products</h3>
      <div>${pro.map(
        (data) =>
          `<li>Product Name: ${data.title}</li><li>Product Price: ${data.price}</li>`
      )}</div>
      ,
      <li>Subtotal: ${req.body.subTotal}</li>
    </ul>
  `;

  transporter.sendMail({
    // from: "umar.ac.207@gmail.com",
    to: "imrankhan786.link@gmail.com",
    subject: `Greetings From ${req.body.fullname}`,
    html: output,
  });
};

module.exports = Contact;
