const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("email", "This field is required").notEmpty(),
  check("email", "Enter a valid email").isEmail(),
];

exports.loginRules = () => [
  check("email", "This field is required").notEmpty(),
  check("password", "This field is required").notEmpty(),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};