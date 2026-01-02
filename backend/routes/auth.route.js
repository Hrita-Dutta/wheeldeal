const router = require("express").Router();

const authController = require("../controllers/auth.controller");
const { registerValidation } = require("../middlewares/register.validation");
const validate = require("../middlewares/validate.middleware");

router.post("/register", registerValidation, validate, authController.register);

module.exports = router;
