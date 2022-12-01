const express = require("express");
const router = express.Router();
const Contact = require("../controller/controller");

router.post("/confirmOrder", Contact);

module.exports = router;
