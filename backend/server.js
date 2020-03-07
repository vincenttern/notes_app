const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const notesRouter = require("./routes/notes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() =>
    connection.once("open", () => {
      console.log("mongo connected");
    })
  )
  .catch(err => console.log(err));

app.use("/notes", notesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
