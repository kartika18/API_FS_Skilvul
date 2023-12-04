require("dotenv").config();
const express = require("express");
const db_connection = require("./config/db");
const allRoutes = require("./routes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

const corsURL = {
  origin: "https://api-fs-skilvul.vercel.app/api",
};

app.use(cors(corsURL));

db_connection
  .then(() => {
    console.log("Success connecting to mongoDB");
  })
  .catch(() => {
    console.log("Failed connecting to mongoDB");
  });

app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("Server running on PORT ", PORT);
});

module.exports = app;
