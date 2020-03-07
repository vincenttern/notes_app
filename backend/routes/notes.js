const router = require("express").Router();
let Note = require("../models/note.model");

router.route("/api").get((req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const subject = req.body.subject;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newNote = new Note({
    title,
    subject,
    description,
    date
  });

  newNote
    .save()
    .then(() => res.json("Note added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/api:id").get((req, res) => {
  Note.findById(req.params.id)
    .then(note => res.json(note))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/api:id").delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json("Note deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/api/update/:id").post((req, res) => {
  Note.findById(req.params.id)
    .then(note => {
      note.title = req.body.title;
      note.subject = req.body.subject;
      note.description = req.body.description;
      note.date = Date.parse(req.body.date);

      note
        .save()
        .then(() => res.json("Note updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
