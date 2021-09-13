const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	joke: { type: String },
	}, { timestamps: true },)
   // create a constructor function for our model and store in variable 'User'
	const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;