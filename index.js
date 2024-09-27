const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const app = express();
app.use((req, res, next) => {
  const allowedOrigins = [
    "back-test-three.vercel.app",
    "http://localhost:3000",
    "http://bike-ecommerce:3000",
    "http://192.168.2.239:3000",
    "http://bikeecommerce.atwebpages.com",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(cors());
app.use(bodyParser.json());

const api = new WooCommerceRestApi({
  url: process.env.WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
