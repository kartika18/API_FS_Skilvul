require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = {
  loginAuth: async (req, res) => {
    try {
      const userLoginInfo = req.body;

      const user = await User.findOne({ email: userLoginInfo.email });
      if (!user) throw new Error("Invalid user");

      if (user.password !== userLoginInfo.password)
        throw new Error("Invalid Password");

      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_KEY
      );

      res.status(200).json({
        message: "Login Successful",
        user_id: user._id,
        token,
      });
    } catch (error) {
      res.status(401).json(error.message);
    }
  },

  registAuth: async (req, res) => {},
};
