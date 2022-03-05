const jwt = require("jsonwebtoken");

// this function returns the jwt token as response
exports.getToken = (req, res) => {
  // generate the jwt token  (here we are not giving any payload to the token)
  const token = jwt.sign({}, process.env.JWT_SECRET_TOKEN, (err, data) => {
    res.json({ token: data });
  });
};
