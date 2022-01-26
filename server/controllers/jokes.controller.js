const Jokes = require("../models/jokes.model")

module.exports.testResponse = (req, res) => {
    res.json({message:"hey its me"});
}

module.exports.findAllJokes = (req, res) => {
    Jokes.find({})
        .then(results=>res.json({results: results}))
        .catch(err=>res.json({message: "that didn't quite work.", error: err}));
}

module.exports.findOneJoke = (req, res) => {
    Jokes.findOne({_id: req.params._id })
        .then(results=>res.json({results: results}))
        .catch(err=>res.json({message: "that didn't quite work.", error: err}));
} 

module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
    .then(newJoke=>res.json({results: newJoke}))
    .catch(err=>res.json({message:"that didn't work", error: err})) 
}

module.exports.deleteJoke = (req, res) => {
    Jokes.deleteOne({_id:req.params._id})
        .then(results=>res.json({results: results}))
        .catch(err=>res.json({message: "that didn't quite work.", error: err}));
} 

module.exports.updateOneJoke = (req, res) => {
    Jokes.updateOne({_id:req.params._id}, req.body)
        .then(results=>res.json({results: results}))
        .catch(err=>res.json({message: "that didn't quite work.", error: err}));
}



