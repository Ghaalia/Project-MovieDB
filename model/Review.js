const { model, Schema } = require("mongoose");

const ReviewSchema = new Schema({
  rate: String,
  comment: String,
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
});

module.exports = model("Review", ReviewSchema);
