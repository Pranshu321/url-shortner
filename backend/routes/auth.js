const express = require("express");
const { SignUp, Login, GetUser } = require("../controllers/auth");

const router = express.Router();

router.post("/register", SignUp);

router.post("/login", Login);

router.post("/getuser", GetUser);

module.exports = router;
