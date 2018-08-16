// place for Letter router
const router = require("express").Router();


const Letter = require('../models/letter'); 


router.get("/", (req, res) => {
    Letter.find().then(resp => {
        res.status(200).json(resp); 
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    } )
});
  


router.post("/", (req, res) => {
    const  letter = new Letter(req.body); 
    // Letter.versions.push(letter); 
    letter.save()
    .then(resp => {
        res.status(200).json(resp); 
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
});


module.exports = router;