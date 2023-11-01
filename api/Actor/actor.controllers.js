const Actor = require("../../model/Actor");

exports.actorCreate = async (req, res, next) => {
  try {
    const newActor = await Actor.create(req.body);
    res.status(201).json(newActor);
  } catch (error) {
    next(error);
  }
};

exports.actorGet = async (req, res, next) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (error) {
    next(error);
  }
};

exports.actorDelete = async (req, res, next) => {
  try {
    await req.actor.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.actorUpdate = async (req, res, next) => {
  try {
    await req.actor.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.findActor = async (id, next) => {
  try {
    const actor = await Actor.findById(id);
    if (actor) {
      return actor;
    } else {
      next({ message: "Actor not found", status: 404 });
    }
  } catch (error) {
    next(error);
  }
};

exports.addActorToMovie = async (req, res, next) => {
  try {
    await req.actor.updateOne({ $push: { movies: req.movie } });
    await req.movie.updateOne({ $push: { actors: req.actor } });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.getOneActor = async (req, res, next) => {
  try {
    const actor = await req.actor.populate("movies");
    res.status(200).json(actor);
  } catch (error) {
    next(error);
  }
};
