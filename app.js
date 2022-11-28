const express = require("express");
const app = express();
const cron = require("node-cron");
const axios = require("axios");
const cors = require("cors");

app.use(cors());
app.post("/recurring-rent", (req, res) => {
  cron.schedule("0 0 0 * * *", () => {
    const fetchData = async () => {
      await axios
        .post("https://surewin-backend.onrender.com/recurring-rent")
        .then((res) => {
          res.send(200).json({ success: true, mgs: "success" });
        })
        .catch((error) => {
          res.send(400).json({ success: false, mgs: "something  went" });
        });
    };
    fetchData();
  });
});
app.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Success" });
});

const port = process.env.PORT || 5000;
app.listen(port, console.log("Server listening on port " + port));
