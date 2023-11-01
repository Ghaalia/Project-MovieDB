const express = require("express");
const router = express.Router();
const {
  findMovie,
  movieGet,
  movieCreate,
  movieDelete,
  movieUpdate,
  reviewCreate,
} = require("./movie.controllers");

router.param("movieId", async (req, res, next, movieId) => {
  const movie = await findMovie(movieId, next);
  req.movie = movie;
  next();
});

router.get("/", movieGet);
router.post("/", movieCreate);
router.delete("/:movieId", movieDelete);
router.put("/:movieId", movieUpdate);
router.post("/:movieId", reviewCreate);

module.exports = router;
