const allMovies = require("../models/allMovies");

// Get all movies
const getAllMovies = async (req, res) => {
  try {
    res.status(200).send(allMovies);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// Get a single movie
const getSingleMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const foundMovie = allMovies.find(
      (movie) => String(movie.id) === String(id)
    );
    if (foundMovie) {
      res.status(200).send(foundMovie);
    } else {
      res.status(404).send("Movie does not exist");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// Create a new movie
const createMovie = async (req, res) => {
  const { title, description, views, videoUrl, updatedAt, rating } = req.body;
  try {
    const newMovie = {
      id: String(allMovies.length + 1),
      title,
      description,
      views,
      videoUrl,
      updatedAt,
      rating,
    };
    allMovies.push(newMovie);
    res.status(201).send(newMovie);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// Update a movie
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, description, views, videoUrl, updatedAt, rating } = req.body;
  try {
    const foundMovie = allMovies.find(
      (movie) => String(movie.id) === String(id)
    );
    if (foundMovie) {
      foundMovie.title = title;
      foundMovie.description = description;
      foundMovie.views = views;
      foundMovie.videoUrl = videoUrl;
      foundMovie.updatedAt = updatedAt;
      foundMovie.rating = rating;
      res.status(200).send(foundMovie);
    } else {
      res.status(404).send("Movie does not exist");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// Delete a movie
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const foundMovie = allMovies.find(
      (movie) => String(movie.id) === String(id)
    );
    if (foundMovie) {
      const matchingMovie = allMovies.indexOf(foundMovie);
      allMovies.splice(matchingMovie, 1);
      res.status(200).send("Movie deleted successfully");
    } else {
      res.status(404).send("Movie does not exist");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  getAllMovies,
  getSingleMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
