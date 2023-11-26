require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

module.exports = {
  registAuth: async (req, res) => {
    try {
      const { nama, email, password } = req.body;

      const checkUserExist = await User.findOne({ email: email });
      if (checkUserExist)
        return res.status(400).json({
          message: "email already exist",
        });

      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({
        nama: nama,
        email: email,
        password: hashedPassword,
      });

      res.status(201).json({
        message: "Success create account",
      });
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  loginAuth: async (req, res) => {
    try {
      const userLoginInfo = req.body;

      const user = await User.findOne({ email: userLoginInfo.email });
      if (!user) throw new Error("Invalid user");

      const comparePassword = await bcrypt.compare(
        userLoginInfo.password,
        user.password
      );
      if (!comparePassword) throw new Error("Invalid Password");

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
};
