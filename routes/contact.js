const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact");
const verifyToken = require("../middleware/isAuth");
const { check } = require("express-validator");

// this route is to add new contact
router.post(
  "/add",
  verifyToken,
  [check("contact").notEmpty().isLength({ min: 5 })],
  contactController.newContact
);

// this route is to add new bulk contacts
router.post("/add/bulk", verifyToken, contactController.bulkContact);

// this route is to fetch a contact by contact id
router.get("/fetch/:contactId", verifyToken, contactController.getContactById);

// this route is to fetch a contact by contact (phase matching)
router.get(
  "/fetch/bycontact/:contact",
  verifyToken,
  contactController.ByContact
);

// this route is to fetch all contacts
router.get("/fetch", verifyToken, contactController.fetchAll);

// this route is to update a particular contact.
router.put("/update/:contactId", verifyToken, contactController.updateContact);

// this route is to delete a particular contact.
router.post("/delete/:contactId", verifyToken, contactController.deleteContact);

// export the router.
module.exports = router;
