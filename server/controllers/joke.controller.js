const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.findOneById = (req, res) => {
    Joke.findJokeById = (req.params.id)
        .then((joke) => res.json({ joke }))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.create = (req, res) => {
    const {title} = req.body;
    Joke.create({
        title
    })
        .then((newJoke) => res.json({ joke: newJoke }))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
        .then((updatedJoke) => res.json({ joke: updatedJoke }))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOneJoke({ _id: req.params._id })
        .then((deleteConfirmation) => res.json({ deleteConfirmation }))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }));
};




//alternative
// module.exports = {
//     getAllJokes,
//     getJokeById,
//     createNewJoke,
//     updateJoke,
//     deleteJoke,
// };