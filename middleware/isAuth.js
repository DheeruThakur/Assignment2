const jwt = require("jsonwebtoken");

// Main middleware function which takes token from header and verify it
async function verifyToken(req, res, next) {
  try {
    // fetch the token from the header
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader) {
      bearerToken = bearerHeader.split(" ");
      const token = bearerToken[1];
      // verify the token with the secret key at server side
      const auth = await jwt.verify(token, process.env.JWT_SECRET_TOKEN);
      // save the token in the request.
      req.token = token;
      // call the next function to run the code smoothly otherwise url request gets traped in the middleware.
      next();
    } else {
      // if token are not able to fetch from header then send response to avoid the server crash.
      res.send("doesn't get token");
    }
  } catch (err) {
    res.send(err);
  }
}

// export the above function.
module.exports = verifyToken;
