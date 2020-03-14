const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const notesRouter = require("./routes/notes");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, "/../build")));

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(res =>
    console.log("MongoDB database connection established successfully")
  )
  .catch(err => console.log(`Error: ${err}`));

app.use("/notes", notesRouter);

const { sendEmail } = require("./Mail/Mail");
app.post("/api/sendMail", (req, res) => {
  const data = req.body;
  console.log(data);
  sendEmail(data);

  res.status(200).end();
});

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
// app.get("/*", function(req, res, next) {
//   res.sendFile(path.join(__dirname + "/../build/index.html"));
// });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
