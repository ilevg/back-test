const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// const api = new WooCommerceRestApi({
//   url: process.env.WORDPRESS_SITE_URL,
//   consumerKey: process.env.WC_CONSUMER_KEY,
//   consumerSecret: process.env.WC_CONSUMER_SECRET,
//   version: "wc/v3",
// });
app.get("/", (req, res) => {
  res.send("API is running!");
});

// app.use(cors());
// app.use(bodyParser.json());

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
