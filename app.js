const express = require("express");
const app = express();
const cron = require("node-cron");
const axios = require("axios");

app.post("/recurring-rent", (req, res) => {
  const fetchData = async () => {
    await axios
      .post("https://surewin-backend.onrender.com/recurring-rent")
      .then((res) => {
        res.status(200).json({ success: true, mgs: "success" });
      })
      .catch((error) => {
        res.status(400).json({ success: false, mgs: "something  went wrong" });
      });
  };
  fetchData();
});
app.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Success" });
});

const port = process.env.PORT || 5000;
app.listen(port, console.log("Server listening on port " + port));
