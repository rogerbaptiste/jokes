const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema ({
    title:{
    type:String,
    required: [true, "Joke is required "],
    minlength: [3, "Joke must be at least 3 characters long"],
    maxlength: [255, "Joke must be less than 255 charachters long"]
    },
}, {timestamps: true});



module.exports = mongoose.model('Joke', JokeSchema);
