const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({

    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
});

const movieModel = mongoose.model("Movie", moviesSchema)

module.exports = movieModel