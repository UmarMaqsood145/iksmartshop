const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const router = require("./router/router");

mongoose.connect(process.env.DB_LINK, () => {
  console.log("Database Sccessfully Connected");
});

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
