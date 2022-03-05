const { json } = require("express/lib/response");
const Data = require("../models/contact");
const { validationResult } = require("express-validator");

exports.newContact = async (req, res) => {
  try {
    // store the errors occured during validation.
    const errors = validationResult(req);
    // if error occured the return the array of errors.
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // create the data model.
    const contact = req.body.contact;
    const name = req.body.name;
    const user = new Data({
      contact: contact,
      name: name,
    });
    // save the newly created model
    const result = await user.save();
    if (!result) {
      console.log("contact not saved");
    }
    // return a response.
    res.status(200).json({ contact: result });
  } catch (err) {
    res.send(err);
  }
};

exports.bulkContact = async (req, res) => {
  try {
    // apply a loop for storing bulk data in database
    for (let i = 0; i < req.body.length; i++) {
      const user = new Data({
        contact: req.body[i].contact,
      });
      // save the data model
      const result = await user.save();
      if (!result) {
        console.log("contact not saved");
      }
    }
    // send response to the client.
    res.status(200).json({ message: "added successfully" });
  } catch (err) {
    res.send(err);
  }
};

exports.getContactById = async (req, res) => {
  try {
    // find a contact in the database by it id.
    const details = await Data.findOne({ _id: req.params.contactId });
    // if contact not found then console the message.
    if (!details) {
      console.log("user not find");
    }
    // send a response
    res.status(200).send(details);
  } catch (err) {
    res.send(err);
  }
};

exports.ByContact = async (req, res) => {
  try {
    // find a contact in the database by contact itself.
    const details = await Data.find({ contact: req.params.contact });
    // if contact not found then console the message.
    if (!details) {
      console.log("user not find");
    }
    // send a response
    res.status(200).send(details);
  } catch (err) {
    res.send(err);
  }
};

exports.updateContact = async (req, res) => {
  try {
    // find a contact in the database by it's id.
    const details = await Data.findOne({ _id: req.params.contactId });
    // if contact not found then console the message.
    if (!details) {
      console.log("user not find");
    }
    details.contact = req.body.contact;
    // save the updated model in database
    const user = await details.save();
    // send a response
    res.status(200).send(user);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    // find contact in the database by its id and delete from the database
    Data.findByIdAndDelete(req.params.contactId, (err, data) => {
      // if error occured then console the message.
      if (err) {
        console.log("error in deleting contact");
      }
      // send a response.
      res.status(200).json({ message: `${data.contact} deleted successfully` });
    });
  } catch (err) {
    res.send(err);
  }
};

exports.fetchAll = async (req, res) => {
  try {
    // adding pagination
    const { page, limit } = req.query;
    // find all the contacts from the database
    const contacts = await Data.find()
      .select(["contact", "-_id"])
      .limit(limit)
      .skip((page - 1) * limit);
    // send all the contacts as response
    res.json(contacts);
  } catch (err) {
    res.send(err);
  }
};
