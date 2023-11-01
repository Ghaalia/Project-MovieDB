const express = require("express");
const router = express.Router();
const {
  actorGet,
  actorCreate,
  actorDelete,
  actorUpdate,
  findActor,
  addActorToMovie,
  getOneActor,
} = require("./actor.controllers");

const { findMovie } = require("../Movie/movie.controllers");

router.param("actorId", async (req, res, next, actorId) => {
  const actor = await findActor(actorId, next);
  req.actor = actor;
  next();
});

router.param("movieId", async (req, res, next, movieId) => {
  const movie = await findMovie(movieId, next);
  req.movie = movie;
  next();
});

router.get("/", actorGet);
router.post("/", actorCreate);
router.delete("/:actorId", actorDelete);
router.put("/:actorId", actorUpdate);
router.get("/:actorId", getOneActor);

router.put("/:actorId/:movieId", addActorToMovie);

module.exports = router;
