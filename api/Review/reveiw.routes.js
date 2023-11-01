const express = require("express");
const router = express.Router();
const { reviewGet } = require("./review.controllers");

router.get("/", reviewGet);

module.exports = router;
