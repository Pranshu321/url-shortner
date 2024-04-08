const User = require("../models/userModel");
const bcrypt = require("bcrypt");

function SignUp(req, res) {
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return res.status(400).json({ error: "Please fill all the fields" });
  }
  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(400).json({ error: "User already exists" });
      }
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({ error: "Internal server error" });
        }
        const newUser = new User({
          email,
          password: hash,
          username,
        });
        newUser
          .save()
          .then((user) => {
            res.json({ message: "User saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function Login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Please fill all the fields" });
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ error: "User does not exist" });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(500).json({ error: "Internal server error" });
        }
        if (!result) {
          return res.status(400).json({ error: "Invalid credentials" });
        }
        res.json({ message: "User logged in successfully" });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function GetUser(req, res) {
  const email = req.body.email;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ error: "User does not exist" });
      }
      res.json({ user });
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { SignUp, Login, GetUser };
