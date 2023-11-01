const Review = require("../../model/Review");

exports.reviewGet = async (req, res, next) => {
  try {
    const reveiws = await Review.find();
    res.json(reveiws);
  } catch (error) {
    next(error);
  }
};
