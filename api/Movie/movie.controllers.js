const Movie = require("../../model/Movie");
const Review = require("../../model/Review");

exports.movieCreate = async (req, res, next) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    next(error);
  }
};

exports.reviewCreate = async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    await req.movie.updateOne({ $push: { reviews: newReview } });
    res.status(201).json(req.movie);
  } catch (error) {
    next(error);
  }
};

exports.movieGet = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    next(error);
  }
};

exports.movieDelete = async (req, res, next) => {
  try {
    await req.movie.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.movieUpdate = async (req, res, next) => {
  try {
    await req.movie.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.findMovie = async (id, next) => {
  try {
    const movie = await Movie.findById(id);
    if (movie) {
      return movie;
    } else {
      next({ message: "Movie not found", status: 404 });
    }
  } catch (error) {
    next(error);
  }
};
