const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = null;
    let accountType = null;

    user = await db.Admin.findOne({ where: { email } });
    if (user) {
      accountType = "admin";
    }

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
    const isEqual = await bcrypt.compare(password, owner.password);
    if (!isEqual) {
      const error = new Error("Wrong assword");
      error.statusCode = 401;
      throw error;
    }

    // Token Generation
    const token = jwt.sign(
      {
        email: user.email,
        userId: user.id.toString(),
        accountType: accountType,
      },
      process.env.SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token: token,
      email: user.email,
      userId: user.id.toString(),
      accountType: accountType,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
