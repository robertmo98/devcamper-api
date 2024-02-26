require("dotenv").config({ path: "./config/config.env" });
const NodeGeocoder = require("node-geocoder");

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdaper: "https",
  apiKey: process.env.GEOCODER_API_KEY,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
