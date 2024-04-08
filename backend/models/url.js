const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    isSecure: {
      type: Boolean,
      default: false,
    },
    domainName: {
      type: String,
      required: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    userCreated: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    visitHistory: [
      {
        timestamp: { type: Number },
        browser: { type: String },
        localtime: { type: String },
        localdate: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
