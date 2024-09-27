const express = require('express');
const {
  getAllMovies,
  addMovie,
  deleteAllMovies,
  getMovieById,
  updateMovieById,
  deleteMovieById,
} = require('../controllers/movie.controller');

const router = express.Router();

router.get('/', getAllMovies);
router.post('/', addMovie);
router.delete('/', deleteAllMovies);
router.get('/:id', getMovieById);
router.put('/:id', updateMovieById);
router.delete('/:id', deleteMovieById);

module.exports = router;
