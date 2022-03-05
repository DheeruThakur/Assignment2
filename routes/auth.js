const express = require("express");
const router = express.Router();
const contactController = require("../controller/auth");

// this route redirects to contactController.
router.get("/", contactController.getToken);

module.exports = router;
