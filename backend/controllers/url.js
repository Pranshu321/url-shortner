const shortid = require("shortid");
const URL = require("../models/url");
const url = require("url");
const { IsSecure } = require("../utils/util");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    domainName: url.parse(body.url).hostname,
    userCreated: body.user,
    isSecure: IsSecure(body.url),
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  console.log(shortId);
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

async function handleGetUrls(req, res) {
  const user = req.body.user;
  const urls = await URL.find({
    userCreated: user,
  });
  return res.json(urls);
}

async function handleDeleteUrl(req, res) {
  const body = req.body;
  if (!body.id) return res.status(400).json({ error: "id is required" });
  const result = await URL.deleteOne({
    shortId: body.id,
  });
  if (result.deletedCount === 0)
    return res.status(404).json({ error: "url not found" });

  return res.json({ id: body.id });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleGetUrls,
  handleDeleteUrl,
};
