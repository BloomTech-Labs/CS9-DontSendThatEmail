// place for Letter0 router
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


router.get("/:id", (req, res) => {
    const id = req.params.id; 
    Letter.findById(id)
    .populate('user_id')
    .then(resp => {
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



// http://localhost:5000/letters/updateLetter

router.post('/updateLetter', (req, res) => {
    // console.log(req.body);
    const { content, id } = req.body;
  
    // Insert possible check for if `content` was provided here
  
    Letter.findById(id).then(letter => {
      letter.versions.push({ content });
      letter.save()
        .then(updatedletter => {
          res.status(200).json(updatedletter);
        })
        .catch(err => {
          res.status(404).json(err);
        });
    });
});












// router.put('/:id', (req, res) => {
//   const id  = req.params.id;
//     const update = req.body; 
//     const options = {new: true}; 

//     Letter.findByIdAndUpdate(id, update, options)
//         .then(resp => {
//             res.status(200).json(resp)
//         })
//         .catch(error => {
//             res.status(500).json({ error: "The letter information could not be modified." });
//         });
// })



// router.delete('/:id', (req, res) => {
//    const id = req.params.id; 
//    Letter.remove({ _id: id})
//    .then(response => {
//         if (response.ok === 1) {
//             res.status(200).json({ message: `succussfully deleted the letter with id: ${id}` });
//         } else {
//             res.status(404).json({ message: "The letter with the specified ID does not exist." });
//         }
//     })
//     .catch(err => {
//     res.status(500).json({ error: "The letter information could not be retrieved." });
//     });
// })

/*

*/



module.exports = router;