const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const app = express();
app.get("/", (req, res) => {
  res.send("API is running!");
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
