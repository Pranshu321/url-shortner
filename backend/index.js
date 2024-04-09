const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const auth = require("./routes/auth");
const URL = require("./models/url");
const { GetBrowser, GetConvertedDateTime } = require("./utils/util");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

connectToMongoDB(process.env.MONGO_URL).then(() =>
  console.log("Mongodb connected")
);

app.use(cors());
app.use(express.json());

app.use("/url", urlRoute);
app.use("/auth", auth);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
          browser: GetBrowser(req.headers["user-agent"]),
          localtime: GetConvertedDateTime(Date.now()).time,
          localdate: GetConvertedDateTime(Date.now()).date,
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT || process.env.PORT, () =>
  console.log(`Server Started at PORT:${PORT}`)
);
