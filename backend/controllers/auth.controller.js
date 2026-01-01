const bcrypt = require("bcrypt");
const db = require("../models");

exports.register = async (req, res) => {
  const { accountType, ...data } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    if (accountType === "customer") {
      const customer = await db.Customer.create({
        ...data,
        password: hashedPassword,
        confirmPassword: hashedPassword,
      });

      return res.status(201).json({
        message: "Customer registered successfully",
        data: customer,
      });
    }

    if (accountType === "owner") {
      const owner = await db.VehicleOwner.create({
        ...data,
        password: hashedPassword,
        confirmPassword: hashedPassword,
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
