const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js')

/* GET home page */


router.get('/', function (req, res, next) {

    res.render("index", {
        title: "Cinema Ironhack"
    })

});


router.get("/movies", function (req, res, next) {
    Movie.find()
        .then(function (allTheMoviesFromDB) {
            console.log(`${allTheMoviesFromDB.length} films retrouves depuis la base`)

            res.render('movies', {

                films: allTheMoviesFromDB
            })
        })
        .catch(err => {
            console.log(err);
            next(err);

        })
})


router.get('/movies/:id', function (req, res, next) {
    console.log('id=', req.params.id)

    // Interroger ma base et retrouve le livre d'id 

    Movie.findOne({
            _id: req.params.id
        })
        .then(function (theMovieFromDB) {
            res.render('movie-details', {
                theMovie: theMovieFromDB
            })
        })
        .catch(err => console.log(err))
})




module.exports = router;