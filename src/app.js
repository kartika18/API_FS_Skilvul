const express = require("express");
const db_connection = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

db_connection
  .then(() => {
    console.log("Success connecting to mongoDB");
  })
  .catch(() => {
    console.log("Failed connecting to mongoDB");
  });

app.listen(PORT, () => {
  console.log("Server running on PORT ", PORT);
});

module.exports = app;
