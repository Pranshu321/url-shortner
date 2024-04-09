const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleGetUrls,
} = require("../controllers/url");
const cors = require("cors");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

router.get("/geturls", handleGetUrls);

module.exports = router;
