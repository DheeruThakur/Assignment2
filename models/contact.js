const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  contact: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
});

// export the schema as mongoose model.
module.exports = mongoose.model("contact", contactSchema);
