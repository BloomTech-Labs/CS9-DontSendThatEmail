// place for Letter0 router
const router = require("express").Router();
const User = require("../models/user");
const { login, authenticate, localStrategy } = require("../controllers/login");
const { protected, jwtStrategy } = require("../jwt/jwt");
const passport = require("passport");

const Letter = require("../models/letter");

router.get("/", protected, (req, res) => {
  const userid = req.user._id;
  User.findById(userid)
    .populate("letters")
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:id", protected, (req, res) => {
  const id = req.params.id;
  Letter.findById(id)
    .populate("user_id")
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", protected, (req, res) => {
  console.log(req.user._id);
  const letter = new Letter({ ...req.body, user_id: req.user._id });
  // Letter.versions.push(letter);
  letter
    .save()
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// http://localhost:5000/letters/updateLetter

router.post("/updateLetter", (req, res) => {
  // console.log(req.body);
  const { content, id } = req.body;
  // Insert possible check for if `content` was provided here
  Letter.findById(id).then(letter => {
    letter.versions.push({ content });
    letter
      .save()
      .then(updatedletter => {
        res.status(200).json(updatedletter);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });
});

router.delete("/:id", protected, (req, res) => {
  const id = req.params.id;
  Letter.findByIdAndRemove(id)
    .then(response => {
      if (response.ok === 1) {
        res
          .status(200)
          .json({ message: `succussfully deleted the letter with id: ${id}` });
      } else {
        res.status(404).json({
          message: "The letter with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The letter information could not be retrieved." });
    });
});

module.exports = router;
