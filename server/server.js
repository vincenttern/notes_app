const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");

const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Nodemailer
const { sendEmail } = require("./mail");

app.use(express.static(path.join(__dirname, "/build")));

app.post("/api/sendMail", (req, res) => {
  const data = req.body;
  console.log(data);
  sendEmail(data);

  res.status(200).end();
});

app.get("/*", function(req, res, next) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
