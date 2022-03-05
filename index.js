const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contact");
const authRoutes = require("./routes/auth");

const app = express();

// this middleware is used to parse json format data
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Server running on port ${PORT}</h1>`);
});
// this directs all the url request starting with /contact to the contactRoutes.
app.use("/contact", contactRoutes);
// this directs all the url request starting with /token to the authRoutes.
app.use("/token", authRoutes);

const PORT = process.env.PORT || 3000;

// connect the mongoDB url.
mongoose.connect(process.env.MONGO_URI, () => {
  console.log("server connected successfully");

  app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  });
});
