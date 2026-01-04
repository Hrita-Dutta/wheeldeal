const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { accountType, ...data } = req.body;
  // console.log("bug here");

  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    if (accountType === "customer") {
      const customer = await db.Customer.create({
        ...data,
        password: hashedPassword,
        // confirmPassword: hashedPassword,
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
        // confirmPassword: hashedPassword,
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

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  db.Customer.findOne({ where: { email: email } })
    .then((user) => {
      if (user) {
        loadedUser = user;
        accountType = "customer";
        return bcrypt.compare(password, user.password);
      }

      // If not found, check VehicleOwner table
      return db.VehicleOwner.findOne({ where: { email: email } }).then(
        (owner) => {
          if (!owner) {
            const error = new Error("User not found.");
            error.statusCode = 401;
            throw error;
          }
          loadedUser = owner;
          accountType = "owner";
          return bcrypt.compare(password, owner.password);
        }
      );
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Wrong password!");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser.id.toString(),
          accountType: accountType,
        },
        "secret",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        email: loadedUser.email,
        userId: loadedUser.id.toString(),
        accountType: accountType,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
