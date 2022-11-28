const express = require("express");
const app = express();
const cron = require("node-cron");
const axios = require("axios");

cron.schedule("0 0 * * * *", () => {
  const fetchData = async () => {
    await axios
      .post("https://surewin-backend.onrender.com/recurring-rent")
      .then((res) => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  fetchData();
});

const port = process.env.PORT || 5000;
app.listen(port, console.log("Server listening on port " + port));
