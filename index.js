const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
