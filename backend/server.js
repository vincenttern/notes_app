const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const notesRouter = require("./routes/notes");
const path = require("path");
const publicPath = path.join(__dirname, "..", "public");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
  origin: "Your FrontEnd Website URL",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/dist", express.static(path.join(publicPath, "dist")));

const uri = process.env.ATLAS_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB is Connected!");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(res =>
//     console.log("MongoDB database connection established successfully")
//   )
//   .catch(err => console.log(`Error: ${err}`));

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
app.get("*", function(req, res) {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
