const { body } = require("express-validator");
const db = require("../models");
const { where } = require("sequelize");

exports.registerValidation = [
  body("firstName").trim().notEmpty().withMessage("First name required"),
  body("lastName").trim().notEmpty().withMessage("Last name required"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Ivalid email")
    .custom(async (value) => {
      const user = await db.Customer.findOne({ where: { email: value } });
      if (user) {
        throw new Error("E-mail address already exists!");
      }
    }),
  body("phone").trim().notEmpty().withMessage("Phone number required"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password required min 8 characters"),
  body("accountType")
    .isIn(["customer", "owner"])
    .withMessage("Last name required"),
  body("licenseNumber")
    .trim()
    .if(body("accountType").equals("owner"))
    .notEmpty()
    .withMessage("License required for owner"),

  body("address")
    .if(body("accountType").equals("owner"))
    .notEmpty()
    .withMessage("Address required for owner"),
];
