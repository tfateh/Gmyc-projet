const User = require("../models/User");

exports.getUserById = async (req, res) => {
  const { userid } = req.params;

  try {
    const user = await User.findOne({ userid }).populate("products");

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ errors: [{ msg: "Get user failed" }] });
  }
};