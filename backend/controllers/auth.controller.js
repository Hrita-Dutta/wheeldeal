require("dotenv").config();
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require("../services/token.service");

// Register Logic
exports.register = async (req, res) => {
  const { accountType, ...data } = req.body;
  // console.log("bug here");

  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Register customer
    if (accountType === "customer") {
      const customer = await db.Customer.create({
        ...data,
        password: hashedPassword,
      });

      return res.status(201).json({
        message: "Customer registered successfully",
        data: customer,
      });
    }

    // Register owner
    if (accountType === "owner") {
      const owner = await db.VehicleOwner.create({
        ...data,
        password: hashedPassword,
      });

      return res.status(201).json({
        message: "Vehicle owner registered successfully",
        data: owner,
      });
    }

    return res.status(400).json({ message: "Invalid account type" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

// Login Logic
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = null;
    let accountType = null;

    // Check admin
    user = await db.Admin.findOne({ where: { email } });
    if (user) {
      accountType = "admin";
    }
    console.log("user logged in");

    // Check customer
    if (!user) {
      user = await db.Customer.findOne({ where: { email } });
      if (user) {
        accountType = "customer";
      }
    }

    // Check Vehicle Owner
    if (!user) {
      user = await db.VehicleOwner.findOne({ where: { email } });
      if (user) {
        accountType = "owner";
      }
    }

    // User not found
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 401;
      throw error;
    }

    // Hased password compare
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error("Wrong password");
      error.statusCode = 401;
      throw error;
    }

    // Generate Access and refresh token when user logs in
    // Calling Access Token Generation
    const accessToken = generateAccessToken({
      ...user.dataValues, //dataValues are comming due to sequlize as it stores objects as property name dataValues
      accountType,
    });

    // Calling Refresh Token Generation
    const refreshToken = generateRefreshToken({
      ...user.dataValues,
      accountType,
    });

    // Send refresh token as HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // JS cannot access it
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send access token in JSON
    res.status(200).json({
      token: accessToken,
      email: user.email,
      userId: user.id.toString(),
      accountType,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// refresh token logic
exports.refreshToken = (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token) return res.status(401).json({ message: "Refresh token missing" });

  try {
    const decodedToken = verifyRefreshToken(token); // call service
    const newAccessToken = generateAccessToken(decodedToken);
    res.status(200).json({ token: newAccessToken });
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};
