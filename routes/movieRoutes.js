const express = require("express");
const app = express();

const {
  getAllMovies,
  getSingleMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies");

// Get all movies
app.get("/movies", getAllMovies);

// Get a single movie
app.get("/movies/:id", getSingleMovie);

// Create a new movie
app.post("/movies", createMovie);

// Update a movie
app.put("/movies/:id", updateMovie);

// Delete a movie
app.delete("/movies/:id", deleteMovie);

module.exports = app;
