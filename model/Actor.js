const { model, Schema } = require("mongoose");

const ActorSchema = new Schema({
  name: String,
  age: String,
  movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
});

module.exports = model("Actor", ActorSchema);
