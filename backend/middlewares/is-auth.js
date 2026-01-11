const jwt = require("jsonwebtoken");
const { verifyAccessToken } = require("../services/token.service");

// Give access to the user who are logged in with correct credential by verifying the aceess token
module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = verifyAccessToken(token);
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error = new Error("Not Authenticated.");
    err.statusCode = 401;
    throw error;
  }

  req.userId = decodedToken.userId;
  // req.user = {
  //     userId: decodedToken.userId,
  //     email: decodedToken.email,
  //     accountType: decodedToken.accountType,
  //   };
  next();
};
